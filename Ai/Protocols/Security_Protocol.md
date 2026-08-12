# Security Protocol & Data Protection — {{PROJECT_NAME}}

> **Agent Directive:** Populate security protocols below based on actual application security mechanisms.

## 1. Authentication & Authorization
- **Authentication Mechanism:** {{AUTH_MECHANISM_SPEC}} <!-- e.g. JWT Bearer, Session Cookies, OAuth2 -->
- **Authorization Protocol:** {{AUTHORIZATION_SPEC}} <!-- e.g. RBAC, ABAC, Policies -->
- **Tenant Isolation:** {{TENANT_ISOLATION_SPEC}} <!-- If multi-tenant, specify tenant scope rule -->

## 2. Input Validation & Boundaries
- **Validation Engine:** {{VALIDATION_ENGINE_SPEC}} <!-- e.g. Zod, DTOs, Pydantic, FormRequests -->
- **Sanitization & Escaping:** Enforce output escaping and parameterized DB queries.
- **File Upload Security:** {{FILE_UPLOAD_SECURITY_SPEC}}

## 3. Data Protection & Secrets Management
- **Environment Variables:** All credentials MUST be stored in environment variables, never hardcoded in git.
- **Encryption:** {{ENCRYPTION_SPEC}}

## 4. Rate Limiting & Public Form Protection
- **Rate Limiting Rule:** {{RATE_LIMITING_SPEC}}
- **Anti-Bot Mechanism:** {{ANTI_BOT_SPEC}}
