export interface FieldMapping {
  systemField: string;
  userField: string;
  status: 'mapped' | 'skipped' | 'created';
  dataType?: string;
}

export interface FileProcessingResult {
  fields: string[];
  mappings: FieldMapping[];
  format: 'csv' | 'json' | 'xlsx' | 'unknown';
  sampleData?: Record<string, any>;
}

export class FileProcessor {
  
  static async processFile(file: File, content: string): Promise<FileProcessingResult> {
    const extension = file.name.split('.').pop()?.toLowerCase();
    
    switch (extension) {
      case 'csv':
        return this.processCSV(content);
      case 'json':
        return this.processJSON(content);
      case 'xlsx':
      case 'xls':
        return this.processExcel(content);
      default:
        return this.processText(content);
    }
  }

  static processCSV(content: string): FileProcessingResult {
    const lines = content.split('\n').filter(line => line.trim());
    if (lines.length < 1) {
      throw new Error('Empty CSV file');
    }

    // Parse headers from first line
    const headers = lines[0].split(',').map(header => 
      header.trim().replace(/["']/g, '')
    );

    // Parse sample data from second line if available
    let sampleData: Record<string, any> = {};
    if (lines.length > 1) {
      const values = lines[1].split(',').map(value => 
        value.trim().replace(/["']/g, '')
      );
      
      headers.forEach((header, index) => {
        sampleData[header] = values[index] || '';
      });
    }

    const mappings = this.generateFieldMappings(headers);

    return {
      fields: headers,
      mappings,
      format: 'csv',
      sampleData
    };
  }

  static processJSON(content: string): FileProcessingResult {
    try {
      const data = JSON.parse(content);
      let fields: string[] = [];
      let sampleData: Record<string, any> = {};

      if (Array.isArray(data) && data.length > 0) {
        // Array of objects - use keys from first object
        fields = Object.keys(data[0]);
        sampleData = data[0];
      } else if (typeof data === 'object') {
        // Single object
        fields = Object.keys(data);
        sampleData = data;
      } else {
        throw new Error('Invalid JSON structure');
      }

      const mappings = this.generateFieldMappings(fields);

      return {
        fields,
        mappings,
        format: 'json',
        sampleData
      };
    } catch (error) {
      throw new Error('Invalid JSON format');
    }
  }

  static processExcel(_content: string): FileProcessingResult {
    // For demo purposes, simulate Excel processing
    // In real implementation, you'd use a library like xlsx
    const mockFields = ['firstName', 'lastName', 'email', 'phone', 'loanAmount'];
    const mockSample = {
      firstName: 'John',
      lastName: 'Doe', 
      email: 'john@example.com',
      phone: '555-0123',
      loanAmount: '250000'
    };

    const mappings = this.generateFieldMappings(mockFields);

    return {
      fields: mockFields,
      mappings,
      format: 'xlsx',
      sampleData: mockSample
    };
  }

  static processText(content: string): FileProcessingResult {
    // Try to extract field names from text content
    const lines = content.split('\n');
    const fields: string[] = [];
    
    // Look for patterns like "Field: value" or "fieldName"
    lines.forEach(line => {
      const fieldMatch = line.match(/(\w+):/);
      if (fieldMatch) {
        fields.push(fieldMatch[1]);
      }
    });

    if (fields.length === 0) {
      // Fallback: look for common field names
      const commonFields = ['firstName', 'lastName', 'email', 'phone'];
      commonFields.forEach(field => {
        if (content.toLowerCase().includes(field.toLowerCase())) {
          fields.push(field);
        }
      });
    }

    const mappings = this.generateFieldMappings(fields);

    return {
      fields,
      mappings,
      format: 'unknown',
      sampleData: {}
    };
  }

  static generateFieldMappings(userFields: string[]): FieldMapping[] {
    // Standard system fields for lead processing
    const systemFieldMap: Record<string, string[]> = {
      'first_name': ['firstname', 'fname', 'first', 'givenname'],
      'last_name': ['lastname', 'lname', 'last', 'surname', 'familyname'],
      'email': ['email', 'emailaddress', 'mail'],
      'primary_phone': ['phone', 'telephone', 'phonenumber', 'primaryphone', 'mobile'],
      'loan_amount': ['loanamount', 'amount', 'loanvalue', 'mortgageamount'],
      'credit_score': ['creditscore', 'score', 'fico', 'credit'],
      'state': ['state', 'st', 'statecode', 'province'],
      'property_value': ['propertyvalue', 'homevalue', 'propvalue'],
      'zip_code': ['zip', 'zipcode', 'postal', 'postalcode'],
      'address': ['address', 'street', 'streetaddress'],
      'city': ['city', 'town'],
      'monthly_income': ['income', 'monthlyincome', 'grossincome']
    };

    const mappings: FieldMapping[] = [];

    userFields.forEach(userField => {
      const normalizedField = userField.toLowerCase().replace(/[_\s-]/g, '');
      let mappedSystemField: string | null = null;

      // Try to find exact or partial matches
      for (const [systemField, aliases] of Object.entries(systemFieldMap)) {
        if (aliases.some(alias => alias === normalizedField)) {
          mappedSystemField = systemField;
          break;
        }
      }

      mappings.push({
        systemField: mappedSystemField || 'custom_field',
        userField,
        status: mappedSystemField ? 'mapped' : 'skipped',
        dataType: this.inferDataType(userField)
      });
    });

    return mappings;
  }

  static inferDataType(fieldName: string): string {
    const lowerField = fieldName.toLowerCase();
    
    if (lowerField.includes('email')) return 'email';
    if (lowerField.includes('phone') || lowerField.includes('telephone')) return 'phone';
    if (lowerField.includes('amount') || lowerField.includes('value') || lowerField.includes('price')) return 'currency';
    if (lowerField.includes('score') || lowerField.includes('rating')) return 'number';
    if (lowerField.includes('date') || lowerField.includes('time')) return 'date';
    if (lowerField.includes('zip') || lowerField.includes('postal')) return 'zipcode';
    
    return 'text';
  }
}