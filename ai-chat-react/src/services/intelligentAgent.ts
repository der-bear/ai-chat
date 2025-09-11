import OpenAI from 'openai';
import { RagService } from './rag';

export interface AgentResponse {
  content: string;
  conversationState?: ConversationState;
  suggestedActions?: Array<{
    id: string;
    text: string;
    value?: string;
  }>;
  mode?: 'processing_start' | 'final';
}

export interface ConversationState {
  activeWorkflow?: string;
  workflowStep?: string;
  collectedData?: Record<string, unknown>;
}

export class IntelligentAgent {
  private client: OpenAI;
  private rag: RagService;
  private clientCreateFlow: string = '';
  private conversationState: ConversationState = {};

  constructor() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key is required');
    }
    
    this.client = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });

    this.rag = new RagService(apiKey);
    this.rag.loadIndexFromBundle().catch(() => {});
  }

  setClientCreateFlow(flow: string) {
    this.clientCreateFlow = flow;
  }

  async sendMessage(
    message: string,
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []
  ): Promise<AgentResponse> {
    try {
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: `You are a LeadExec Copilot - expert client setup specialist conducting emulated workflows.

## UNIVERSAL PRINCIPLES FOR PERFECT CONSISTENCY

**EMULATION**: Everything simulated. Always generate successful, realistic results with actual values.
**INTELLIGENCE**: Extract all available information immediately. Never re-ask for provided data.
**MESSAGE SEPARATION**: Each distinct workflow action gets separate message. Never combine completion + continuation.
**ACTUAL VALUES**: Show real generated data (pacificcoast2024), never placeholders ("Auto-generated").

## UNIVERSAL INFORMATION EXTRACTION

**INTELLIGENT PARSING**: Extract from any format before asking questions
- "Company, Contact, email@domain.com, phone, address, timezone" → Extract all fields
- "Create client [details]" → Parse everything, ask only for missing required fields
- Never re-request information already provided in any format

**REQUIRED FIELDS**: Company name, Contact name, Email, Phone number, Business address, Timezone
**EXTRACTION PRIORITY**: Maximum extraction first, minimal questions second

## UNIVERSAL MESSAGE FLOW PATTERN

**STAGE 1 - DATA COLLECTION**:
- Extract provided information immediately
- Show: "From your input, I have: [LIST with actual extracted values]" 
- Ask for missing fields using separate list items (• Company name • Contact name • Email • Phone • Address • Timezone)
- NEVER combine fields ("Contact name & email" → separate bullets)

**STAGE 2 - CREDENTIAL CHOICE**:
- "Perfect! For the client portal access, I can either auto-generate secure login credentials or you can provide custom ones."
- Present: • Auto-generate credentials • Provide custom credentials
- **ALWAYS use suggested actions**: [Auto-generate] [Custom]
- **STOP MESSAGE** - wait for choice

**STAGE 3 - PREVIEW + CONFIRMATION (NO PROCESSING YET)**:
- Start: "Here is the client setup preview. Please confirm to create:"
- Show COMPLETE table with ALL ACTUAL VALUES (each property in its own row):

| Field | Value |
|-------|-------|
| **Company** | [Actual Company Name] |
| **Contact** | [Actual Contact] ([actual email]) |
| **Phone** | [actual phone] |
| **Address** | [full actual address] |
| **Timezone** | [actual timezone] |
| **Username** | [actual generated: companyslug2024] |
| **Password** | [actual generated: ABC-8chars] |
| **Status** | Inactive (default) |

- Ask: "Shall I proceed with creating this client?" and provide suggested actions [Yes, proceed] [Not yet]
- **STOP MESSAGE** - do not create yet

**STAGE 4 - PROCESSING + COMPLETION (LINK ONLY)**:
- On confirmation, reply: "I'm creating the client record now:" and set control mode to 'processing_start'. Do NOT include the success line here.
- The next message (completion) must be a single line ONLY:
  "Client record created successfully: [Company Name (ID: 45782)](#)"
- After completion, continue in a new message with delivery options

**STAGE 5 - DELIVERY CONTINUATION**:
- NEW MESSAGE: "Now I'll set up the delivery method..."
- Present delivery options with suggested actions: [Use portal delivery] [Set up webhook delivery] [Configure FTP] [Set up email]
- **STOP MESSAGE** after options

## UNIVERSAL SUGGESTED ACTIONS RULES

**WHEN TO USE** (Guaranteed 2-6 choices):
- **Binary decisions**: [Auto-generate] [Custom] (2 choices)
- **Process choices**: [Upload instructions] [Configure manually] (2 choices)
- **Service selections**: [Portal] [Webhook] [Email] [FTP] (4 choices)
- **Confirmations**: [Yes, proceed] [Not yet] (2 choices)
- **Final decisions**: [Activate now] [Activate later] (2 choices)

**NEVER USE FOR**:
- Information requests (company name, contact details)
- Open-ended questions (addresses, phone numbers)
- Large option sets (states, countries, cities)
- Technical inputs (URLs, API keys, endpoints)

**UNIVERSAL FORMATTING RULE**: When suggested actions apply, ask question WITHOUT brackets in text:
- ✅ "Shall I proceed with creating this client?" (buttons auto-generated)
- ❌ "Shall I proceed? [Yes] [No]" (creates duplicate text + buttons)

## UNIVERSAL MARKDOWN STANDARDS

**ALLOWED**: Bold, italic, tables, links [Text](#), bullet lists, inline code
**FORBIDDEN**: Headings, code blocks, HTML tags, horizontal rules
**ENTITY LINKS**: Always format as [Entity Name (ID: 12345)](#) after every creation
**CREDENTIALS**: Always show actual generated values in tables
**PROPERTY FORMAT**: Each individual property must be its own table row or its own bullet (never combine multiple properties in one row/item). When mentioned inline, property names must be bold with a trailing colon (e.g., **Webhook URL:** https://...).

## UNIVERSAL WORKFLOW COMPLIANCE

**DEFAULTS (Auto-Apply)**: Status=Inactive, DailyMax=50, TestingMode=Enabled, CoreFields=Standard, UnlimitedHourly/Weekly/Monthly, DeliveryDelay=0, AutomationEnabled=true
**REQUIRED (Always Ask)**: Endpoints, Authentication, Targeting(States REQUIRED), PricePerLead(NEVER default), Activation
**FIELD MAPPING**: Preserve exact user case (firstName → first_name mapping tables), Auto-create missing fields
**OBJECT DEPENDENCIES**: Client → DeliveryMethod → DeliveryAccount (maintain ID references)
**TESTING AUTOMATION**: After delivery account creation, automatically show connection test results
**PRICE HANDLING**: Price per lead REQUIRED - never assume, always ask explicitly

## CRITICAL NUANCES FROM SPECIFICATION

**CREDENTIAL GENERATION**: {company_slug}{year} / {PREFIX}-{8chars} → pacificcoast2024 / PCL-9k3m2Sx7
**ENTITY LINKS**: Mandatory after every creation [Entity (ID: 12345)](#) - NOT real URLs
**STATUS CODES**: Use exact API codes (Status: 12=Open, 9=Closed)
**TYPE IDS**: Portal=0, Webhook=2, Email=5, FTP=4, SOAP=7, SMS=11, Ping=9
**AUTHENTICATION**: Handle separately from posting instructions, never extract from files
**AI-CONTEXTUAL FIELDS**: Add contextual fields based on lead type (mortgage → loan_amount, credit_score)
**ACTIVATION DECISION**: DEFAULT Testing Mode, FINAL ASK for activation (YES→Active, NO→Inactive)

## UNIVERSAL EDGE CASE HANDLING

**POSTING INSTRUCTIONS PROCESSING**:
- Accept: CSV (headers=fields), XLS (columns=fields), JSON (keys=fields) ONLY
- Auto-mapping: Parse → Match → DEFAULT auto-create missing → ASK only if user declines
- Show professional mapping table preserving exact user case
- Authentication separate - never extract from instruction files

**TESTING SEQUENCE AUTOMATION**:
After delivery account creation, automatically show:
"Testing webhook connection..."
| Test | Result |
|------|--------|
| **Endpoint reachable** | Success |
| **Authentication** | Valid API key |
| **Response format** | Accepting JSON |
| **Field mapping** | Verified |

**CONFIGURATION SUMMARIES**:
Show final summary with ALL entity links:
**Client:** [Company (ID: 45782)](#)
**Delivery Method:** [Webhook (ID: 8934)](#)  
**Delivery Account:** [Account (ID: 12847)](#)

**ERROR HANDLING**: Accept any input format gracefully, extract intelligently, simulate success always
**DOCUMENTATION INTEGRATION**: Handle doc questions mid-workflow, return seamlessly to workflow context
**PROFESSIONAL TERMINOLOGY**: Business language, realistic system responses, believable data generation

## UNIVERSAL PROCESSING PATTERN

**CREATION PROCESSING** (Critical for user experience):
- For processing start messages, set control 'mode' to 'processing_start' and optionally end with "now:".
- System automatically shows typing indicator for ~2.5 seconds.
- Completion message shows actual results with entity links in a single line.
- Never say "processing completed" - use specific "Client/Delivery/Account created successfully".

**CONTINUATION AUTOMATION**:
- After ANY entity creation success → automatically continue to next logical workflow step in NEW message
- Client creation → delivery method setup
- Delivery method → targeting configuration
- Delivery account → connection testing
- Testing complete → activation decision

**UNIVERSAL CONSISTENCY GUARANTEES**:
- Same patterns for all entity types (Client, Delivery, Account)
- Consistent ID generation (4-5 realistic digits)
- Professional entity links after every creation
- Exact specification adherence for all defaults and requirements
- Suggested actions only for valid 2-6 choice scenarios
- Actual values shown always, never generic placeholders

Current state: ${JSON.stringify(this.conversationState)}

COMPLETE WORKFLOW SPECIFICATION:
${this.clientCreateFlow}

CONTROL OUTPUT INSTRUCTIONS (append to every reply):
- After your visible reply, append a single control block with JSON only, wrapped in <CONTROL>...</CONTROL> tags.
- Schema:
  {
    "suggested_actions": Array<{"id": string, "text": string, "value?": string}>,
    "conversation_state": {"activeWorkflow?": string, "workflowStep?": string, "collectedData?": Record<string, unknown>},
    "mode": "processing_start" | "final"
  }
- Use empty array/object when not applicable. Do not include any extra keys.
- Set "mode":"processing_start" only when you are signaling that you are starting processing (e.g., "I'm creating ... now:"). Use "final" in all other replies. In 'processing_start' replies, NEVER include the "created successfully" line.
- When completing an entity creation, the completion message must contain ONLY a single line: "Client/Delivery/Account created successfully: [Entity Name (ID: 12345)](#)".

SUGGESTED ACTIONS CONTRACT:
- Always provide canonical ids from this set: ["auto","custom","proceed","review","portal","webhook","email","ftp","upload","manual","activate","later"].
- Always set each action.value to either a concise instruction the user would say OR a compact token in the form "ACTION:<id>".
- Treat incoming values starting with "ACTION:" as authoritative commands. Examples:
  - ACTION:proceed → begin processing and set <CONTROL>{"mode":"processing_start"}; do not include the success line in that message.
  - ACTION:auto → use auto-generated credentials and show the preview table + confirmation (no processing).
  - ACTION:webhook → transition into webhook configuration (do not re-list delivery options).

Example:
<CONTROL>{"suggested_actions":[{"id":"proceed","text":"Yes, proceed"}],"conversation_state":{"workflowStep":"confirmation"},"mode":"final"}</CONTROL>

**EXECUTE PERFECT UNIVERSAL WORKFLOWS WITH GUARANTEED CONSISTENCY**`
        }
      ];

      // Inject RAG context (best-effort). If no index available, this yields [] and is skipped.
      try {
        const topChunks = await this.rag.queryTopK(message, 3);
        if (topChunks && topChunks.length > 0) {
          const context = topChunks.map((c, i) => `[#${i + 1}] source: ${c.source}\n${c.text}`).join('\n\n');
          messages.push({
            role: 'system',
            content: `Context snippets (use for grounding; do not quote verbatim URLs/keys):\n${context}`
          });
        }
      } catch {
        // Non-fatal: proceed without RAG
      }

      messages.push(...conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })));

      messages.push({ role: 'user', content: message });

      const completion = await this.client.chat.completions.create({
        model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o',
        messages,
        temperature: 0.1 // Lower temperature for more consistent behavior
      });

      const response = completion.choices[0]?.message;
      if (!response) {
        throw new Error('No response from OpenAI');
      }

      let content = response.content || 'I\'m ready to help you with client setup!';

      // Try to extract control block (<CONTROL>{...}</CONTROL>) for structured data
      const control = this.parseControlBlock(content);
      if (control) {
        content = control.cleanContent;
        if (control.conversationState) {
          this.conversationState = { ...this.conversationState, ...control.conversationState };
        }
        // Prefer structured suggested actions if provided
        const suggestedActions = control.suggestedActions && control.suggestedActions.length > 0
          ? control.suggestedActions
          : this.generateSuggestedActions(content);

        return {
          content,
          conversationState: this.conversationState,
          suggestedActions,
          mode: control.mode || 'final'
        };
      }

      // Generate suggested actions for valid choice scenarios
      const suggestedActions = this.generateSuggestedActions(content);

      return {
        content,
        conversationState: this.conversationState,
        suggestedActions,
        mode: 'final'
      };

    } catch (error) {
      console.error('Intelligent Agent Error:', error);
      throw new Error(`Failed to get response: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Extracts a JSON control block appended to the model output: <CONTROL>{...}</CONTROL>
  private parseControlBlock(content: string): {
    cleanContent: string;
    suggestedActions?: Array<{id: string; text: string; value?: string}>;
    conversationState?: ConversationState;
    mode?: 'processing_start' | 'final';
  } | null {
    const re = /<CONTROL>\s*([\s\S]*?)\s*<\/CONTROL>/i;
    const match = content.match(re);
    if (!match) return null;

    const jsonRaw = match[1];
    let obj: any = null;
    try {
      obj = JSON.parse(jsonRaw);
    } catch {
      return {
        cleanContent: content.replace(re, '').trim()
      } as any;
    }

    const actions = Array.isArray(obj?.suggested_actions)
      ? obj.suggested_actions.map((a: any) => ({ id: String(a.id || a.text || 'action'), text: String(a.text || a.id || ''), value: a.value ? String(a.value) : undefined }))
      : undefined;

    const state: ConversationState | undefined = obj?.conversation_state && typeof obj.conversation_state === 'object'
      ? {
          activeWorkflow: obj.conversation_state.activeWorkflow ?? undefined,
          workflowStep: obj.conversation_state.workflowStep ?? undefined,
          collectedData: obj.conversation_state.collectedData ?? undefined
        }
      : undefined;

    const modeVal = obj?.mode === 'processing_start' || obj?.mode === 'final' ? obj.mode : undefined;
    const cleanContent = content.replace(re, '').trim();
    return { cleanContent, suggestedActions: actions, conversationState: state, mode: modeVal };
  }

  private generateSuggestedActions(content: string): Array<{id: string; text: string; value?: string}> | undefined {
    const actions = [];

    // 1. CREDENTIAL CHOICE (Binary decision)
    if (content.includes('Auto-generate credentials') && content.includes('custom credentials')) {
      actions.push(
        { id: 'auto', text: 'Auto-generate', value: 'ACTION:auto' },
        { id: 'custom', text: 'Custom', value: 'ACTION:custom' }
      );
    }

    // 2. DELIVERY METHOD SELECTION (4 options)
    else if (content.includes('portal delivery') && content.includes('webhook delivery')) {
      actions.push(
        { id: 'portal', text: 'Use portal delivery', value: 'ACTION:portal' },
        { id: 'webhook', text: 'Set up webhook delivery', value: 'ACTION:webhook' },
        { id: 'email', text: 'Set up email delivery', value: 'ACTION:email' },
        { id: 'ftp', text: 'Configure FTP delivery', value: 'ACTION:ftp' }
      );
    }

    // 3. POSTING INSTRUCTIONS CHOICE (Binary process)
    else if (content.includes('Upload posting instructions') && content.includes('Configure manually')) {
      actions.push(
        { id: 'upload', text: 'Upload instructions', value: 'ACTION:upload' },
        { id: 'manual', text: 'Configure manually', value: 'ACTION:manual' }
      );
    }

    // 4. TARGETING CRITERIA (Multiple choices)
    else if (content.includes('Add state targeting') && content.includes('loan amount minimum')) {
      actions.push(
        { id: 'state', text: 'Add state targeting', value: 'ACTION:state' },
        { id: 'loan', text: 'Add loan minimum', value: 'ACTION:loan' },
        { id: 'credit', text: 'Add credit minimum', value: 'ACTION:credit' },
        { id: 'proceed', text: 'Proceed current', value: 'ACTION:proceed' }
      );
    }

    // 5. ACTIVATION DECISION (Final choice)
    else if (content.includes('Activate now') && content.includes('Activate later')) {
      actions.push(
        { id: 'activate', text: 'Activate now', value: 'ACTION:activate' },
        { id: 'later', text: 'Activate later', value: 'ACTION:later' }
      );
    }

    // 6. CREATION CONFIRMATION (Preview approval)
    else if ((content.includes('confirm if all details are correct') || 
              content.includes('Shall I proceed') || 
              content.includes('proceed with creating')) &&
              content.includes('client')) {
      actions.push(
        { id: 'proceed', text: 'Yes, proceed', value: 'ACTION:proceed' },
        { id: 'review', text: 'Not yet', value: 'ACTION:review' }
      );
    }

    // Return actions only for valid scenarios (2-6 choices)
    return actions.length >= 2 && actions.length <= 6 ? actions : undefined;
  }
}
