# Operational Runbook: Production Deployment & Infrastructure 🚀

> **Location:** `.tailorai/Engineering/Runbooks/Production.md`  
> **Project:** `{{PROJECT_NAME}}`

---

## 1. Production Architecture Overview

- **Hosting Environment:** `{{PRODUCTION_HOSTING}}` (e.g. AWS ECS / DigitalOcean / Vercel / Kubernetes)
- **Database:** Managed `{{DATABASE}}` with automated snapshots and read replicas
- **Storage:** S3-compatible cloud object storage per [`.tailorai/Protocols/Storage_Protocol.md`](../../Protocols/Storage_Protocol.md)
- **Cache & Queues:** Redis / Valkey for cache tags and background worker dispatch

---

## 2. Pre-Deployment Verification Gate

Before triggering production deployments, ensure:
1. All changes are merged into the default production branch (`main`).
2. Type check passes: `{{TYPE_CHECK_COMMAND}}`.
3. Critical regression tests pass.
4. Database migrations are backwards-compatible (no dropping columns currently in active use).

---

## 3. Deployment Procedure

### Automated Deployment:
Pushing to the production branch triggers the CI/CD pipeline documented in [`CI_CD_Pipeline.md`](CI_CD_Pipeline.md).

### Manual Deployment Fallback:
```bash
# 1. Pull latest code
git checkout main && git pull origin main

# 2. Install production dependencies
{{PROD_INSTALL_COMMAND}}

# 3. Run migrations safely
{{MIGRATE_COMMAND}} --force

# 4. Build assets
{{BUILD_COMMAND}}

# 5. Restart application process / workers
{{RESTART_COMMAND}}
```

---

## 4. Rollback Plan
If production error rates spike or deployment health checks fail:
1. Revert to the last known healthy Git commit tag or deployment image.
2. If migrations were executed, assess whether a rollback (`{{MIGRATE_ROLLBACK_COMMAND}}`) is safe or if a forward-fix migration is needed.
3. Notify the engineering team and record the incident in `.tailorai/QA/DEFECTS_LOG.md`.

