# Security & Audit Log Protocol (Audit_Log_Protocol.md) 🛡️📜

> **Location:** `.tailorai/Protocols/Audit_Log_Protocol.md`  
> **Status:** MANDATORY & ENFORCED

---

## 1. Overview & Purpose

The Audit Log system guarantees an immutable, time-stamped record of all security-sensitive actions and data mutations across `{{PROJECT_NAME}}`. It enables security compliance, operational forensics, and incident triage.

---

## 2. Event Registry Standards

All logged events must follow structured naming conventions and payload envelopes:

| Event Key | Trigger | Severity | Target Subject |
|---|---|---|---|
| `auth.login_success` | Successful user authentication | Info | User entity |
| `auth.login_failed` | Failed login attempt | Warning | IP / Email attempt |
| `auth.logout` | User session ended | Info | User entity |
| `security.password_changed` | User credential reset | High | User entity |
| `security.permission_modified` | User role / permissions changed | High | Target role / user |
| `data.mutation_critical` | Sensitive record created / deleted | Medium/High | Domain entity |

---

## 3. Mandatory Log Envelope

Every log entry must record:
```json
{
  "timestamp": "2026-11-07T12:00:00Z",
  "event": "auth.login_success",
  "severity": "info",
  "actor_id": "usr_12345",
  "tenant_id": "{{TENANT_ID_OR_WORKSPACE}}",
  "ip_address": "192.168.1.1",
  "user_agent": "Mozilla/5.0 ...",
  "properties": {
    "auth_method": "password_plus_otp"
  }
}
```

---

## 4. Invariants

1. **Immutability:** Audit log tables or streams must never be modified or deleted by application users. Deletes are prohibited.
2. **Tenant Isolation:** In multi-tenant systems, audit logs must be strictly isolated at query time so tenants can only inspect their own activity history.

