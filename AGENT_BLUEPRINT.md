# AI Agent Workspace Template — Architecture Blueprint & Knowledge Base

> **Master Knowledge Base:** Primary architecture documentation for the `TailorAI-DevLead` project.
> This is the **What + Why** reference — it documents the system structure, the design decisions behind it, and the full placeholder contract.
> For **How** the agent behaves at runtime, see `AGENT_STRATEGY.md`.
> Read this file in any new session to understand the system design, file hierarchy, and decision log without re-explaining context.
> Last Updated: 2026-08-12

---

## 1. System Vision

The **AI Agent Workspace** is a stack-agnostic, language-agnostic template that instantiates an `Ai/` governance directory inside any software repository. This workspace transforms the AI Agent into an effective **Technical Lead** that understands, refactors, and extends the codebase cleanly.

### Core Principles
1. **Context Isolation (Context Router):** The AI Agent loads only 2-3 task-relevant files per request to optimize token usage.
2. **Atomic Execution:** Tasks are logged in dedicated task files, executed step-by-step with explicit user confirmation.
3. **Persistent Knowledge Base:** `PROJECT_MAP.md` acts as the master index and cumulative memory of the repository.

---

## 2. Documentation Topology

This template ships with **two master reference files** at the root, plus the runtime constitution inside `Ai/`. Understanding their split is essential for future maintenance.

| File | Scope | Question it answers | Audience |
|------|-------|----------------------|----------|
| `AGENT_BLUEPRINT.md` (this file) | Architecture & design knowledge | **What** is the system + **Why** was it built this way? | Developers / maintainers |
| `AGENT_STRATEGY.md` | Operational behavior & decisions | **How** does the agent behave + **When** does it act? | Developers / maintainers |
| `init-agent.md` | Setup protocol (Steps 0-5) | **How is a workspace instantiated?** | Any AI Agent running setup |
| `Ai/Agent.md` | Runtime constitution | **What rules bind the agent at runtime?** | The AI Agent itself |

> [!IMPORTANT]
> **Maintenance rule:** When you change *structure*, edit this file. When you change *behavior*, edit `AGENT_STRATEGY.md` (and usually `Ai/Agent.md` too). Keeping these separate is what makes future development safe.

---

## 3. Approach: Markdown-First (No Scripts)

> [!IMPORTANT]
> **All governance workflows use Markdown (`.md`) protocols — no bash scripts.**
> `init-agent.md` serves as a step-by-step protocol executed directly by any AI Agent.

### Markdown vs. Bash Scripts
| Bash Script | Markdown Protocol |
|-------------|-------------------|
| Requires specific terminal environment | Executable by any LLM AI Agent |
| Rigid and harder to customize | Easily editable markdown files |
| Executes all-or-nothing | Step-by-step control with user checkpoints |
| Difficult rollback on failure | Independent, repeatable steps |

---

## 4. Complete Directory Hierarchy

```text
TailorAI-DevLead/
├── AGENT_BLUEPRINT.md              # ← THIS FILE (architecture & knowledge base)
├── AGENT_STRATEGY.md                # Operational behavior & decision reference
├── init-agent.md                    # Master setup protocol (Steps 0-5)
│
└── Ai/                              # Governance Workspace Template
    ├── Agent.md                     # Universal AI constitution (stack-agnostic)
    ├── ACTIVE_TASKS.md              # In-progress tasks register
    ├── PROJECT_MAP.md               # Knowledge base master index
    ├── README.md                    # Workspace guide
    │
    ├── Architecture/
    │   ├── Architecture_Questions.md  # Setup helper questionnaire
    │   ├── Technical_Architecture.md  # Technical architecture template
    │   ├── PRD.md                     # Product requirements template
    │   └── Visual_Identity.md         # Visual identity template
    │
    ├── Protocols/                   # Universal operational protocols
    │   ├── API_Contracts.md
    │   ├── Git_Workflow.md
    │   ├── Security_Protocol.md
    │   ├── Testing_Standards.md
    │   └── Deployment_Protocol.md
    │
    ├── Skills/                      # Universal AI skills
    │   ├── CleanCode_Skill.md         # Clean code & SRP principles
    │   ├── Security_Skill.md          # Security best practices
    │   ├── Performance_Skill.md       # Performance optimization
    │   ├── Code_Review_Skill.md       # Code review methodology
    │   ├── Designer_Skill.md         # UI/UX principles
    │   └── Knowledge_Builder_Skill.md # Step 4 task conversion protocol
    │
    ├── Audits/                      # Universal audit prompts
    │   ├── CleanCode_Audit_Prompt.md   # Code quality audit
    │   ├── Security_Audit_Prompt.md    # Security vulnerability audit
    │   ├── Ai_Folder_Audit_Prompt.md   # Workspace consistency audit
    │   └── Knowledge_Base_Verification.md # KB map verification
    │
    ├── Brand/
    │   └── Brand_Guide_Template.md    # Brand identity guide template
    │
    └── Tasks/
        ├── Task_Template.md           # Standard task template
        ├── feature/
        ├── bugfix/
        ├── refactor/
        ├── backend/
        ├── frontend/
        ├── security/
        └── migration/                  # Legacy migration task directory
```

> **Runtime-only directories** (created during setup, not shipped as part of the template):
> - `Ai/Architecture/Project_Scan_Report.md` — generated in Step 0.
> - `Ai/Archive_Legacy/` — created in Step 4 if legacy tasks exist.
> - `Ai/Tasks/migration/migration_queue.md` + `migration_report.md` — created in Step 4.

---

## 5. The 6-Step Setup Workflow (Steps 0-5)

This is the summary. The authoritative, executable steps live in `init-agent.md`.

| Step | Name | Mode | Deliverable |
|------|------|------|-------------|
| 0 | Pre-flight Project Scan | Automated | `Ai/Architecture/Project_Scan_Report.md` |
| 1 | Base Workspace Initialization | Automated | Populated core `Ai/` files + placeholder replacement |
| 2 | Architecture Documentation | Manual / Guided | `Technical_Architecture.md`, `PRD.md`, `Visual_Identity.md` |
| 3 | Legacy Rules Migration | Interactive | `Ai/Tasks/migration/step3_rules_migration_report.md` |
| 4 | Knowledge Base & Task Migration | Batch Processing | `Ai/Archive_Legacy/`, `migration_queue.md`, migrated tasks |
| 5 | Stack-Specific Audits & Skills | Automated | Stack-specific skill + audit files in `Ai/Skills/` & `Ai/Audits/` |

**Path variants:**
- **New project (no legacy):** Step 0 → 1 → 2 → 5
- **Existing project (legacy agent/tasks):** Step 0 → 1 → 2 → 3 → 4 → 5

---

## 6. Design Decisions Log

Every structural or strategic choice is recorded here so future maintainers know *why* the system is shaped this way. Append-only — never delete rows.

| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| 1 | Overall Approach | Markdown-First (No bash scripts) | Accessible to any AI agent, easily editable |
| 2 | Legacy Task Depth | Full Task File + PROJECT_MAP Entry | Rich historic context preserved |
| 3 | Architecture Files | Manual + Helper Questionnaire | Architecture requires intentional design input |
| 4 | Protocol Templates | Generic, placeholder-driven | Applicable to any project stack |
| 5 | Brand Directory | Always included with template | Brand guidelines essential across projects |
| 6 | Stack & Language | 100% Agnostic — Configured at init | Template usable on any codebase |
| 7 | Knowledge Builder | Separate skill protocol (Step 4) | Semantic conversion requires LLM batching |
| 8 | Base Skills & Audits | Included in Step 1 | Universal software principles apply everywhere |
| 9 | Custom Skills & Audits | Added in Step 5 per stack | Tech-specific checks added dynamically |
| 10 | Step 3 Conflicts | Prompt user explicitly | Never guess user intent on rule conflicts |
| 11 | Language Uniformity | 100% English across all files | Unified global standard |
| 12 | Documentation Split | Separated Blueprint (what/why) from Strategy (how/when) | Behavior and architecture evolve independently |
| 13 | Master File Naming | `AGENT_BLUEPRINT.md` + `AGENT_STRATEGY.md` | Clear, prefix-grouped names signaling agent-system docs |
| 14 | Placeholder Strategy | `{{TOKEN}}` tokens filled at Step 1, undetected tokens left in place + flagged | Keeps templates agnostic while preventing invented values |
| 15 | Resumable Migration | `migration_queue.md` with `[ ]/[x]` checkboxes | Interrupted sessions resume without data loss |
| 16 | Context Hard Cap | Max 2-3 files per request | Protects token budget and reasoning quality |
| 17 | Knowledge_Builder Exposure | Not exposed as a slash command | It is a batch runtime protocol, not interactive reference |

---

## 7. Placeholder Contract (Complete Reference)

All `{{PLACEHOLDER}}` tokens used across template files. The agent replaces these during **Step 1** of `init-agent.md`. If a value cannot be auto-detected, the token is left in place and flagged for manual completion — the agent never invents a value.

### 7.1 Identity & Stack
| Token | Replaced From | Used In |
|-------|---------------|---------|
| `{{PROJECT_NAME}}` | Project config / manifest | `Agent.md`, `PROJECT_MAP.md`, `README.md`, all `Architecture/`, `Protocols/`, `Audits/`, `Brand/` headers |
| `{{TECH_STACK}}` | Detected stack summary | `Agent.md` |
| `{{BACKEND_FRAMEWORK}}` | Manifest inspection | `Technical_Architecture.md` |
| `{{FRONTEND_FRAMEWORK}}` | Manifest inspection | `Technical_Architecture.md` |
| `{{DATABASE}}` | Config / manifest | `Technical_Architecture.md` |

### 7.2 Commands
| Token | Replaced From | Used In |
|-------|---------------|---------|
| `{{TEST_COMMAND}}` | `package.json` scripts / `pytest` / `php artisan test` / `go test` | `Testing_Standards.md`, `Deployment_Protocol.md` |
| `{{LOCAL_DEV_COMMAND}}` | `package.json` scripts / `artisan serve` / `manage.py runserver` | `Deployment_Protocol.md` |
| `{{TYPE_CHECK_COMMAND}}` | `tsc` / `mypy` / `phpstan` etc. | `Testing_Standards.md` |
| `{{LINT_TYPECHECK_COMMAND}}` | Lint + typecheck combined | `Deployment_Protocol.md` |

### 7.3 API Contracts
| Token | Used In |
|-------|---------|
| `{{API_RESPONSE_ENVELOPE_EXAMPLE}}` | `API_Contracts.md` |
| `{{API_ERROR_ENVELOPE_EXAMPLE}}` | `API_Contracts.md` |
| `{{HTTP_STATUS_CODES_SPEC}}` | `API_Contracts.md` |
| `{{PAGINATION_SCHEMA_EXAMPLE}}` | `API_Contracts.md` |

### 7.4 Security
| Token | Used In |
|-------|---------|
| `{{AUTH_MECHANISM_SPEC}}` | `Security_Protocol.md` |
| `{{AUTHORIZATION_SPEC}}` | `Security_Protocol.md` |
| `{{TENANT_ISOLATION_SPEC}}` | `Security_Protocol.md` |
| `{{VALIDATION_ENGINE_SPEC}}` | `Security_Protocol.md` |
| `{{FILE_UPLOAD_SECURITY_SPEC}}` | `Security_Protocol.md` |
| `{{ENCRYPTION_SPEC}}` | `Security_Protocol.md` |
| `{{RATE_LIMITING_SPEC}}` | `Security_Protocol.md` |
| `{{ANTI_BOT_SPEC}}` | `Security_Protocol.md` |

### 7.5 Testing Scopes
| Token | Used In |
|-------|---------|
| `{{UNIT_TEST_SCOPE}}` | `Testing_Standards.md` |
| `{{INTEGRATION_TEST_SCOPE}}` | `Testing_Standards.md` |
| `{{E2E_TEST_SCOPE}}` | `Testing_Standards.md` |

### 7.6 Deployment
| Token | Used In |
|-------|---------|
| `{{STAGING_DEPLOY_PROCESS}}` | `Deployment_Protocol.md` |
| `{{PRODUCTION_DEPLOY_PROCESS}}` | `Deployment_Protocol.md` |

### 7.7 Visual Identity & Design Tokens
| Token | Used In |
|-------|---------|
| `{{COLOR_PRIMARY}}` | `Visual_Identity.md` |
| `{{COLOR_SECONDARY}}` | `Visual_Identity.md` |
| `{{COLOR_ACCENT}}` | `Visual_Identity.md` |
| `{{COLOR_DANGER}}` | `Visual_Identity.md` |
| `{{COLOR_BG}}` | `Visual_Identity.md` |
| `{{COLOR_SURFACE}}` | `Visual_Identity.md` |
| `{{FONT_FAMILY}}` | `Visual_Identity.md` |
| `{{HEADING_SCALE}}` | `Visual_Identity.md` |
| `{{BODY_SCALE}}` | `Visual_Identity.md` |
| `{{LAYOUT_DIRECTION}}` | `Visual_Identity.md` |
| `{{GRID_BASELINE}}` | `Visual_Identity.md` |
| `{{BORDER_RADIUS_SCALE}}` | `Visual_Identity.md` |

> [!NOTE]
> **Maintenance rule:** When you add a new `{{TOKEN}}` to any template, add it to the table above **and** to the Step 1 replacement list in `init-agent.md`. An undocumented placeholder will be silently missed during setup.

---

## 8. File Responsibility Matrix

A quick map of "who owns what" so maintainers know exactly where to make a change.

| Concern | Owner File | Notes |
|---------|-----------|-------|
| Agent identity & critical rules | `Ai/Agent.md` §1 | Stack-agnostic; never embed stack specifics |
| Context loading rules | `Ai/Agent.md` §2 | Behavioral detail in `AGENT_STRATEGY.md` §3 |
| Task creation & execution | `Ai/Agent.md` §3 | 8-stage cycle in `AGENT_STRATEGY.md` §4 |
| Skills slash commands | `Ai/Agent.md` §3C | Mapping in `AGENT_STRATEGY.md` §7.3 |
| Architecture templates | `Ai/Architecture/*` | Filled in Step 1 (auto) + Step 2 (manual) |
| Operational protocols | `Ai/Protocols/*` | Placeholder-driven; filled in Step 1 |
| Universal skills | `Ai/Skills/*` | Reference knowledge; consulted on demand |
| Audit prompts | `Ai/Audits/*` | Read-only diagnostics; never mutate code |
| Task file format | `Ai/Tasks/Task_Template.md` | 3-section standard: Objective / Steps / Reality |
| Setup workflow | `init-agent.md` | The only file that mutates the workspace structure |

---

## 9. Changelog

| Date | Change |
|------|--------|
| 2026-08-12 | Initial plan setup (bash script approach) |
| 2026-08-12 | Shifted to Markdown-First approach (`init-agent.md`) |
| 2026-08-12 | Added Step 0 Pre-flight scan and 6-step workflow |
| 2026-08-12 | Refactored all protocols & visual identity to dynamic placeholders |
| 2026-08-12 | Abstracted all skills to be 100% stack/language agnostic |
| 2026-08-12 | Unified language across ALL markdown files to 100% English |
| 2026-08-12 | Renamed `PLAN.md` → `AGENT_BLUEPRINT.md`; added Documentation Topology (§2), File Responsibility Matrix (§8), and complete Placeholder Contract (§7). |
| 2026-08-12 | Extracted operational behavior into `AGENT_STRATEGY.md` (How/When), leaving this file as the What/Why knowledge base. |
| 2026-08-12 | Added decisions #12-#17 to the Design Decisions Log (doc split, naming, placeholder strategy, resumable migration, context cap, KB-builder exposure). |
