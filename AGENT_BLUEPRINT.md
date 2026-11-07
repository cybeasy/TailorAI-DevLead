# Cybeasy TailorAI-DevLead — Architecture Blueprint & Knowledge Base 🏛️💻

> **Master Knowledge Base:** Primary architecture documentation for the `TailorAI-DevLead` project.  
> This is the **What + Why** reference — it documents the system structure, the design decisions behind it, and the full placeholder contract.  
> For **How** the agent behaves at runtime, see `AGENT_STRATEGY.md`.  
> Read this file in any new session to understand the system design, file hierarchy, and decision log without re-explaining context.  
> Version: 2.0.0 (Enterprise OS) | Last Updated: 2026-11-07

---

## 1. System Vision

The **Cybeasy TailorAI-DevLead** workspace is a stack-agnostic, language-agnostic template that instantiates an autonomous engineering governance directory (`.tailorai/`) inside any software repository. Developed by **Cybeasy** ([cybeasy.com](https://cybeasy.com/)) for **TailorAI** ([tailorai.me](https://tailorai.me/)), this workspace transforms the AI Agent into an effective **Technical Lead (Agent 1)**, an architectural **Code Reviewer (Agent 2)**, and an autonomous **QA Automation Lead (Agent 3)**.

### Core Principles
1. **Context Isolation (Context Router):** The AI Agent loads only 2–3 task-relevant files per request to optimize token usage.
2. **Dual-Track Execution Engine:** Fast-Track allows surgical micro-fixes (≤ 3 files) with zero documentation overhead, while Full Protocol enforces structured atomic tracking for architectural changes.
3. **Decoupled Quality & Testing Model:** Agent 1 authors test files with status `⬜` without blocking velocity. Agent 3 executes tests on explicit human command.
4. **Persistent Knowledge Base:** `PROJECT_MAP.md` acts as the master index, Fast-Track log, and cumulative memory of the repository.

---

## 2. Documentation Topology

This template ships with **three master reference files** at the root, plus companion specifications and the runtime governance directory inside `.tailorai/`.

| File | Scope | Question it answers | Audience |
|---|---|---|---|
| `AGENT_BLUEPRINT.md` (this file) | Architecture & design knowledge | **What** is the system + **Why** was it built this way? | Developers / maintainers |
| `AGENT_STRATEGY.md` | Operational behavior & decisions | **How** does the agent behave + **When** does it act? | Developers / maintainers |
| `init-agent.md` | Setup & upgrade protocol (Steps 0-5) | **How is a workspace instantiated or upgraded?** | Any AI Agent running setup |
| `.tailorai/Architecture/PRD_TailorAI_DevLead.md` | DevLead console specification | **What is TailorAI-DevLead Console and how does it execute?** | Tooling maintainers |
| `.tailorai/Agent.md` | Universal runtime entry router | **What rules bind the agent across Cursor, Windsurf, Claude?** | The AI Agent itself |
| `.tailorai/HANDBOOK.md` | Engineering Operating Constitution | **What are the non-negotiable engineering rules & tracks?** | AI agents & human developers |

---

## 3. Approach: Markdown-First with Optional Tooling

> [!IMPORTANT]
> **All governance workflows use Markdown (`.md`) protocols.**
> `init-agent.md` serves as a step-by-step protocol executed directly by any AI Agent.
> Tooling scripts (such as `scripts/build-explorer.js`) are 100% optional developer utilities requiring zero npm dependencies.

---

## 4. Complete Directory Hierarchy

```text
TailorAI-DevLead/
├── AGENT_BLUEPRINT.md                    # Architecture & knowledge base (What + Why)
├── AGENT_STRATEGY.md                     # Operational behavior & decision reference (How + When)
├── init-agent.md                         # Master setup & upgrade protocol (Steps 0-5)
├── README.md                             # Repository overview & quick start
├── LICENSE                               # Open-source license
├── scripts/
│   └── build-explorer.js                 # Standalone offline doc explorer generator
├── docs/
│   └── architecture/
│       └── PRD_TailorAI_DevLead.md       # TailorAI-DevLead console PRD
│
└── .tailorai/                            # Distributable Governance Workspace Template
    ├── Agent.md                          # Universal entry router & critical invariants
    ├── HANDBOOK.md                       # Engineering constitution & Dual-Track rules
    ├── ACTIVE_TASKS.md                   # In-progress task registry
    ├── PROJECT_MAP.md                    # Master index with Fast-Track history
    ├── README.md                         # Workspace guide
    ├── index.html                        # Compiled offline knowledge explorer
    │
    ├── Engineering/                      # Core Engineering Roles & Operational Runbooks
    │   ├── Lead_Developer.md             # Agent 1: Full-stack execution lead
    │   ├── Code_Review.md                # Agent 2: Architecture & compliance auditor
    │   └── Runbooks/                     # Operational execution guides
    │       ├── Local_Setup.md            # Local dev environment setup
    │       ├── Commands.md               # CLI commands reference
    │       ├── Production.md             # Production deployment specifications
    │       └── CI_CD_Pipeline.md         # Continuous integration & deployment
    │
    ├── QA/                               # Decoupled On-Demand Quality Model
    │   ├── Agent_Testing.md              # Agent 3: QA Automation Lead
    │   ├── DEFECTS_LOG.md                # Master defect triage & findings register
    │   └── TEST_PLAN.md                  # Decoupled test matrix & scenario registry
    │
    ├── Protocols/                        # Universal Operational Protocols (11 total)
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
    ├── Architecture/                     # Project Architecture Specifications (Templates)
    │   ├── PRD_TailorAI_DevLead.md       # TailorAI-DevLead console PRD
    │   ├── Architecture_Questions.md     # Setup questionnaire
    │   ├── Technical_Architecture.md     # Stack, data layer & folder topology
    │   ├── PRD.md                        # Product requirements template
    │   └── Visual_Identity.md            # Design system & tokens template
    │
    ├── Skills/                           # Specialized Developer Skills
    │   ├── CleanCode_Skill.md
    │   ├── Code_Review_Skill.md
    │   ├── Designer_Skill.md
    │   ├── Knowledge_Builder_Skill.md
    │   ├── Performance_Skill.md
    │   └── Security_Skill.md
    │
    ├── Audits/                           # Automated Verification Prompts
    │   ├── CleanCode_Audit_Prompt.md
    │   ├── Knowledge_Base_Verification.md
    │   ├── Security_Audit_Prompt.md
    │   └── TailorAI_Folder_Audit_Prompt.md
    │
    ├── Brand/                            # Visual assets template
    │   └── Brand_Guide_Template.md
    │
    └── Tasks/                            # Task workspace
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

## 5. The Setup & Upgrade Workflow

The authoritative, executable steps live in `init-agent.md`.

| Step | Name | Mode | Deliverable |
|---|---|---|---|
| **0** | Pre-flight Project Scan | Automated | `.tailorai/Architecture/Project_Scan_Report.md` |
| **1** | Base Workspace Initialization | Automated | Populated core `.tailorai/` files + placeholder replacement |
| **2** | Architecture Documentation | Manual / Guided | `Technical_Architecture.md`, `PRD.md`, `Visual_Identity.md` |
| **3** | Legacy Rules Migration | Interactive | Migrates non-TailorAI rules into `.tailorai/Agent.md` |
| **3B** | Upgrade to Enterprise OS v2 | Automated | Upgrades legacy TailorAI v1 projects to v2 without data loss |
| **4** | Knowledge Base & Task Migration | Batch | Batch migrates legacy task archives into `Tasks/` & `PROJECT_MAP.md` |
| **5** | Stack-Specific Audits & Skills | Automated | Adds stack-specific skills/audits matching project manifest |

---

## 6. Design Decisions Log

| # | Decision | Choice | Rationale |
|---|---|---|---|
| 1 | Overall Approach | Markdown-First (No bash scripts) | Accessible to any AI agent, easily editable across platforms. |
| 2 | Legacy Task Depth | Full Task File + PROJECT_MAP Entry | Rich historic context preserved. |
| 3 | Architecture Files | Manual + Helper Questionnaire | Architecture requires intentional human design input. |
| 4 | Protocol Templates | Generic, placeholder-driven with defaults | Applicable to any project stack out-of-the-box. |
| 5 | Brand Directory | Included with template | Brand guidelines essential across UI projects. |
| 6 | Stack & Language | 100% Agnostic — Configured at init | Template usable on any codebase (PHP, JS/TS, Python, Go, Rust). |
| 7 | Knowledge Builder | Separate skill protocol (Step 4) | Semantic conversion requires LLM batching. |
| 8 | Base Skills & Audits | Included in Step 1 | Universal software principles apply everywhere. |
| 9 | Custom Skills & Audits | Added in Step 5 per stack | Tech-specific checks added dynamically. |
| 10 | Step 3 Conflicts | Prompt user explicitly | Never guess user intent on rule conflicts. |
| 11 | Language Uniformity | 100% English across all template files | Unified global standard. |
| 12 | Documentation Split | Separated Blueprint from Strategy | Behavior and architecture evolve independently. |
| 13 | Master File Naming | `AGENT_BLUEPRINT.md` + `AGENT_STRATEGY.md` | Clear, prefix-grouped names signaling agent-system docs. |
| 14 | Placeholder Strategy | `{{TOKEN}}` filled at Step 1, defaults provided | Keeps templates agnostic while preventing invented values. |
| 15 | Resumable Migration | `migration_queue.md` with checkboxes | Interrupted sessions resume without data loss. |
| 16 | Context Hard Cap | Max 2-3 files per request | Protects token budget and reasoning quality. |
| 17 | Knowledge_Builder Exposure | Not exposed as a slash command | It is a batch runtime protocol, not interactive reference. |
| 18 | Governance Folder Naming | `.tailorai/` (hidden lowercase dotfolder) | Standard across developer tools (`.github`, `.vscode`, `.cursor`). |
| 19 | Dual-Track Task Engine | Fast-Track (≤ 3 files) vs Full Protocol | Eliminates documentation friction for micro-fixes while maintaining architectural rigor. |
| 20 | Decoupled QA Model | Agent 1 writes `⬜`, Agent 3 executes | Eliminates test execution latency during code development loops. |
| 21 | Universal IDE Router | `Agent.md` in `.tailorai/` root | Preserves 100% compatibility with Cursor, Windsurf, Claude Code, and Antigravity. |
| 22 | Console PRD Location | `.tailorai/Architecture/PRD_TailorAI_DevLead.md` | Standardized inside `.tailorai/Architecture/` alongside all system specifications. |
| 23 | Offline Explorer Tool | CommonJS `scripts/build-explorer.js` | Zero npm dependency script compiling an offline HTML viewer (< 100KB). |

---

## 7. Placeholder Contract Summary

Core tokens replaced during Step 1 of `init-agent.md`:
* **Identity:** `{{PROJECT_NAME}}`, `{{TECH_STACK}}`, `{{DATABASE}}`
* **Commands:** `{{LOCAL_DEV_COMMAND}}`, `{{TYPE_CHECK_COMMAND}}`, `{{LINT_COMMAND}}`, `{{TEST_COMMAND}}`, `{{E2E_TEST_COMMAND}}`, `{{BUILD_COMMAND}}`
* All specialized protocol templates ship with battle-tested fallback defaults so downstream projects run without mandatory token configuration.
