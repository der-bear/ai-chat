# LeadExec Client Setup Flow - Minimal Configuration with Smart Defaults

## 1. Client Creation
```
User: Create new client

Agent: Client details needed:
• Company name (REQUIRED)
• Email address (REQUIRED)
• Contact name (OPTIONAL)
• Phone number (OPTIONAL)
• Business address & timezone (OPTIONAL)

[Client provides info]

NOTE: Login credentials will be configured if Portal Delivery is selected

DEFAULT Status: Inactive (for testing)
DEFAULT Automation: Price-based
DEFAULT Values for optional fields if not provided:
• Contact name: Uses company name
• Phone: Empty (optional)
• Address: Empty (optional)
• Timezone: PST (Pacific Standard Time)
```

## 2. Delivery Method Selection

```
Agent: Select delivery method:

├─ [A] Portal Delivery
│   → DEFAULT: Ready immediately, minimal configuration
│   → CREDENTIALS REQUIRED:
│   │   • Username: AUTO-GENERATE {company_slug}{year} (e.g., "pacificcoast2024")
│   │   • Password: AUTO-GENERATE {prefix}-{8-chars} (e.g., "PCL-9k3m2Sx7")
│   │   • Or provide custom credentials
│  
├─ [B] Webhook (HTTP POST/JSON)
│   → Upload posting instructions? (CSV/XLS/JSON)
│   ├─ YES: Auto-map fields
│   │   → Found: {matched_fields}
│   │   → Missing: {unmatched_fields}
│   │   → DEFAULT: Create missing fields automatically
│   │   → ASK: Only if user declines auto-creation
│   └─ NO: Manual mapping
│   
│   ALWAYS ASK FOR:
│   • Webhook endpoint URL
│   • API key/authentication
│   • Success response pattern
│   
├─ [C] Ping/Post (Two-step)
│   → Same as Webhook for PING fields
│   → ALWAYS ASK FOR:
│   │   • PING endpoint URL
│   │   • Accept/reject pattern
│   → Create POST webhook (reuse B flow)
│   → DEFAULT: Link via AlternatePosting
│   
├─ [D] Email Delivery (Inline)
│   → DEFAULT: To = {client_email}
│   → DEFAULT: From = {user_email}
│   → DEFAULT: Subject = "New Lead - {date}"
│   → DEFAULT: Template with essential fields
│   → ASK: Additional fields beyond essentials?
│   
├─ [E] Email w/ CSV Attachment  
│   → DEFAULT: To = {client_email}
│   → DEFAULT: Subject = "Lead Report - {date}"
│   → DEFAULT: All fields included in CSV
│   → ASK: Schedule preference (immediate/hourly/daily)
│   
├─ [F] Phone Transfer
│   → DEFAULT: Agent Phone = {client_phone}
│   → ASK: Different phone number?
│   → DEFAULT: Agent Name = {contact_name}
│   → DEFAULT: Essential fields only
│   → ASK: Additional fields needed?
│   
├─ [G] FTP Delivery
│   → ALWAYS ASK FOR:
│   │   • FTP Server
│   │   • Username & Password
│   │   • Directory path
│   → DEFAULT: All fields included
│   → DEFAULT: CSV format
│   → DEFAULT: Filename = leads_{timestamp}.csv
│   
├─ [H] SOAP
│   → Same as Webhook for field mapping
│   → ALWAYS ASK FOR:
│   │   • SOAP endpoint URL
│   │   • Envelope template
│   │   • SOAPAction header
│   
└─ [I] SMS Notification
    → DEFAULT: Phone = {client_phone}
    → ASK: Different number?
    → DEFAULT: Template = "New lead: {name} {phone}"
```

## 3. Detailed Configuration by Method

### A. Portal Delivery
```
CREDENTIALS CONFIGURATION REQUIRED
• Portal Username: AUTO-GENERATE or custom
• Portal Password: AUTO-GENERATE or custom
• Access: Client portal with these credentials
• Notifications: Email alerts enabled

When Portal Delivery is selected:
1. Ask: "For portal access, would you like to auto-generate credentials or provide custom ones?"
2. If AUTO-GENERATE: Create {company_slug}{year} username and secure password
3. If CUSTOM: Ask for desired username and password
4. Show credentials in confirmation table before creating
```

### B. Webhook (HTTP POST/JSON) - API Required Fields
```
[Posting Instructions Processing]
Accepted Formats: CSV, XLS, JSON
• CSV/XLS: Column headers = field names
• JSON: Keys = field names

Auto-mapping Process:
1. Parse file for field requirements
2. Match to system fields
3. DEFAULT: Auto-create missing fields
4. ASK: Only if user declines

MINIMAL API REQUIREMENTS:
• Type: 2 (XML/JSON POST)
• Name: "{Client} Webhook"
• Status: true (enabled)
• LeadTypeUID: {selected}
• DeliveryAddress: {ASK FOR URL}
• FieldSettings: {mapped fields}

ALWAYS ASK FOR:
• Webhook URL
• Authentication (header name & value)
• Response success indicator
```

### C. Ping/Post - API Required Fields
```
PING Configuration:
• Same field mapping as Webhook
• MINIMAL API REQUIREMENTS:
  - Type: 9 (PING/POST)
  - DeliveryAddress: {ASK FOR PING URL}
  - ResponseSearch: {ASK FOR accept pattern}
  - AlternatePosting: {POST method UID}

POST Configuration:
• Create separate Webhook (Type 2)
• Link via AlternatePosting field
```

### D. Email Delivery - API Required Fields
```
MINIMAL API REQUIREMENTS:
• Type: 5 (Email)
• Name: "{Client} Email"
• EmailAddress: DEFAULT = {client_email}
• EmailSubject: DEFAULT = "New Lead - {date}"
• EmailTemplate: DEFAULT = Standard template
• fAddress: DEFAULT = {user_email}
• FieldSettings: DEFAULT = Essential fields

DEFAULT Essential Fields:
- first_name, last_name
- email, phone
- loan_amount, credit_score
- state

ASK: Include additional fields?
```

### E. Email with CSV - API Required Fields
```
MINIMAL API REQUIREMENTS:
• Type: 6 (CSV Attachment)
• Name: "{Client} CSV Report"
• EmailAddress: DEFAULT = {client_email}
• EmailSubject: DEFAULT = "Lead Report - {date}"
• FieldSettings: DEFAULT = All fields

ASK: Delivery schedule only
```

### F. Phone Transfer - API Required Fields
```
MINIMAL API REQUIREMENTS:
• Type: 2 (POST to phone system)
• Name: "{Client} Phone Transfer"
• AgentPhone: DEFAULT = {client_phone}
• AgentName: DEFAULT = {contact_name}
• AccountType: 2 (Live Call)
• FieldSettings: DEFAULT = Essential only

ASK: Different phone number?
ASK: Additional fields beyond essentials?
```

### G. FTP Delivery - API Required Fields
```
MINIMAL API REQUIREMENTS:
• Type: 4 (FTP)
• Name: "{Client} FTP"
• FTPUser: {ASK - REQUIRED}
• FTPPassword: {ASK - REQUIRED}
• FTPPath: {ASK - REQUIRED}
• FieldSettings: DEFAULT = All fields

ALWAYS ASK FOR:
• Server details
• Credentials
• Path

DEFAULT: Include all fields
```

### H. SOAP - API Required Fields
```
MINIMAL API REQUIREMENTS:
• Type: 7 (SOAP)
• Name: "{Client} SOAP"
• DeliveryAddress: {ASK - REQUIRED}
• XML: {ASK - envelope template}
• FieldSettings: {mapped from instructions}

Same as Webhook for field mapping
ALWAYS ASK FOR:
• SOAP endpoint
• Envelope template
• Authentication
```

### I. SMS - API Required Fields
```
MINIMAL API REQUIREMENTS:
• Type: 11 (SMS)
• Name: "{Client} SMS"
• FieldSettings: Must include phone & message
• Phone destination: DEFAULT = {client_phone}
• Message: DEFAULT = "New lead: {name} {phone}"

SMS Configuration:
• Send notifications to: DEFAULT = {client_phone}
• ASK: Use different number for SMS alerts?
• Message template: DEFAULT provided

DEFAULT Message includes:
- Lead type
- Contact name
- Contact phone
```

## 4. Delivery Account Creation (All Methods)

```
MINIMAL API REQUIREMENTS (ClientAccount):
• ClientUID: {created_client_id}
• DeliveryUID: {created_delivery_method_id}
• Price: {ASK USER - REQUIRED}
• Status: 12 (Open) - DEFAULT
• Description: "{Client} - {Method}" - DEFAULT
• AutomationEnabled: true - DEFAULT
• DeliveryDelay: 0 - DEFAULT
• DayMax: 50 - DEFAULT
• HourMax: -1 (unlimited) - DEFAULT
• WeekMax: -1 (unlimited) - DEFAULT
• MonthMax: -1 (unlimited) - DEFAULT

ALWAYS ASK FOR Targeting:
• States (required)
• Loan amount minimum (if applicable)
• Credit score minimum (if applicable)
• Additional criteria

These become Criteria array:
• LeadFieldUID: {field_id}
• Operator: {Equal, Greater, etc.}
• Value: {user_input}
```

## 5. Testing & Activation

```
DEFAULT: Testing Mode Enabled
• Run connection test
• Send sample lead
• Verify response

FINAL ASK:
Activate now?
├─ YES: Status → Active
└─ NO: DEFAULT = Remains Inactive
```

## Summary: DEFAULT vs ASK Pattern

### ALWAYS DEFAULT (No Ask):
- Status: Inactive initially
- Testing mode: Enabled
- Daily max: 50 leads
- All fields for data exports (FTP, CSV)
- Core contact fields for all methods (name, email, phone, address)
- AI-suggested contextual fields based on lead type
- Standard templates
- Client email/phone reused where logical

### DEFAULT CORE FIELDS (All Methods):
- first_name, last_name
- email
- phone (primary_phone)
- address, city, state, zip
- Plus AI-selected contextual fields based on lead type

### ALWAYS OFFER CHOICE:
- Client credentials (auto-generate vs custom)
- Posting instructions upload (yes vs manual mapping)

### ALWAYS ASK FOR:
- Webhook/SOAP endpoints
- Authentication credentials
- FTP server details
- Targeting criteria (states, amounts)
- Final activation decision

### CONDITIONAL ASK:
- Different phone/email (only if not using client's defaults)
- Additional fields (only for Email/Phone/SMS beyond essentials)
- Schedule preference (for batch deliveries)

## Posting Instructions Format Validation

### Accepted Formats:
1. **CSV** - Headers = field names, sample row = data types
2. **XLS/XLSX** - Column headers = field names
3. **JSON** - Keys = field names, values = sample data

### Processing Logic:
```
IF posting_instructions_uploaded:
  IF format IN [CSV, XLS, JSON]:
    → Parse field names
    → Infer data types
    → Match to system fields
    → DEFAULT: Create missing fields
  ELSE:
    → Reject file
    → Request correct format
```

## API Validation Checklist

✓ Each method has correct Type ID (0-11)
✓ Required fields per API documentation
✓ FieldSettings array properly structured
✓ Criteria array for targeting
✓ Status codes (12=Open, 9=Closed, etc.)
✓ Authentication handled separately from instructions
✓ All URLs requested, never extracted from instructions