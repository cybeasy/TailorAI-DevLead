# Master Test Plan & Scenario Registry 🧪📊

> **Location:** `.tailorai/QA/TEST_PLAN.md`  
> **Status Codes:** `⬜ Unverified / Pending Run` | `✅ Passed` | `❌ Failed` | `⚠️ Flaky`

---

## 1. Test Architecture Overview

- **Unit Test Framework:** `{{TEST_FRAMEWORK}}`
- **Integration Framework:** `{{INTEGRATION_TEST_FRAMEWORK}}`
- **E2E / Browser Automation:** `{{E2E_FRAMEWORK}}`

---

## 2. Test Suites Matrix

| Module / Feature | Test Type | File Location | Command | Status | Last Run |
|---|---|---|---|---|---|
| Core Authentication | Unit / Integration | `tests/unit/AuthTest.*` | `{{TEST_COMMAND}}` | ⬜ | - |
| API Contracts | Integration | `tests/integration/ApiContractsTest.*` | `{{TEST_COMMAND}}` | ⬜ | - |
| Critical User Flow | E2E Live Scenario | `tests/e2e/UserJourney.spec.*` | `{{E2E_TEST_COMMAND}}` | ⬜ | - |

---

## 3. Decoupled Test Execution Guidelines

1. **Feature Implementation (Agent 1):** Adds test files matching new code and registers them above with status `⬜`.
2. **On-Demand Execution (Agent 3):** Executes tests when instructed by the user (`/qa` or manual command) and updates status accordingly.

