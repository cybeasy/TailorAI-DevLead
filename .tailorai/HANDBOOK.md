# TailorAI Engineering Operating Constitution 🏛️💻

> **The Operating Constitution of the Autonomous Engineering & QA Workspace**  
> Location: `.tailorai/HANDBOOK.md`  
> Project: `{{PROJECT_NAME}}`

---

## 💻 1. Core Engineering Roles

| Code | Role | Key File | Mandate & Responsibilities |
|---|---|---|---|
| **Agent 1** | **Lead Developer** | `.tailorai/Engineering/Lead_Developer.md` | Core architecture, full-stack implementation, Fast-Track surgical fixes, atomic task execution, type safety, and test authoring (`⬜`). |
| **Agent 2** | **Code Reviewer** | `.tailorai/Engineering/Code_Review.md` | Architecture compliance auditor, SRP verification, security scanner, performance profiler, and git diff review. |
| **Agent 3** | **QA Automation Lead** | `.tailorai/QA/Agent_Testing.md` | Test execution on-demand, regression testing, live headed browser/API scenarios, and defect logging in `DEFECTS_LOG.md`. |

---

## ⚡ 2. Task Routing Dual-Track Engine

To maximize execution velocity while maintaining enterprise-grade safety:

### Track A: 🚀 Fast-Track (Immediate Execution — No Task File)
Applied automatically for routine, low-risk engineering modifications:

| Work Type | Trigger Conditions | Workflow | Target Execution |
|---|---|---|---|
| **Bug Fix** | Fix logic bug, syntax issue, or styling glitch (≤ 3 files) | Direct surgical fix → `{{TYPE_CHECK_COMMAND}}` / `{{LINT_COMMAND}}` → Log in `PROJECT_MAP.md` → Commit | **< 1 min** |
| **Hook / Utility** | Add/edit helper function, custom hook, or utility method | Direct code edit in utility layer → type check | **< 1 min** |
| **UI Polish** | Adjust design tokens, layout margins, responsive styling | Direct edit → verify visual state | **< 30 sec** |
| **Locale Keys** | Add or fix missing translation keys | Update all target locales for 100% key parity | **< 30 sec** |

> ⚠️ **Strict Fast-Track Boundaries (Never Violate):**
> Fast-Track is **strictly prohibited** if the change touches:
> 1. Database migrations or table schemas.
> 2. Authentication, authorization, or security middleware.
> 3. Public API response contracts or breaking payload changes.
> 4. Payment, billing, or financial ledger logic.

### Track B: 🛡️ Full Protocol (Architectural Changes & New Features)
Mandatory when changes have architectural blast radius:

| Work Type | Trigger Conditions | Required Steps |
|---|---|---|
| **New Module / Feature** | New business domain, new entity, or full CRUD flow | Architecture Plan → Task file in `Tasks/` → Schema/Model → Service Layer → Controller/API → UI View + Hook → Test Files (status `⬜`) → Archive |
| **Database Schema Change** | Any new migration, table alteration, or foreign key change | Explicit user confirmation → Safe migration check → Seed verification |
| **New API Endpoint** | New public or internal REST/RPC contract | `API_Contracts.md` compliance → Input validation request → Service execution → Unified response envelope |
| **New Screen / Flow** | Full new page or customer workflow | Decomposed presentational component (< 150 lines) + dedicated Hook + anti-bot guard + Live Scenario entry in `TEST_PLAN.md` |

---

## 🔴 3. The 10 Critical Engineering Rules — Never Violate

*Priority Tiers: If context constraints ever force trade-offs, NEVER sacrifice a `[P0]` rule. Sacrifice `[P1]` before `[P0]`.*

1. **[P0] NO LOGIC IN VIEW TEMPLATES:** Views and components (`.tsx`, `.vue`, `.blade.php`) must contain zero direct business logic, raw API calls, or complicated state mutations. Delegate all logic to colocated hooks, service classes, or view-models.
2. **[P0] NO HARDCODED STRINGS:** No raw user-facing text in templates. Use internationalization lookup functions with 100% key parity across all supported project locales.
3. **[P0] RTL/LTR DIRECTION COMPLIANCE:** Use CSS logical properties (`ps-*`, `pe-*`, `start-*`, `end-*`, `margin-inline-start`, etc.). Never hardcode directional styles (`left: 10px`, `text-align: right`) without directional variants.
4. **[P0] DESIGN SYSTEM TOKENS ONLY:** Always use defined design tokens, theme CSS variables, and utility classes. Never hardcode arbitrary hex colors or raw pixel measurements.
5. **[P1] DOMAIN-DRIVEN CO-LOCATION:** Group components and backend logic by feature domain with colocated hooks, constants, and types. Avoid generic dumping-ground folders (`components/misc`, `helpers/utils`).
6. **[P1] UNIVERSAL ANTI-BOT & INPUT SANITIZATION:** All public forms and ingestion endpoints must enforce anti-bot protection (PoW token, honeypot traps, speed guards) and strict input schema validation.
7. **[P1] SRP METHOD DECOMPOSITION (BACKEND):** Controllers, actions, and service classes must decompose monolithic logic into small, single-responsibility `private` helper methods (< 15–20 lines each).
8. **[P1] SRP UI COMPOSITION & CONSTANTS (FRONTEND):** Presentational views must be decomposed into small sub-components (< 150 lines). Extract static dropdowns, options, and tables into colocated `constants/` files. Replace scattered booleans with unified state unions (`'idle' | 'loading' | 'submitting' | 'success' | 'error'`).
9. **[P0] DECOUPLED ON-DEMAND TESTING:** The AI **MUST write** unit, integration, and E2E test files with status `⬜`, but **NEVER run them automatically** during task execution or code modifications. Tests run exclusively on explicit human command or dedicated CI runs.
10. **[P0] STOP ON AMBIGUITY — NEVER IMPROVISE:** If you encounter contradictions between documentation, ambiguous schema types, or multiple conflicting paths, **STOP immediately** and ask the user before continuing.

---

## 📖 4. Operational Runbooks Index

All operational execution guides are standardized in `.tailorai/Engineering/Runbooks/`:
- `Local_Setup.md` — Local Docker/development environment configuration
- `Commands.md` — CLI commands reference, scripts, and dev workflows
- `Production.md` — Production deployment specifications and server checks
- `CI_CD_Pipeline.md` — Continuous integration and automated deployment pipeline

---

## 🧪 5. Testing & Quality Assurance Model

- **Location:** `.tailorai/QA/`
- **QA Lead:** `.tailorai/QA/Agent_Testing.md`
- **Defects Registry:** `.tailorai/QA/DEFECTS_LOG.md`
- **Decoupled Testing Principle:**
  1. Agent 1 (Lead Developer) authors test files matching the implementation and registers them in `TEST_PLAN.md` with status `⬜`.
  2. Tests are **never executed automatically** in the development loop to keep development speed at maximum.
  3. When the user requests testing (`/qa` or `run test suite`), Agent 3 executes the suites, logs failures in `DEFECTS_LOG.md`, and reports actionable findings.

