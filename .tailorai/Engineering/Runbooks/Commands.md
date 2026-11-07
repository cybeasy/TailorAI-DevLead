# Operational Runbook: CLI Commands Reference ⚡

> **Location:** `.tailorai/Engineering/Runbooks/Commands.md`  
> **Project:** `{{PROJECT_NAME}}`

---

## 1. Daily Development Commands

| Action | Command | Purpose |
|---|---|---|
| **Start Dev Server** | `{{LOCAL_DEV_COMMAND}}` | Starts local app with hot reload |
| **Type Check** | `{{TYPE_CHECK_COMMAND}}` | Runs static type verification |
| **Lint & Format** | `{{LINT_COMMAND}}` | Runs linter and code formatting |
| **Build Project** | `{{BUILD_COMMAND}}` | Compiles production assets |

---

## 2. Testing Commands (Decoupled Flow)

| Action | Command | Purpose |
|---|---|---|
| **Run Unit Tests** | `{{TEST_COMMAND}}` | Runs fast unit test suite |
| **Run Integration Tests** | `{{INTEGRATION_TEST_COMMAND}}` | Runs service and DB integration tests |
| **Run Live E2E Tests** | `{{E2E_TEST_COMMAND}}` | Runs headed end-to-end browser tests |

---

## 3. Database & Migrations

| Action | Command | Purpose |
|---|---|---|
| **Run Migrations** | `{{MIGRATE_COMMAND}}` | Applies pending database migrations |
| **Rollback Migration** | `{{MIGRATE_ROLLBACK_COMMAND}}` | Rolls back last migration batch |
| **Seed Database** | `{{SEED_COMMAND}}` | Populates development seed data |

---

## 4. Documentation Explorer Tooling

```bash
# Build offline single-file HTML knowledge base
node scripts/build-explorer.js
```

