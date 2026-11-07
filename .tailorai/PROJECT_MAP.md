# {{PROJECT_NAME}} — Knowledge Base Map (Master Index) 🗺️

> **Master Repository Index & Cumulative Memory**  
> Location: `.tailorai/PROJECT_MAP.md`

---

## 1. Core Engineering Governance
- [`.tailorai/Agent.md`](Agent.md): Universal AI entry router and critical engineering invariants.
- [`.tailorai/HANDBOOK.md`](HANDBOOK.md): Operating constitution, Dual-Track engine rules, and critical rules.
- [`.tailorai/Engineering/Lead_Developer.md`](Engineering/Lead_Developer.md): Agent 1 execution lead instructions.
- [`.tailorai/Engineering/Code_Review.md`](Engineering/Code_Review.md): Agent 2 code review and compliance auditor.
- [`.tailorai/Engineering/Runbooks/`](Engineering/Runbooks/): Operational runbooks (`Local_Setup.md`, `Commands.md`, `Production.md`, `CI_CD_Pipeline.md`).
- [`.tailorai/QA/Agent_Testing.md`](QA/Agent_Testing.md): Agent 3 QA automation lead protocol.
- [`.tailorai/QA/DEFECTS_LOG.md`](QA/DEFECTS_LOG.md): Defect discovery and findings register.
- [`.tailorai/QA/TEST_PLAN.md`](QA/TEST_PLAN.md): Decoupled test matrix and scenario plan.

---

## 2. Universal Operational Protocols (`.tailorai/Protocols/`)
- [`API_Contracts.md`](Protocols/API_Contracts.md): Standardized API responses, HTTP codes, and error formatting.
- [`Audit_Log_Protocol.md`](Protocols/Audit_Log_Protocol.md): Security & mutation audit trail standards.
- [`Deployment_Protocol.md`](Protocols/Deployment_Protocol.md): Zero-downtime deployment and rollback procedures.
- [`Environment_Variables_Protocol.md`](Protocols/Environment_Variables_Protocol.md): Single-source environment configuration and validation.
- [`Git_Workflow.md`](Protocols/Git_Workflow.md): Branch naming, conventional commit messages, and PR standards.
- [`I18n_Protocol.md`](Protocols/I18n_Protocol.md): Localization parity, zero hardcoded strings, and RTL/LTR rules.
- [`Security_Protocol.md`](Protocols/Security_Protocol.md): Authentication, tenant isolation, and anti-bot protection.
- [`Storage_Protocol.md`](Protocols/Storage_Protocol.md): Object storage abstraction, MIME verification, and bucket structure.
- [`Testing_Standards.md`](Protocols/Testing_Standards.md): Decoupled testing guidelines and test authoring standards.
- [`Theme_Protocol.md`](Protocols/Theme_Protocol.md): CSS variables, design tokens, and light/dark theme persistence.
- [`WebSocket_Protocol.md`](Protocols/WebSocket_Protocol.md): Real-time events, channel naming, and broadcast payloads.

---

## 3. Fast-Track History (Micro-Changes ≤ 3 Files)
*(Append-only record of Fast-Track surgical fixes. Format: `- [YYYY-MM-DD] [category]: summary (N files)`)*

- [2026-11-07] [chore]: Project initialized with TailorAI Enterprise OS v2 architecture

---

## 4. Modules & Completed Tasks Archive
*(Completed full protocol tasks will be linked here, categorized by module)*

### Initial Setup
- [ ] `.tailorai/Tasks/feature/YYYY-MM-DD_initial_project_setup.md` — Project initialized with AI Agent workspace

---

## 5. Strict AI Operating Protocol
1. **Context Isolation:** NEVER attempt to read all folders at once. Consult this `PROJECT_MAP.md` first, then request to read ONLY the specific file relevant to the current task.
2. **Dual-Track Routing:** Route changes ≤ 3 files to Fast-Track (log above, no task file). Route architectural work to Full Protocol (`Tasks/`).
3. **Decoupled Testing:** Author tests with `⬜`. Never execute slow test suites automatically during feature development.
