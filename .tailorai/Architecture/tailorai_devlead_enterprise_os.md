# RFC: TailorAI-DevLead Enterprise OS Architecture Migration

* **Author:** khaled
* **Date:** 2026-11-07
* **Status:** Published RFC for Feedback 🚀
* **Project:** TailorAI-DevLead

---

## Overview

This RFC standardizes the engineering, quality assurance, and execution innovations developed in production into the master `TailorAI-DevLead` repository. All non-engineering business layers (marketing, sales, and accounting) have been intentionally removed. The platform is dedicated exclusively to software developers and engineers: acting as an autonomous **Technical Lead (Agent 1)**, an architectural **Code Reviewer (Agent 2)**, and a **QA Automation & Test Lifecycle Lead (Agent 3)**.

---

## Core Engineering Architecture

```
TailorAI-DevLead/
├── AGENT_BLUEPRINT.md                    # Technical architecture & knowledge base
├── AGENT_STRATEGY.md                     # Operational behavior, Dual-Track decision tree & QA model
├── init-agent.md                         # Setup protocol (Steps 0-5) with upgrade path
├── scripts/
│   └── build-explorer.js                 # Standalone offline doc generator (< 100KB)
├── docs/
│   └── architecture/
│       └── PRD_TailorAI_DevLead.md       # DevLead console PRD (focused on Dev/QA/Terminal)
│
└── .tailorai/                            # Distributable Governance Workspace Template
    ├── Agent.md                          # Universal entry router & critical invariants (Cursor, Windsurf, Claude Code, Antigravity)
    ├── HANDBOOK.md                       # Engineering Constitution, Dual-Track Engine & Core Invariants
    ├── ACTIVE_TASKS.md                   # In-progress task registry
    ├── PROJECT_MAP.md                    # Cumulative project index with Fast-Track history
    ├── README.md                         # Navigation & directory map
    │
    ├── Engineering/                      # Core Engineering Roles & Operational Runbooks
    │   ├── Lead_Developer.md             # Agent 1: Full-stack execution lead
    │   ├── Code_Review.md                # Agent 2: Architecture & compliance auditor
    │   └── Runbooks/                     # Operational guides
    │       ├── Local_Setup.md            # Local dev environment setup
    │       ├── Commands.md               # CLI commands reference
    │       ├── Production.md             # Production deployment & ops
    │       └── CI_CD_Pipeline.md         # Automated CI/CD pipeline
    │
    ├── QA/                               # Decoupled On-Demand Quality Model
    │   ├── Agent_Testing.md              # Agent 3: QA Automation & Test Lifecycle Lead
    │   ├── DEFECTS_LOG.md                # Structured defect triage & findings log
    │   └── TEST_PLAN.md                  # Test registry & operational scenario plan
    │
    ├── Protocols/                        # Standardized Universal Protocols
    │   ├── API_Contracts.md              # REST/RPC response shapes & error standards
    │   ├── Audit_Log_Protocol.md         # Structured security & mutation audit trail
    │   ├── Deployment_Protocol.md        # Zero-downtime deploy & rollback rules
    │   ├── Environment_Variables_Protocol.md # Env schema validation & secrets safety
    │   ├── Git_Workflow.md               # Branch naming, conventional commits & PR standards
    │   ├── I18n_Protocol.md              # Locale key parity & RTL/LTR logical properties
    │   ├── Security_Protocol.md          # Auth, tenancy, injection & anti-bot guards
    │   ├── Storage_Protocol.md           # Secure uploads, MIME checks & storage adapters
    │   ├── Testing_Standards.md          # Unit, integration & live scenario standards
    │   ├── Theme_Protocol.md             # CSS variables, tokens & theme persistence
    │   └── WebSocket_Protocol.md         # Real-time event schemas & socket rules
    │
    ├── Architecture/                     # Project Architecture Specifications (Templates)
    │   ├── Architecture_Questions.md     # Setup questionnaire
    │   ├── Technical_Architecture.md     # Stack, data layer & folder topology
    │   ├── PRD.md                        # Product requirements template
    │   └── Visual_Identity.md            # Design system & tokens template
    │
    ├── Skills/                           # Specialized Developer Skills
    │   ├── CleanCode_Skill.md            # SRP, naming & code smells
    │   ├── Code_Review_Skill.md          # Multi-lens review methodology
    │   ├── Designer_Skill.md             # UI/UX engineering & accessibility
    │   ├── Knowledge_Builder_Skill.md    # Legacy task migration protocol
    │   ├── Performance_Skill.md          # Profiling & bottleneck mitigation
    │   └── Security_Skill.md             # Vulnerability prevention
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

## Detailed Architectural Mechanisms

### 1. Dual-Track Execution Engine (Fast-Track vs. Full Protocol)
Eliminates documentation latency for small modifications while maintaining strict governance for architectural changes:
* **🚀 Fast-Track (≤ 3 files):**
  - **Triggers:** Surgical bug fixes, utility hooks, UI polish, locale keys.
  - **Rules:** No task file required in `Tasks/`. Direct code edit → Fast syntax/type check (`php -l`, `tsc --noEmit`, etc.) → Single-line log under `## Fast-Track History` in `PROJECT_MAP.md` → Commit. Execution time: < 1 min.
  - **Strict Negative Boundary:** Fast-Track is strictly forbidden for database migrations, auth/security middleware, public API contract breaks, or new entity schemas.
* **🛡️ Full Protocol (Architectural Changes):**
  - **Triggers:** New modules, schema changes, new public endpoints, complete UI flows.
  - **Rules:** Task file in `Tasks/[category]/YYYY-MM-DD_slug.md` → Register in `ACTIVE_TASKS.md` → Atomic execution with verification → Archive in `PROJECT_MAP.md`.

### 2. Decoupled 100% On-Demand QA Testing Model
* **The Problem:** Running slow E2E or unit suites on every code modification degrades agent velocity.
* **The Solution:**
  - **Lead Developer (Agent 1):** Writes test files with status `⬜`, but never runs heavy suites automatically during development.
  - **QA Lead (Agent 3 - `Agent_Testing.md`):** A dedicated testing persona responsible for running test suites, headed interactive E2E scenarios, and logging defects into `DEFECTS_LOG.md`.
  - Tests run exclusively on explicit human command (`/qa` or dedicated test commands).

### 3. Universal IDE & Agent Compatibility
* `.tailorai/Agent.md` remains in the root of `.tailorai/`.
* It inlines the 10 Critical Engineering Rules directly so tools like Cursor, Windsurf, Claude Code, and Antigravity inherit strict constraints on turn 1.
* It routes tasks between:
  - Lead Developer (`Engineering/Lead_Developer.md`)
  - Code Reviewer (`Engineering/Code_Review.md`)
  - QA Automation (`QA/Agent_Testing.md`)

### 4. TailorAI-DevLead Console PRD
* Documented in `.tailorai/Architecture/PRD_TailorAI_DevLead.md`.
* Focuses exclusively on Developer Cockpit features: Channels for Lead Dev, Code Review, and QA Lead, connected to a live subprocess terminal panel and Git status tracker.

### 5. Offline Documentation Explorer (`scripts/build-explorer.js`)
* A lightweight Node.js script that compiles `.tailorai/` into a single standalone HTML document on demand (< 100KB).

