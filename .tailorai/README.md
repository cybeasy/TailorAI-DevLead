# Governance & Technical Documentation (`.tailorai/`) 🏛️
**Project:** `{{PROJECT_NAME}}`

Welcome to the central AI engineering governance, architectural specifications, and task tracking hub. All AI agents and human developers working on the repository follow the guidelines documented here.

> **Companion references (in project root, outside `.tailorai/`):**
> - **`AGENT_BLUEPRINT.md`** — Architecture knowledge base: *what* the workspace is + *why* it was designed this way. The master reference for structure, decisions, and the placeholder contract.
> - **`AGENT_STRATEGY.md`** — Operational strategy: *how* the agent behaves + *when* it takes each action. Read this before changing any behavioral rule.
> - **`init-agent.md`** — Setup protocol (Steps 0-5) used to instantiate or upgrade this workspace.

---

## 🧭 Navigation & Directory Map

```
.tailorai/
├── Agent.md                            # Universal AI entry router & critical invariants
├── HANDBOOK.md                         # Engineering constitution & Dual-Track rules
├── PROJECT_MAP.md                      # Knowledge base master index & Fast-Track log
├── ACTIVE_TASKS.md                     # Currently in-progress tasks registry
├── README.md                           # Documentation index & directory guide
│
├── Engineering/                        # Core Engineering Roles & Operational Runbooks
│   ├── Lead_Developer.md               # Agent 1: Full-stack execution lead
│   ├── Code_Review.md                  # Agent 2: Code review & compliance auditor
│   └── Runbooks/                       # Operational execution runbooks
│       ├── Local_Setup.md              # Local dev environment setup
│       ├── Commands.md                 # CLI commands reference
│       ├── Production.md               # Production deployment specifications
│       └── CI_CD_Pipeline.md           # Continuous integration & deployment
│
├── QA/                                 # Decoupled Quality & Testing Project
│   ├── Agent_Testing.md                # Agent 3: QA Automation Lead
│   ├── DEFECTS_LOG.md                  # Master defect triage & findings register
│   └── TEST_PLAN.md                    # Decoupled test matrix & scenario registry
│
├── Protocols/                          # Universal Engineering Protocols
│   ├── API_Contracts.md
│   ├── Audit_Log_Protocol.md
│   ├── Deployment_Protocol.md
│   ├── Environment_Variables_Protocol.md
│   ├── Git_Workflow.md
│   ├── I18n_Protocol.md
│   ├── Security_Protocol.md
│   ├── Storage_Protocol.md
│   ├── Testing_Standards.md
│   ├── Theme_Protocol.md
│   └── WebSocket_Protocol.md
│
├── Architecture/                       # Architecture & Design Specifications
│   ├── Technical_Architecture.md
│   ├── PRD.md
│   ├── Visual_Identity.md
│   └── Architecture_Questions.md
│
├── Skills/                             # Developer Skills & Quality Rules
│   ├── CleanCode_Skill.md
│   ├── Code_Review_Skill.md
│   ├── Designer_Skill.md
│   ├── Knowledge_Builder_Skill.md
│   ├── Performance_Skill.md
│   └── Security_Skill.md
│
├── Audits/                             # Automated Verification Prompts
│   ├── CleanCode_Audit_Prompt.md
│   ├── Knowledge_Base_Verification.md
│   ├── Security_Audit_Prompt.md
│   └── TailorAI_Folder_Audit_Prompt.md
│
├── Brand/                              # Brand Assets Template
│   └── Brand_Guide_Template.md
│
└── Tasks/                              # Task Workspaces
    ├── Task_Template.md
    ├── backend/
    ├── frontend/
    ├── bugfix/
    ├── feature/
    ├── refactor/
    ├── security/
    └── migration/
```

---

## ⚡ Fast-Track vs. Full Protocol

| Track | When to Use | Documentation Overhead | Average Time |
|---|---|---|---|
| **🚀 Fast-Track** | Bug fixes, utility hooks, UI polish, locale keys (≤ 3 files) | No task file required. Fast syntax check + single line in `PROJECT_MAP.md`. | **< 1 min** |
| **🛡️ Full Protocol** | New modules, schema migrations, public API endpoints, major flows | Task file in `Tasks/` + atomic execution + test registration in `TEST_PLAN.md`. | **Structured** |

---

## 🛠️ Offline Documentation Explorer

To compile this documentation into a standalone single-file HTML viewer:
```bash
node scripts/build-explorer.js
```
The compiled explorer will be generated at `.tailorai/index.html`.
