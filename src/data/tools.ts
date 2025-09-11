import { ToolDefinition } from '../services/openaiService';

export const AVAILABLE_TOOLS: ToolDefinition[] = [
  {
    type: 'function',
    function: {
      name: 'get_client_list',
      description: 'Retrieve a list of all clients in the system',
      parameters: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            enum: ['active', 'pending', 'inactive', 'all'],
            description: 'Filter clients by status'
          },
          limit: {
            type: 'number',
            description: 'Maximum number of clients to return'
          }
        }
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'create_webhook',
      description: 'Create a new webhook for lead notifications',
      parameters: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            description: 'The webhook URL to send notifications to'
          },
          events: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['lead.created', 'lead.updated', 'lead.converted']
            },
            description: 'Events that should trigger the webhook'
          },
          description: {
            type: 'string',
            description: 'Optional description for the webhook'
          }
        },
        required: ['url']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'test_lead_submission',
      description: 'Test lead submission with sample data',
      parameters: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Test lead name'
          },
          email: {
            type: 'string',
            description: 'Test lead email'
          },
          phone: {
            type: 'string',
            description: 'Test lead phone number'
          },
          source: {
            type: 'string',
            description: 'Lead source (e.g., website, social, referral)'
          }
        },
        required: ['name', 'email']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_webhook_status',
      description: 'Check the status and activity of a webhook',
      parameters: {
        type: 'object',
        properties: {
          webhookId: {
            type: 'string',
            description: 'The ID of the webhook to check'
          }
        },
        required: ['webhookId']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'update_client_status',
      description: 'Update the status of a client',
      parameters: {
        type: 'object',
        properties: {
          clientId: {
            type: 'string',
            description: 'The ID of the client to update'
          },
          status: {
            type: 'string',
            enum: ['active', 'pending', 'inactive'],
            description: 'New status for the client'
          },
          notes: {
            type: 'string',
            description: 'Optional notes about the status change'
          }
        },
        required: ['clientId', 'status']
      }
    }
  }
];