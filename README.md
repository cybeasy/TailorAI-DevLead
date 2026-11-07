<div align="center">

# TailorAI DevLead Workspace 🏛️💻

### Autonomous AI Technical Lead, Code Reviewer & QA Operating System for Software Repositories

[![Powered by TailorAi.me](https://img.shields.io/badge/powered%20by-TailorAi.me-0891b2.svg)](https://tailorai.me)
[![Status](https://img.shields.io/badge/status-ready-success.svg)](#)
[![Version](https://img.shields.io/badge/version-2.0.0--Enterprise--OS-6d28d9.svg)](#)
[![Language](https://img.shields.io/badge/language-Markdown-0891b2.svg)](#)
[![Stack](https://img.shields.io/badge/stack-agnostic-6d28d9.svg)](#)
[![IDE](https://img.shields.io/badge/IDE-all%20supported-blueviolet.svg)](#)
[![LLM](https://img.shields.io/badge/LLM-all%20models-10b981.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

</div>

---

## 📖 Overview

**TailorAI DevLead Workspace** is a stack-agnostic, language-agnostic AI governance operating system powered by [TailorAi.me](https://tailorai.me). Drop it into **any** software repository to instantiate a `.tailorai/` governance workspace that transforms your AI coding agent into an autonomous **Technical Lead (Agent 1)**, an architectural **Code Reviewer (Agent 2)**, and a **QA Automation Lead (Agent 3)**.

Fully compatible with **all IDEs** (Antigravity, Cursor, Windsurf, Claude Code, VS Code, JetBrains, Xcode, Neovim, CLI, etc.) and **all AI models** (Claude, GPT, Gemini, DeepSeek, Llama, Ollama, etc.).

---

## ✨ Key Features (Enterprise OS v2)

- **⚡ Dual-Track Execution Engine:**
  - **🚀 Fast-Track (< 1 min):** Routine, low-risk fixes (≤ 3 files, bug fixes, utility hooks, UI polish, locale keys) execute surgically with automated syntax/type checks and zero task-file overhead.
  - **🛡️ Full Protocol:** High blast-radius changes (database schema migrations, new modules, public API endpoints, major flows) follow disciplined, atomic task tracking.
- **🧪 Decoupled Quality & Testing Architecture (`QA/`):**
  - **Zero Velocity Loss:** Lead Developer authors tests with status `⬜`, but never wastes agent time running slow suites automatically during feature development.
  - **On-Demand QA Automation:** Agent 3 (`Agent_Testing.md`) executes test suites, headed browser tests, and manages defects in `DEFECTS_LOG.md` on explicit user command (`/qa`).
- **🌐 Universal IDE Entry Router:** `.tailorai/Agent.md` inlines the 10 Critical Engineering Invariants directly, guaranteeing immediate adherence across Cursor, Windsurf, Claude Code, and Antigravity.
- **🧭 Lazy Context Router:** Enforces a hard cap of 2–3 active files per turn, protecting your token budget and reasoning quality.
- **📜 11 Universal Operational Protocols:** Standardized protocols for API contracts, audit logs, deployment, environment validation, Git workflows, internationalization, security, object storage, testing standards, theme tokens, and WebSockets.
- **🌐 Offline Knowledge Explorer Generator:** A standalone, zero-dependency Node.js script (`scripts/build-explorer.js`) compiles all `.tailorai/` markdown docs into an offline, single-file HTML viewer (< 100 KB).
- **🖥️ TailorAI-DevLead Console PRD:** Full specification in `.tailorai/Architecture/PRD_TailorAI_DevLead.md` for an ultra-lightweight developer cockpit with live CLI terminal streaming.

---

## 🗂️ Repository Structure

```text
TailorAI-DevLead/
├── README.md                             # ← You are here
├── AGENT_BLUEPRINT.md                    # Architecture knowledge base (What + Why)
├── AGENT_STRATEGY.md                     # Operational behavior reference (How + When)
├── init-agent.md                         # Master setup & upgrade protocol (Steps 0-5)
├── scripts/
│   └── build-explorer.js                 # Standalone offline doc explorer generator
├── docs/
│   └── architecture/
│       └── PRD_TailorAI_DevLead.md       # TailorAI-DevLead developer console PRD
│
└── .tailorai/                            # Distributable Governance Workspace Template
    ├── Agent.md                          # AI runtime constitution & universal router
    ├── HANDBOOK.md                       # Engineering Operating Constitution
    ├── ACTIVE_TASKS.md                   # In-progress tasks registry
    ├── PROJECT_MAP.md                    # Cumulative memory & Fast-Track history
    ├── README.md                         # Workspace-internal guide
    ├── index.html                        # Compiled standalone offline explorer
    │
    ├── Engineering/                      # Core Engineering Roles & Operational Runbooks
    │   ├── Lead_Developer.md             # Agent 1: Full-stack execution lead
    │   ├── Code_Review.md                # Agent 2: Architecture & compliance auditor
    │   └── Runbooks/                     # Operational execution runbooks
    │       ├── Local_Setup.md            # Local dev environment setup
    │       ├── Commands.md               # CLI commands reference
    │       ├── Production.md             # Production deployment specifications
    │       └── CI_CD_Pipeline.md         # Continuous integration & deployment
    │
    ├── QA/                               # Decoupled On-Demand Quality Model
    │   ├── Agent_Testing.md              # Agent 3: QA Automation Lead
    │   ├── DEFECTS_LOG.md                # Defect discovery & findings register
    │   └── TEST_PLAN.md                  # Test registry & operational scenario plan
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
    ├── Architecture/                     # Architecture & Design Templates
    │   ├── PRD_TailorAI_DevLead.md       # TailorAI-DevLead console PRD
    │   ├── Architecture_Questions.md
    │   ├── Technical_Architecture.md
    │   ├── PRD.md
    │   └── Visual_Identity.md
    │
    ├── Skills/                           # Developer Skills & Verification Rules
    │   ├── CleanCode_Skill.md
    │   ├── Code_Review_Skill.md
    │   ├── Designer_Skill.md
    │   ├── Knowledge_Builder_Skill.md
    │   ├── Performance_Skill.md
    │   └── Security_Skill.md
    │
    ├── Audits/                           # Read-only Diagnostic Prompts
    │   ├── CleanCode_Audit_Prompt.md
    │   ├── Security_Audit_Prompt.md
    │   ├── TailorAI_Folder_Audit_Prompt.md
    │   └── Knowledge_Base_Verification.md
    │
    ├── Brand/
    │   └── Brand_Guide_Template.md
    │
    └── Tasks/                            # Category-based task tracking
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

## 🚀 Quick Start

### Step 1 — Clone the repository
```bash
git clone https://github.com/cybeasy/TailorAI-DevLead.git
```

### Step 2 — Run the setup protocol
Open an AI agent session in your target project root and state:

> **"Read `TailorAI-DevLead/init-agent.md` and execute Step 0."**

The agent will automatically scan your repository and guide you step-by-step:
```
"Execute Step 1"   # Base workspace initialization & placeholder population
"Execute Step 2"   # Architecture documentation (manual / guided)
"Execute Step 3"   # Legacy rules migration (skip if no legacy agent)
"Execute Step 3B"  # Upgrade from legacy TailorAI v1 to Enterprise OS v2
"Execute Step 4"   # Knowledge base & task migration (skip if no legacy tasks)
"Execute Step 5"   # Stack-specific audits & skills customization
```

---

## ⚡ Daily Engineering Workflow

### Fast-Track (< 1 min execution):
For bug fixes, UI polish, utility helpers, or locale keys modifying **≤ 3 files**:
```
"Fix the mobile margin on the search header."
```
The agent executes the surgical fix directly, runs syntax/type checks, appends a single line to `PROJECT_MAP.md`, and presents the diff immediately.

### Full Protocol (Architectural Changes):
For database schema changes, new modules, or public APIs:
```
"Add a team invitation feature with email verification."
```
The agent checks `ACTIVE_TASKS.md`, creates a task file in `Tasks/feature/`, registers it, and executes atomically step-by-step with your approval.

### Running Decoupled Tests:
```
"Run QA tests" or "/qa"
```
Agent 3 (`Agent_Testing.md`) executes test suites or live headed browser tests and logs defects in `DEFECTS_LOG.md`.

### Building Offline Docs Explorer:
```bash
node scripts/build-explorer.js
```
Generates a standalone single-file HTML viewer at `.tailorai/index.html`.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
