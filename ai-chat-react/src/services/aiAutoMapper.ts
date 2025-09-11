import OpenAI from 'openai';

export interface AIMapping {
  systemField: string;
  userField: string;
  status: 'mapped' | 'skipped' | 'created';
  confidence: number;
  reasoning?: string;
}

export interface AIMappingResult {
  mappings: AIMapping[];
  summary: {
    totalFields: number;
    mapped: number;
    skipped: number;
    needsCreation: number;
  };
}

export class AIAutoMapper {
  private client: OpenAI;

  constructor() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key is required');
    }
    
    this.client = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });
  }

  async mapFields(userFields: string[], sampleData?: Record<string, any>): Promise<AIMappingResult & { suggestedLeadType?: string; confidence?: number }> {
    try {
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: `You are a field mapping and lead type detection specialist. Analyze user fields and suggest appropriate lead type.

STANDARD SYSTEM FIELDS:
- first_name, last_name
- email, primary_phone  
- loan_amount, credit_score
- state, zip_code, address, city
- property_value, monthly_income
- date_of_birth, ssn_last_four

LEAD TYPES TO DETECT:
- Mortgage/Home Loan: loan_amount, credit_score, property_value, loan_purpose
- Auto: vehicle_make, vehicle_model, vehicle_year, trade_in_value
- Insurance: coverage_type, current_provider, policy_expiration
- Personal Loan: loan_amount, debt_consolidation, credit_score
- Credit Card: credit_score, annual_income, existing_debt

MAPPING RULES:
- Map to existing system fields when possible
- If no good match, mark as "skipped" 
- Consider field names AND sample data for context
- Suggest most likely lead type based on fields
- Provide confidence scores 0-100

RESPONSE FORMAT (JSON only):
{
  "mappings": [
    {
      "userField": "firstName", 
      "systemField": "first_name",
      "status": "mapped",
      "confidence": 95,
      "reasoning": "Clear match for first name"
    }
  ],
  "suggestedLeadType": "Mortgage/Home Loan",
  "leadTypeConfidence": 85,
  "leadTypeReasoning": "Fields indicate mortgage application with loan amount and credit score"
}`
        },
        {
          role: 'user', 
          content: `Map these fields: ${userFields.join(', ')}

${sampleData ? `Sample data: ${JSON.stringify(sampleData, null, 2)}` : 'No sample data provided'}`
        }
      ];

      const completion = await this.client.chat.completions.create({
        model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o',
        messages,
        temperature: 0.1,
        response_format: { type: "json_object" }
      });

      const response = completion.choices[0]?.message?.content;
      if (!response) {
        throw new Error('No mapping response received');
      }

      const result = JSON.parse(response);
      
      // Calculate summary
      const mappings: AIMapping[] = result.mappings || [];
      const summary = {
        totalFields: userFields.length,
        mapped: mappings.filter(m => m.status === 'mapped').length,
        skipped: mappings.filter(m => m.status === 'skipped').length,
        needsCreation: mappings.filter(m => m.status === 'created').length
      };

      return { mappings, summary };

    } catch (error) {
      console.error('AI Auto-mapping error:', error);
      // Fallback to basic mapping
      return this.fallbackMapping(userFields);
    }
  }

  private fallbackMapping(userFields: string[]): AIMappingResult {
    const basicMap: Record<string, string> = {
      'firstname': 'first_name',
      'lastname': 'last_name', 
      'email': 'email',
      'phone': 'primary_phone',
      'loanamount': 'loan_amount',
      'creditscore': 'credit_score',
      'state': 'state'
    };

    const mappings: AIMapping[] = userFields.map(field => {
      const normalized = field.toLowerCase().replace(/[_\s-]/g, '');
      const systemField = basicMap[normalized];
      
      return {
        userField: field,
        systemField: systemField || 'custom_field',
        status: systemField ? 'mapped' : 'skipped',
        confidence: systemField ? 85 : 0,
        reasoning: systemField ? 'Basic pattern match' : 'No system equivalent'
      };
    });

    const summary = {
      totalFields: userFields.length,
      mapped: mappings.filter(m => m.status === 'mapped').length,
      skipped: mappings.filter(m => m.status === 'skipped').length,
      needsCreation: 0
    };

    return { mappings, summary };
  }
}