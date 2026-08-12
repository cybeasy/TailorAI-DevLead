# Deployment Protocol & CI/CD — {{PROJECT_NAME}}

> **Agent Directive:** Populate deployment commands and workflow scenarios below based on target environment configuration (Docker, Vercel, VPS, AWS, etc.).

## 1. Deployment Environments
- **Development (Local):** Run via `{{LOCAL_DEV_COMMAND}}`
- **Staging:** `{{STAGING_DEPLOY_PROCESS}}`
- **Production:** `{{PRODUCTION_DEPLOY_PROCESS}}`

## 2. Pre-Deployment Checklist
- [ ] All automated tests pass (`{{TEST_COMMAND}}`).
- [ ] Static type checking and linting pass with zero errors (`{{LINT_TYPECHECK_COMMAND}}`).
- [ ] Database migrations are checked and backwards-compatible.
- [ ] Environment variables and secrets are configured in the target deployment platform.

## 3. Post-Deployment Verification
- Perform smoke test on key application routes.
- Monitor application logs and health check endpoints.
