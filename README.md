<div align="center">

# TailorAI DevLead Workspace

### Turn any AI coding agent into a disciplined Technical Lead for your repository.

[![Powered by TailorAi.me](https://img.shields.io/badge/powered%20by-TailorAi.me-0891b2.svg)](https://tailorai.me)
[![Status](https://img.shields.io/badge/status-ready-success.svg)](#)
[![Language](https://img.shields.io/badge/language-Markdown-0891b2.svg)](#)
[![Stack](https://img.shields.io/badge/stack-agnostic-6d28d9.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

</div>

---

## 📖 Overview

**TailorAI DevLead Workspace** is a stack-agnostic, language-agnostic governance layer powered by [TailorAi.me](https://tailorai.me). You drop it into **any** software repository to instantiate an `Ai/` directory that transforms an AI coding agent (Claude, GPT, Cursor, etc.) into an effective **Technical Lead** that understands, refactors, and extends your codebase cleanly — instead of editing blindly.

The template solves the three biggest problems of AI-assisted development:

1. **Context bloat** — the agent reads 50 files and burns your token budget on every request.
2. **Untracked changes** — the agent writes code with no record of *why* or *how*.
3. **Drift & inconsistency** — every AI session rediscovers your architecture from scratch.

This workspace fixes all three with a **Context Router**, **Atomic Execution**, and a **Persistent Knowledge Base**.

> **Philosophy:** Markdown-first, no bash scripts. Every workflow is a `.md` protocol any LLM can execute step-by-step, with human checkpoints at every gate.

---

## ✨ Key Features

- **🧭 Context Router** — the agent loads only 2–3 task-relevant files per request. Hard cap protects your token budget and reasoning quality.
- **⚛️ Atomic Execution** — every task moves through an 8-stage cycle (clarify → task file → register → present → execute → document → verify → stop), gated by explicit user approval at each step.
- **🧠 Persistent Knowledge Base** — `PROJECT_MAP.md` acts as cumulative memory. Past decisions and completed tasks survive across sessions.
- **📝 Documentation Before Code** — a task file *must* exist before any non-trivial code change. No task file = no code. Your workspace becomes an audit trail, not a decoration.
- **🔌 100% Stack-Agnostic Base** — works identically on Laravel, Django, React, Next.js, Vue, Flutter, Go, .NET, Rails, and more. Stack-specific rules are layered on top in Step 5, never baked into base files.
- **🔄 Legacy Migration** — resumable, batch-processed conversion of existing agent rules and historical task archives into the standardized format. Interrupted sessions resume without data loss.
- **🔍 Audit Prompts** — read-only diagnostic prompts for code quality, security, workspace consistency, and knowledge-base verification.
- **🛠️ Dynamic Placeholders** — `{{TOKEN}}`-driven templates auto-populated at setup time. Undetected values are flagged, never invented.

---

## 🗂️ Repository Structure

```text
TailorAI-DevLead/
├── README.md                        # ← You are here
├── AGENT_BLUEPRINT.md               # Architecture knowledge base (What + Why)
├── AGENT_STRATEGY.md                # Operational behavior reference (How + When)
├── init-agent.md                    # Master setup protocol (Steps 0-5)
│
└── Ai/                              # Governance Workspace (copied into your project)
    ├── Agent.md                     # AI runtime constitution (critical rules)
    ├── ACTIVE_TASKS.md              # In-progress tasks register
    ├── PROJECT_MAP.md               # Knowledge base master index
    ├── README.md                    # Workspace-internal guide
    │
    ├── Architecture/                # Architecture & design templates
    │   ├── Architecture_Questions.md
    │   ├── Technical_Architecture.md
    │   ├── PRD.md
    │   └── Visual_Identity.md
    │
    ├── Protocols/                   # Universal operational protocols
    │   ├── API_Contracts.md
    │   ├── Git_Workflow.md
    │   ├── Security_Protocol.md
    │   ├── Testing_Standards.md
    │   └── Deployment_Protocol.md
    │
    ├── Skills/                      # AI skills (reference knowledge)
    │   ├── CleanCode_Skill.md
    │   ├── Security_Skill.md
    │   ├── Performance_Skill.md
    │   ├── Code_Review_Skill.md
    │   ├── Designer_Skill.md
    │   └── Knowledge_Builder_Skill.md
    │
    ├── Audits/                      # Read-only audit prompts
    │   ├── CleanCode_Audit_Prompt.md
    │   ├── Security_Audit_Prompt.md
    │   ├── Ai_Folder_Audit_Prompt.md
    │   └── Knowledge_Base_Verification.md
    │
    ├── Brand/
    │   └── Brand_Guide_Template.md
    │
    └── Tasks/                       # Category-based task tracking
        ├── Task_Template.md
        ├── feature/
        ├── bugfix/
        ├── refactor/
        ├── backend/
        ├── frontend/
        ├── security/
        └── migration/
```

> ℹ️ The three root-level files (`AGENT_BLUEPRINT.md`, `AGENT_STRATEGY.md`, `init-agent.md`) govern the **template itself**. The `Ai/` directory is what actually gets copied into your target projects.

### 📚 What to Read First

| File | Purpose | Audience |
|------|---------|----------|
| **`AGENT_BLUEPRINT.md`** | *What* the system is + *why* it was designed this way. Architecture, decisions, placeholder contract. | Maintainers |
| **`AGENT_STRATEGY.md`** | *How* the agent behaves + *when* it takes each action. Decision trees, the 8-stage cycle, future-dev guide. | Maintainers |
| **`init-agent.md`** | The 6-step setup protocol (Steps 0–5). Executed by any AI agent. | Anyone setting up a project |
| **`Ai/Agent.md`** | The runtime constitution the agent reads at runtime. | The AI agent itself |

---

## 🚀 Quick Start

### Prerequisites

- A software repository you want to govern (any language/stack).
- An AI coding agent (e.g., Claude, GPT-4, Cursor, Copilot Chat) capable of reading and writing files.
- (Optional) Git installed — the workflow is designed around atomic commits.

### Step 1 — Clone & Copy the workspace into your project

1. **Clone this repository:**

```bash
git clone https://github.com/cybeasy/TailorAI-DevLead.git
```

2. **Copy the `Ai/` directory and `init-agent.md` into your target project root:**

```bash
# From your project root (if TailorAI-DevLead was cloned alongside your project):
cp -r ../TailorAI-DevLead/Ai ./
cp ../TailorAI-DevLead/init-agent.md ./

# Or if cloned directly inside your project folder:
cp -r TailorAI-DevLead/Ai ./
cp TailorAI-DevLead/init-agent.md ./
rm -rf TailorAI-DevLead  # optional cleanup
```

### Step 2 — Run the setup protocol

Open an AI agent session in your project root and state:

> **"Read `init-agent.md` and execute Step 0."**

The agent will scan your project manifests (`package.json`, `composer.json`, `requirements.txt`, `go.mod`, `pubspec.yaml`, `Gemfile`, `*.csproj`, etc.), inspect the directory layout, detect any legacy agent files, and generate a **Project Scan Report**. Review it, then proceed step-by-step:

```
"Execute Step 1"   # Base workspace initialization + placeholder population
"Execute Step 2"   # Architecture documentation (manual / guided)
"Execute Step 3"   # Legacy rules migration (skip if no legacy agent)
"Execute Step 4"   # Knowledge base & task migration (skip if no legacy tasks)
"Execute Step 5"   # Stack-specific audits & skills customization
```

> ⚠️ **Important:** Never run more than one step at a time. Review each step's output and confirm before proceeding.

### Path Variants

| Scenario | Steps |
|----------|-------|
| **New project** (no legacy agent / no historic tasks) | 0 → 1 → 2 → 5 |
| **Existing project** (legacy agent or historic task archives) | 0 → 1 → 2 → 3 → 4 → 5 |

---

## 🔧 The 6-Step Setup Workflow

| Step | Name | Mode | Deliverable |
|:----:|------|:----:|-------------|
| **0** | Pre-flight Project Scan | Automated | `Ai/Architecture/Project_Scan_Report.md` |
| **1** | Base Workspace Initialization | Automated | Populated core `Ai/` files + placeholder replacement |
| **2** | Architecture Documentation | Manual / Guided | `Technical_Architecture.md`, `PRD.md`, `Visual_Identity.md` |
| **3** | Legacy Rules Migration | Interactive | `Ai/Tasks/migration/step3_rules_migration_report.md` |
| **4** | Knowledge Base & Task Migration | Batch Processing | `Ai/Archive_Legacy/`, `migration_queue.md`, migrated tasks |
| **5** | Stack-Specific Audits & Skills | Automated | Stack-specific skill + audit files |

**Stack-specific additions generated in Step 5:**

| Tech Stack | Suggested Skill | Suggested Audit |
|------------|-----------------|-----------------|
| Laravel | `Laravel_HMVC_Skill.md` | `HMVC_Architecture_Audit.md` |
| React / Next.js | `NextJS_Hooks_Skill.md` | `Hooks_Isolation_Audit.md` |
| Django | `Django_Patterns_Skill.md` | `Django_Views_Audit.md` |
| Flutter | `Flutter_Clean_Arch_Skill.md` | `Widget_Decomposition_Audit.md` |
| Go | `Go_Patterns_Skill.md` | `Go_Concurrency_Audit.md` |
| .NET | `DotNet_Patterns_Skill.md` | `DotNet_Architecture_Audit.md` |

---

## 🧭 Daily Usage

Once set up, daily work is driven by the **Context Router** and **Atomic Execution** cycle. You don't need to remember file paths — just talk to the agent.

### Starting a new task

```
"Add a password-reset feature to the auth module."
```

The agent will:
1. Check `Ai/ACTIVE_TASKS.md` for in-progress work.
2. Create a task file `Ai/Tasks/feature/YYYY-MM-DD_password_reset.md` using `Task_Template.md`.
3. Register it in `ACTIVE_TASKS.md`.
4. **Present the plan and wait** for your approval before writing any code.
5. Execute one sub-task at a time, marking `[ ]` → `[x]` and documenting changes in `## 3. Implementation Reality`.
6. On completion, ask you to confirm — only then does it move the task from `ACTIVE_TASKS.md` to `PROJECT_MAP.md`.

### Locating past work

```
"Where did we implement the billing module?"
```

The agent consults `PROJECT_MAP.md`, finds the relevant task file, and loads only that file.

### Running an audit

```
"Run the security audit."
```

The agent reads `Ai/Audits/Security_Audit_Prompt.md`, scans the codebase within the security domain, and produces a structured findings report (it never mutates code).

### Slash commands

| Command | Skill invoked |
|---------|---------------|
| `/clean-code` | `Ai/Skills/CleanCode_Skill.md` |
| `/security` | `Ai/Skills/Security_Skill.md` |
| `/performance` | `Ai/Skills/Performance_Skill.md` |
| `/code-review` | `Ai/Skills/Code_Review_Skill.md` |
| `/design` | `Ai/Skills/Designer_Skill.md` |

---

## 🏗️ How It Works

### The Context Router (decision tree)

For **every** request, the agent follows this exact sequence — the single most important behavioral contract:

```
REQUEST RECEIVED
      │
   trivial fix? ──YES──→ execute directly, load NO extra files. END.
      │ NO
      ▼
   read Ai/ACTIVE_TASKS.md ── related task? ──YES──→ continue its [ ] steps.
      │ NO
      ▼
   new work (not searching)? ──YES──→ ask user to clarify. DO NOT preload PROJECT_MAP.
      │ NO (searching)
      ▼
   read Ai/PROJECT_MAP.md → locate the relevant task/architecture file.
      │
      ▼
   load ONLY that 1 file. Hard cap: 2-3 files per request.
```

### The Atomic Execution cycle

```
1. CLARIFY  →  2. TASK FILE  →  3. REGISTER  →  4. PRESENT (wait)  →
5. EXECUTE (one sub-task)  →  6. DOCUMENT  →  7. VERIFY  →  8. STOP (ask before next)
```

Each task file uses a strict 3-section template:

```markdown
## 1. Objective
## 2. Atomic Execution Steps      ← [ ] becomes [x] as work progresses
## 3. Implementation Reality       ← updated to match actual code state
```

> The full decision trees, the 8-stage cycle, confidence thresholds, and the future-development guide live in **`AGENT_STRATEGY.md`**.

---

## 📦 Dynamic Placeholders

Templates use `{{TOKEN}}` placeholders auto-populated at Step 1. The complete contract (30+ tokens across 7 groups) is documented in `AGENT_BLUEPRINT.md` §7. Highlights:

| Group | Example tokens |
|-------|----------------|
| Identity & Stack | `{{PROJECT_NAME}}`, `{{TECH_STACK}}`, `{{BACKEND_FRAMEWORK}}` |
| Commands | `{{TEST_COMMAND}}`, `{{LOCAL_DEV_COMMAND}}` |
| API Contracts | `{{API_RESPONSE_ENVELOPE_EXAMPLE}}`, `{{PAGINATION_SCHEMA_EXAMPLE}}` |
| Security | `{{AUTH_MECHANISM_SPEC}}`, `{{TENANT_ISOLATION_SPEC}}` |
| Testing Scopes | `{{UNIT_TEST_SCOPE}}`, `{{E2E_TEST_SCOPE}}` |
| Deployment | `{{STAGING_DEPLOY_PROCESS}}` |
| Visual Identity | `{{COLOR_PRIMARY}}`, `{{FONT_FAMILY}}`, `{{LAYOUT_DIRECTION}}` |

> **Rule:** If a value cannot be auto-detected, the token is left in place and flagged for manual completion. The agent **never** invents a value.

---

## 🔌 Running Your Actual Project (dev/test/build)

This template governs **how** the agent works — it does not contain your application code. After setup, your project's own commands apply and are recorded in `Ai/Protocols/`:

| Command type | Where it's recorded | Typical examples (stack-dependent) |
|--------------|----------------------|------------------------------------|
| **Run dev server** | `Ai/Protocols/Deployment_Protocol.md` → `{{LOCAL_DEV_COMMAND}}` | `npm run dev`, `php artisan serve`, `python manage.py runserver`, `go run ./cmd` |
| **Run tests** | `Ai/Protocols/Testing_Standards.md` → `{{TEST_COMMAND}}` | `npm test`, `php artisan test`, `pytest`, `go test ./...` |
| **Type check / lint** | `Ai/Protocols/Testing_Standards.md` → `{{TYPE_CHECK_COMMAND}}` | `tsc --noEmit`, `phpstan analyse`, `mypy .` |

Because the template is stack-agnostic, the actual commands are **detected from your manifests** during Step 0 and **populated** during Step 1. Refer to your scanned `Ai/Architecture/Project_Scan_Report.md` for the exact commands applied to your project.

---

## 🛠️ Maintenance & Extending the Template

This template is designed to be **maintained and extended safely**. Two files are your compass:

- **`AGENT_BLUEPRINT.md`** — change *structure* here (directory layout, decisions, placeholder contract).
- **`AGENT_STRATEGY.md` §9** — change *behavior* here; includes a "where to make each kind of change" matrix and a backward-compatibility contract.

### Where to make each kind of change

| You want to... | Modify |
|----------------|--------|
| Change a behavioral rule | `Ai/Agent.md` + document rationale in `AGENT_STRATEGY.md` §5 |
| Add a universal engineering skill | `Ai/Skills/` + register in `Ai/Agent.md` §3C + `AGENT_STRATEGY.md` §7 |
| Add a stack-specific skill | `Ai/Skills/` + Step 5 table in `init-agent.md` |
| Add an audit type | `Ai/Audits/` + register in `Ai/README.md` |
| Change directory structure | `AGENT_BLUEPRINT.md` §4 + `Ai/README.md` tree |
| Add a new placeholder token | Template file + `AGENT_BLUEPRINT.md` §7 + `init-agent.md` Step 1 list |

### Backward-compatibility invariants

Preserve these when evolving the template (or bump a major version):
1. The Context Router decision-tree shape (max 2–3 files/request).
2. The 8-stage atomic cycle ordering (user gating intact).
3. The two-register model (`ACTIVE_TASKS.md` ↔ `PROJECT_MAP.md`).
4. Agnosticism of base files.
5. Resumability of the migration queue.

---

## 🤝 Contributing

Contributions are welcome! Because this project governs agent behavior, changes must be deliberate and traceable.

1. **Fork** the repository and create a feature branch:
   ```bash
   git checkout -b feat/your-improvement
   ```
   Follow the branch naming in `Ai/Protocols/Git_Workflow.md` (`feat/`, `fix/`, `refactor/`, `chore/`).
2. **Before changing structure or behavior**, consult `AGENT_BLUEPRINT.md` and `AGENT_STRATEGY.md` §9.
3. **Document your rationale** — add a row to the Design Decisions Log (`AGENT_BLUEPRINT.md` §6) and/or the Strategy Change Log (`AGENT_STRATEGY.md` §10).
4. **Commit atomically**, referencing the relevant governance file:
   ```text
   feat(scope): concise description of changes

   Detailed explanation of why the change was made.

   Ref: AGENT_BLUEPRINT.md §6
   ```
5. **Open a Pull Request** linking the motivation. Ensure no backward-compatibility invariant is broken.

> 💡 You can dogfood this template: use the `Ai/` workspace on this very repository to manage contributions to the template itself.

---

## ❓ FAQ

<details>
<summary><b>Does this depend on a specific AI model or IDE?</b></summary>

No. It's pure Markdown. Any AI agent that can read and write files (Claude, GPT, Cursor, Copilot Chat, Continue, Aider, etc.) can execute the protocols. There are no bash scripts, no plugins, and no runtime dependencies.
</details>

<details>
<summary><b>Do I have to use it with an existing project, or can I start fresh?</b></summary>

Both. For a new project, run Steps 0 → 1 → 2 → 5. For an existing project with a legacy agent or task archives, run the full 0 → 1 → 2 → 3 → 4 → 5 to migrate your existing knowledge.
</details>

<details>
<summary><b>What if the agent can't detect a value for a placeholder?</b></summary>

The token is left in place and flagged for manual completion in Step 2. The agent never invents values — that's a first-class rule (Design Decision #14).
</details>

<details>
<summary><b>Will this slow the agent down with too many files?</b></summary>

No — the opposite. The Context Router enforces a hard cap of 2–3 files per request, so the agent loads *less* context than it would on its own. Every task also ends with a mandatory Context Budget Report so you can detect over-loading.
</details>

<details>
<summary><b>Can I use this on a closed-source / private repo?</b></summary>

Yes. The template is just files. Nothing is transmitted anywhere — your AI agent reads the files locally. No telemetry, no external services.
</details>

---

## 📬 Contact & Support

**TailorAI** is developed and maintained by **Cybeasy**.

- 🌐 **TailorAI Website:** [https://tailorai.me/](https://tailorai.me/)
- 🏢 **Company Website:** [https://cybeasy.com/](https://cybeasy.com/)
- ✉️ **Email:** [info@cybeasy.com](mailto:info@cybeasy.com)
- 📞 **Phone / WhatsApp:** [+201030722286](tel:+201030722286)

---

## 📄 License

Released under the **MIT License**. Copyright (c) 2026 **Cybeasy**. See the `LICENSE` file for details.

You are free to copy, modify, and use this template in any project, commercial or otherwise.

---

<div align="center">

**[⬆ Back to top](#cybeasy-tailorai-devlead)**

Built to make AI-assisted development **disciplined, traceable, and stack-agnostic.**

</div>
