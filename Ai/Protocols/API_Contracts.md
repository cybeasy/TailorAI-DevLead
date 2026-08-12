# API Contracts & Response Conventions — {{PROJECT_NAME}}

> **Agent Directive:** Populate API structure and response envelopes below based on project convention inspection.

## 1. Standard Response Envelope
All API endpoints MUST return responses wrapped in this project's standard structure:

```json
{{API_RESPONSE_ENVELOPE_EXAMPLE}}
```

### Error Response Envelope
```json
{{API_ERROR_ENVELOPE_EXAMPLE}}
```

## 2. HTTP Status Codes Protocol
<!-- Document status codes enforced in this project -->
{{HTTP_STATUS_CODES_SPEC}}

## 3. Pagination & Meta Convention
```json
{{PAGINATION_SCHEMA_EXAMPLE}}
```
