## Create / Modify Client [Link to this section: Create / Modify Client](https://api.leadexec.net/\#create_general)

This method is used to update or create a client record, this includes client fields.

**Note:** If creating a new record, supply 0 for the ClientUID field.

#### Request

* * *

| Parameter                          | Type               | Position | Required            | Description                                                                                                                                                         |
| ---------------------------------- | ------------------ | -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access\_token                      | `string`           | `header` | `required`          | Authentication token (See [Authentication](https://api.leadexec.net/#auth_token))                                                                                   |
| Info.ClientUID                     | `integer`          | `body`   | `required`          | Client identifier                                                                                                                                                   |
| Info.DateAdded                     | `date`             | `body`   | `required`          | Date client record was added (Pacific Time)                                                                                                                         |
| Info.Status                        | `ClientStatus`     | `body`   | `required`          | Status of the client.<br>Available Values:<br>`New`<br>`Pending`<br>`Working`<br>`Waiting`<br>`Dead`<br>`Inactive`<br>`Active`<br>`Late`<br>`Suspended`<br>`Closed` |
| Info.UserUID                       | `integer`          | `body`   |                     | ID of user to assign to                                                                                                                                             |
| Info.TimeOffset                    | `integer`          | `body`   |                     | The amount of hours to offset from UTC                                                                                                                              |
| Info.TimeZoneName                  | `string`           | `body`   |                     | Name of timezone for the offset provided.                                                                                                                           |
| Info.Notes                         | `string`           | `body`   |                     | Notes or comments for the client                                                                                                                                    |
| Info.ResellerUID                   | `integer`          | `body`   |                     | Identifier of reseller to assign to.                                                                                                                                |
| Info.GroupUID                      | `integer`          | `body`   |                     | Identifier of the client group to assign to.                                                                                                                        |
| Info.Username                      | `string`           | `body`   | `required (if new)` | Username of the client (must be unique if new).                                                                                                                     |
| Info.Password                      | `string`           | `body`   | `required (if new)` | Password of the client.                                                                                                                                             |
| Info.OverrideReassign              | `bool`             | `body`   |                     | Should this client have the ability to reassign leads from the client portal.                                                                                       |
| Info.DeliveryAccountAutomationType | `AutomationType`   | `body`   |                     | The automation preference for scanning delivery accounts.<br>Available Values:<br>`Price`<br>`Priority`<br>`RoundRobin`                                             |
| FieldData                          | `Array<FieldData>` | `body`   |                     | Array of field data for the client                                                                                                                                  |
| FieldData.ClientFieldUID           | `integer`          | `body`   | `required`          | The identifier of the client field.                                                                                                                                 |
| FieldData.Value                    | `string`           | `body`   | `required`          | The value for the field.                                                                                                                                            |

- JSON

```json
PATCH /v1/clients HTTP/1.1
host: api.leadexec.net
content-type: application/json
Authorization: Bearer [access_token]

{
  "Info": {
    "ClientUID": 0,
    "DateAdded": "2020-08-21T16:38:22.976Z",
    "Status": "New",
    "UserUID": 0,
    "TimeOffset": -8,
    "Notes": "",
    "TimeZoneName": "Pacific Standard Time",
    "ResellerUID": 0,
    "GroupUID": 0,
    "Username": "",
    "Password": "",
    "OverrideReassign": true,
    "DeliveryAccountAutomationType": "Price"
  },
  "FieldData": [\
    {\
      "ClientFieldUID": 0,\
      "Value": ""\
    },\
    {\
      "ClientFieldUID": 0,\
      "Value": ""\
    }\
  ]
}
```

### Response

* * *

- plain/text

```json
12345
```

## Create or Modify Delivery Method [Link to this section: Create or Modify Delivery Method](https://api.leadexec.net/\#deliverymethods_createorupdate)

This method creates or modifies a delivery method for the specified client.

#### Request

* * *

| Parameter | Type | Position | Required | Description |
| --- | --- | --- | --- | --- |
| access\_token | `string` | `header` | `required` | Authentication token (See [Authentication](https://api.leadexec.net/#auth_token)) |
| ClientUID | `integer` | `url segment` | `required` | The identifier of the client being modified |
| ClientDeliveryUID | `integer` | `body` | `required` | The identifier for the delivery method |
| ClientUID | `integer` | `body` | `required` | The identifier for the client |
| Type | `delivery_type` | `body` | `required` | The type of delivery, Available Values:<br>`0 = HTTP POST`<br>`1 = HTTP GET`<br>`2 = XML / JSON`<br>`3 = SalesExec`<br>`4 = FTP`<br>`5 = E-Mail`<br>`6 = CSV Attachment`<br>`7 = SOAP`<br>`8 = Internal System`<br>`9 = PING/POST`<br>`10 = Batch Email File Delivery`<br>`11 = SMS Notification` |
| Name | `string` | `body` | `required` | The name of the delivery method |
| Status | `bool` | `body` | `required` | Is the delivery enabled |
| DateAdded | `date` | `body` | `required` | The date the delivery was created (Pacific Time) |
| inTesting | `bool` | `body` | `required` | Is the delivery currently in testing. This will force the delivery to use test values if available |
| LeadTypeUID | `integer` | `body` | `required` | The identifier of the lead type assigned to this delivery |
| XML | `string` | `body` | `required` | The XML or JSON schema |
| EmailTemplate | `string` | `body` | `required` | The template of the outbound email to be sent |
| EmailSubject | `string` | `body` | `required` | The template of the outbound email subject to be sent |
| FTPUser | `string` | `body` | `required` | The username used during FTP delivery |
| FTPPassword | `string` | `body` | `required` | The password used during FTP delivery |
| FTPPath | `string` | `body` | `required` | The file path used during FTP delivery |
| EmailAddress | `string` | `body` | `required` | The To address used when sending outbound email |
| useRegEx | `bool` | `body` | `required` | When scanning response from external systems, should the system use a regular expression |
| ResponseSearch | `string` | `body` | `required` | The expression or text to search for in the response from an external system |
| DeliveryAddress | `string` | `body` | `required` | The URL that an outbound request should be sent to |
| SMTPServer | `string` | `body` | `required` | The SMTP server to use when sending outbound email |
| SMTPAuth | `bool` | `body` | `required` | Does the SMTP server require authentication |
| SMTPUsername | `string` | `body` | `required` | Username to use when authenticating with SMTP |
| SMTPPassword | `string` | `body` | `required` | Password to use when authenticating with SMTP |
| fAddress | `string` | `body` | `required` | The from address applied to outbound emails |
| tAddress | `string` | `body` | `required` | The To address applied to outbound emails |
| EmailNotify | `bool` | `body` | `required` | After delivery, should a notification email be sent `(depricated)` |
| NotifyCC | `string` | `body` | `required` | The copy to field for outbound emails |
| NotifyBCC | `string` | `body` | `required` | The blinkd copy field for outbound emails |
| NotifyEmail | `string` | `body` | `required` | The email to send the notification email to `(depricated)` |
| LeadCatUID | `integer` | `body` | `required` | The identifier for the lead category to assign the leads to |
| ClientEmail | `string` | `body` | `required` | `(depricated)` |
| Settings | `Array<Setting>` | `body` | `` | An array of field mappings for outbound delivery |
| Setting.DeliverySettingUID | `integer` | `body` | `required` | The identifier of the field setting |
| Setting.DeliveryUID | `integer` | `body` | `required` | The identifier of the delivery method |
| Setting.Delete | `bool` | `body` | `required` | Should the setting be removed |
| Setting.Format | `string` | `body` | `required` | Value format string |
| Setting.FieldType | `field_type` | `body` | `required` | Type of field mapping, Available Values:<br>`0 = Static Value`<br>`1 = Lead Field`<br>`2 = Special Field`<br>`3 = Custom Expr`<br>`4 = Sub-String`<br>`5 = String Concatenation`<br>`6 = Client Field`<br>`7 = Lead Source Field`<br>`8 = Evaluate Function` |
| Setting.FieldName | `string` | `body` | `required` | Outbound name to send |
| Setting.Value | `string` | `body` | `required` | Value of the mapping |
| Setting.LeadFieldUID | `string` | `body` | `required` | Identifier of the lead field if needed |
| Setting.Expr | `string` | `body` | `required` | Calculated or regular expression used to generate value |
| Setting.hasMap | `bool` | `body` | `required` | Field setting has value mapping settings |
| Setting.Mappings | `Array<Mapping>` | `body` | `` | Array of field mapping definitions |
| Setting.Mapping.DeliveryMappingUID | `integer` | `body` | `required` | Identifier for the delivery mapping |
| Setting.Mapping.Delete | `bool` | `body` | `required` | Should this mapping be removed |
| Setting.Mapping.DeliverySettingUID | `integer` | `body` | `required` | Parent delivery field setting identifier |
| Setting.Mapping.DeliveryValue | `string` | `body` | `required` | Value to be delivered |
| Setting.Mapping.FieldValue | `string` | `body` | `required` | Value located on the field |
| DeliveryDays | `Array<DeliveryDay>` | `body` | `` | Array of valid delivery day schedules |
| DeliveryDay.DeliveryDayUID | `integer` | `body` | `required` | The identifier of the delivery day setting |
| DeliveryDay.DeliveryUID | `integer` | `body` | `required` | Parent delivery detail identifier |
| DeliveryDay.WeekDay | `integer` | `body` | `required` | Day of the week, Available Values<br>`0 = Sunday`<br>`1 = Monday`<br>`2 = Tuesday`<br>`3 = Wednesday`<br>`4 = Thursday`<br>`5 = Friday`<br>`6 = Saturday` |
| DeliveryDay.StaticDate | `date` | `body` | `required` | For use on a static date |
| DeliveryDay.StartTime | `date` | `body` | `required` | Start time of the day or date provided |
| DeliveryDay.EndTime | `date` | `body` | `required` | End time of the day or date provided |
| DeliveryDay.Allow | `bool` | `body` | `required` | Should delivery be allowed |

- JSON

```json
PUT /v1/delivery/[ClientUID]/methods HTTP/1.1
host: api.leadexec.net
content-type: application/json
Authorization: Bearer [access_token]

{
  "ClientDeliveryUID": 0,
  "ClientUID": 0,
  "Type": 0,
  "Name": "",
  "Status": true,
  "DateAdded": "2020-08-25T21:54:05.844Z",
  "inTesting": true,
  "LeadTypeUID": 0,
  "XML": "",
  "EmailTemplate": "",
  "EmailSubject": "",
  "FTPUser": "",
  "FTPPassword": "",
  "FTPPath": "",
  "EmailAddress": "",
  "useRegEx": true,
  "ResponseSearch": "",
  "DeliveryAddress": "",
  "SMTPServer": "",
  "SMTPAuth": true,
  "SMTPUsername": "",
  "SMTPPassword": "",
  "fAddress": "",
  "tAddress": "",
  "EmailNotify": true,
  "NotifyCC": "",
  "NotifyBCC": "",
  "NotifyEmail": "",
  "LeadCatUID": 0,
  "ClientEmail": "",
  "FieldSettings": [\
    {\
      "DeliverySettingUID": 0,\
      "DeliveryUID": 0,\
      "Delete": true,\
      "Format": "",\
      "FieldType": 0,\
      "FieldName": "",\
      "Value": "",\
      "LeadFieldUID": 0,\
      "Expr": "",\
      "hasMap": true,\
      "FieldMappings": [\
        {\
          "DeliveryMappingUID": 0,\
          "Delete": true,\
          "DeliverySettingUID": 0,\
          "DeliveryValue": "",\
          "FieldValue": ""\
        }\
      ]\
    }\
  ],
  "DeliveryDays": [\
    {\
      "DeliveryDayUID": 0,\
      "DeliveryUID": 0,\
      "WeekDay": 0,\
      "StaticDate": "2020-08-25T21:54:05.845Z",\
      "StartTime": "2020-08-25T21:54:05.845Z",\
      "EndTime": "2020-08-25T21:54:05.845Z",\
      "Allow": true\
    }\
  ]
}
```

### Response

* * *

- plain/text

```json
123456
```



## Create or Modify Delivery Account [Link to this section: Create or Modify Delivery Account](https://api.leadexec.net/\#deliveryaccounts_update)

This method provides the ability to create or modify a delivery account.

#### Request

* * *

| Parameter | Type | Position | Required | Description |
| --- | --- | --- | --- | --- |
| access\_token | `string` | `header` | `required` | Authentication token (See [Authentication](https://api.leadexec.net/#auth_token)) |
| ClientUID | `integer` | `url segment` | `required` | The identifier of the client being updated |
| ClientAccountUID | `unique identifier` | `body` | `required` | Identifier of client delivery account, Send 0 for a new delivery account |
| ClientUID | `integer` | `body` | `required` | Identifier for the client |
| DeliveryUID | `integer` | `body` | `required` | Identiifer for the delivery method |
| Price | `double` | `body` | `required` | The assigned default price |
| HourMax | `int` | `body` | `required` | The maximum amount of leads that can be delivered within a 60 minute period. Value of -1 means no maximum |
| DayMax | `int` | `body` | `required` | The maximum amount of leads that can be delivered within the current day. Value of -1 means no maximum |
| MonthMax | `int` | `body` | `required` | The maximum amount of leads that can be delivered within the current month. Value of -1 means no maximum |
| WeekMax | `int` | `body` | `required` | The maximum amount of leads that can be delivered within the current week. Value of -1 means no maximum |
| useOrder | `bool` | `body` | `required` | Should an open order be required to receive leads against this account |
| Status | `account_status` | `body` | `required` | The current status, Available Values:<br>`9 = Closed`<br>`10 = Suspended`<br>`11 = OnHold`<br>`12 = Open` |
| DeliveryDelay | `integer` | `body` | `required` | The amount in seconds to delay delivery of a lead |
| Description | `string` | `body` | `required` | Name of account |
| RedirectURL | `string` | `body` | `required` | The redirect URL the lead should be directed to (if any) |
| AutomationEnabled | `bool` | `body` | `required` | Does the account receive leads through delivery automation |
| AlternatePosting | `Integer` | `body` | `required` | Identifier of the alternate posting method |
| AccountType | `account_type` | `body` | `required` | The type of leads this account is set to receive, Available Values:<br>`0 = General`<br>`1 = Redirect`<br>`2 = Live Call`<br>`3 = 800 IVR` |
| AgentName | `string` | `body` | `required` | The name of the agent targeted in the transfer |
| AgentPhone | `string` | `body` | `required` | The phone number the lead should be transferred to |
| OfferEnabled | `bool` | `body` | `optional` | Indicates whether the offer is enabled or disabled |
| OfferIsDynamic | `bool` | `body` | `optional` | Specifies that the offer is dynamic vs static |
| OfferName | `string` | `body` | `optional` | Name of the offer - (Static offer only) |
| OfferRequireCustomConsent | `bool` | `body` | `optional` | Enables the option to use custom TCPA text for the offer - (Static offer only) |
| OfferCompanyPhoneNumber | `string` | `body` | `optional` | Phone number of the company providing the offer - (Static offer only) |
| OfferCompanyName | `string` | `body` | `optional` | Name of the company who is the end buyer of the lead - (Static offer only) |
| OfferDescription | `string` | `body` | `optional` | Detailed description of the offer - (Static offer only) |
| OfferImage | `string` | `body` | `optional` | URL or path to the image associated with the offer, or company logo - (Static offer only) |
| OfferURL | `string` | `body` | `optional` | Primary URL to access the offer details - (Static offer only) |
| OfferPrivacyUrl | `string` | `body` | `optional` | URL to the privacy policy related to the offer - (Static offer only) |
| OfferTermsUrl | `string` | `body` | `optional` | URL to the terms and conditions of the offer - (Static offer only) |
| OfferTCPA | `string` | `body` | `optional` | Custom TCPA text specific to the company acquiring the lead - (Static offer only) |
| OfferAmount | `string` | `body` | `optional` | Consumer facing price associated with the offer - (Static offer only) |
| OfferStartDate | `date` | `body` | `optional` | Start date of the offer (optional) |
| OfferEndDate | `date` | `body` | `optional` | End date of the offer (optional) |
| OfferTimeZone | `string` | `body` | `optional` | Time zone applicable to the offer |
| OfferDuration | `string` | `body` | `optional` | Duration of the offer - (Static offer only)<br> Available Values:<br>`0 = Monthly`<br>`1 = Yearly` |
| OfferParseCode | `string` | `body` | `optional` | Code for processing dynamic offers |
| Criteria | `Array<Criteria>` | `body` | `` | An array of lead field criteria for filtering leads during scanning |
| Criteria.ClientCriteriaUID | `integer` | `body` | `required` | The identifier of the criteria item |
| Criteria.LeadFieldUID | `integer` | `body` | `required` | The identifier of the lead field |
| Criteria.Type | `criteria_type` | `body` | `required` | The type of fitler to apply, Available Values:<br>`FieldValue`<br>`Expression`<br>`Function` |
| Criteria.Expression | `string` | `body` | `required` | The regular expression or calculated expression for the criteria |
| Criteria.Operator | `string` | `body` | `required` | The check operator to apply to the value of the lead, Available Values:<br>`Equal`<br>`NotEqual`<br>`Greater`<br>`Less`<br>`GreaterOrEqual`<br>`LessOrEqual`<br>`Between`<br>`In`<br>`NotIn`<br>`DateCompare`<br>`Distance_Compare`<br>`Contains`<br>`Doesnt_Contain` |
| Criteria.Value | `string` | `body` | `required` | The value of the criteria to be checked against the lead |

- JSON

```json

    PUT /v1/delivery/[ClientUID]/accounts/ HTTP/1.1
    host: api.leadexec.net
    content-type: application/json
    Authorization: Bearer [access_token]

  {
    "ClientAccountUID": 0,
    "ClientUID": 0,
    "DeliveryUID": 0,
    "Price": 0,
    "HourMax": 0,
    "DayMax": 0,
    "MonthMax": 0,
    "WeekMax": 0,
    "useOrder": true,
    "Status": 0,
    "DeliveryDelay": 0,
    "Description": "",
    "RedirectURL": "",
    "AutomationEnabled": true,
    "AlternatePosting": 0,
    "AccountType": 0,
    "AgentName": "",
    "AgentPhone": "",
    "OfferEnabled": false,
    "OfferIsDynamic": false,
    "OfferRequireCustomConsent": false,
    "OfferCompanyPhoneNumber": "",
    "OfferName": "",
    "OfferCompanyName": "",
    "OfferDescription": "",
    "OfferImage": "",
    "OfferURL": "",
    "OfferPrivacyUrl": "",
    "OfferTermsUrl": "",
    "OfferTCPA": "",
    "OfferAmount": 0.0,
    "OfferStartDate": "2020-08-25T14:23:40.877Z",
    "OfferEndDate": "2020-08-25T14:23:40.877Z",
    "OfferTimeZone": "",
    "OfferDuration": 0,
    "OfferParseCode": "",
    "Criteria": [\
      {\
        "ClientCriteriaUID": 0,\
        "LeadFieldUID": 0,\
        "Type": "FieldValue",\
        "Expression": "",\
        "Operator": "Equal",\
        "Value": ""\
      }\
    ]
  }

```

### Response

* * *

- plain/text

```json
123456
```


