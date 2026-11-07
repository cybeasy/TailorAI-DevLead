# Environment Configuration & Secrets Protocol (Environment_Variables_Protocol.md) 🔐⚙️

> **Location:** `.tailorai/Protocols/Environment_Variables_Protocol.md`  
> **Status:** MANDATORY & ENFORCED

---

## 1. Single Source of Truth (`.env`)

1. **Root Configuration:** All runtime configuration, third-party API keys, database credentials, and operational toggles are driven by the environment (`.env`).
2. **Template Synchronization (`.env.example`):** Whenever an engineer or agent introduces a new environment variable, it **MUST be added to `.env.example`** with a safe, sanitized placeholder value and a descriptive comment.
3. **Zero Secrets in Version Control:** Never commit real API keys, passwords, database credentials, or secret salts to Git. `.gitignore` must strictly exclude `.env`, `.env.local`, and `.env.production`.

---

## 2. Environment Schema Validation

Applications must validate environment variables at startup:
- Use a schema validation library (e.g., Zod for Node/TypeScript, or typed Config in Laravel/Python) to fail fast during boot if a mandatory variable is missing or malformed.
- Example Schema Contract:
  ```typescript
  // env.ts
  import { z } from 'zod';

  export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    DATABASE_URL: z.string().url(),
    STORAGE_DRIVER: z.enum(['local', 's3']).default('local'),
    APP_KEY: z.string().min(16),
  });

  export const env = envSchema.parse(process.env);
  ```

---

## 3. Pre-Commit Checklist

- [ ] New variable documented in `.env.example`.
- [ ] No hardcoded fallback containing real credentials in code.
- [ ] Added to production deployment environment manager (e.g. CI/CD secrets or cloud dashboard).

