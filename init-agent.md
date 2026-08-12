# init-agent.md — AI Agent Workspace Setup Protocol

> **Master Setup Protocol:** Use this document to initialize the `Ai/` governance workspace in any new or existing software repository.
> Contains 6 numbered steps (0 to 5). Execute step-by-step: prompt the AI Agent with **"Read `init-agent.md` and execute Step X"**.

---

## How to Use

1. Copy the `Ai/` directory and `init-agent.md` into your project root.
2. Open an AI Agent session and state: **"Read `init-agent.md` and execute Step 0"**.
3. After reviewing each step's output, proceed by stating: **"Execute Step X"**.

### New Project (No Legacy Agent):
Run: **Step 0 → Step 1 → Step 2 (Manual Setup) → Step 5**

### Existing Project (With Legacy Agent / Historic Tasks):
Run: **Step 0 → Step 1 → Step 2 (Manual Setup) → Step 3 → Step 4 → Step 5**

---

## Step 0: Pre-flight Project Scan

### Objective:
Inspect the project repository and generate an initial technical profile report.

### Execution Instructions:
1. **Inspect Root Configuration Files:**
   - `package.json` → Node.js / React / Next.js / Vue / etc.
   - `composer.json` → PHP / Laravel / Symfony
   - `requirements.txt` / `pyproject.toml` → Python / Django / Flask / FastAPI
   - `go.mod` → Go
   - `Cargo.toml` → Rust
   - `pubspec.yaml` → Flutter / Dart
   - `Gemfile` → Ruby / Rails
   - `*.csproj` / `*.sln` → .NET / C#
   - Any project manifest file

2. **Inspect Directory Layout:** Scan top 2 levels of project hierarchy.

3. **Check for Legacy Agent Files:** Search for pre-existing agent files or folders:
   - `Ai/`, `ai/`, `.ai/`, `Ai_old/`, `ai_old/`, `docs/agent/`, `AGENT.md`, `agent.md`, `.cursorrules`, `CLAUDE.md`, `.windsurfrules`, `AGENTS.md`, `.agents/`, `.gemini/`, `.claude/`, etc.

4. **Generate Report** in `Ai/Architecture/Project_Scan_Report.md`:

```markdown
# Project Scan Report
- **Scan Date:** [YYYY-MM-DD]
- **Project Name:** [Detected from config]
- **Tech Stack:**
  - Backend: [e.g. Laravel 11 / Django 5 / Express.js / Go]
  - Frontend: [e.g. Next.js 14 / Vue 3 / Flutter / None]
  - Database: [e.g. PostgreSQL / MySQL / MongoDB / Unspecified]
  - Storage: [e.g. S3 / R2 / Local / Unspecified]
- **Locales & Languages:** [e.g. English / Multilingual]
- **Directory Layout:**
  ```
  [High-level folder tree]
  ```
- **Legacy Agent Detected:** [Yes — Path: ... / No]
```

5. **Present Report** to user and confirm correctness before proceeding.

### Deliverable:
- `Ai/Architecture/Project_Scan_Report.md`

---

## Step 1: Base Workspace Initialization

### Objective:
Initialize core `Ai/` workspace files using detected project specifications from Step 0.

### Execution Instructions:
1. **Read** `Ai/Architecture/Project_Scan_Report.md` (from Step 0).
2. **Inspect Project Manifests** to detect actual commands (e.g. `scripts` in `package.json` for test/dev commands, or `pytest`, `php artisan test`, `go test`, etc.).
3. **Populate Dynamic Placeholders** across template files. The **complete token list** is documented in `AGENT_BLUEPRINT.md` §7 (Placeholder Contract). Replace every `{{TOKEN}}` you find during the scan. If a value cannot be auto-detected, **leave the token in place and flag it for manual completion** — never invent a value. Summary of tokens by group:

   **Identity & Stack:** `{{PROJECT_NAME}}`, `{{TECH_STACK}}`, `{{BACKEND_FRAMEWORK}}`, `{{FRONTEND_FRAMEWORK}}`, `{{DATABASE}}`
   **Commands:** `{{TEST_COMMAND}}`, `{{LOCAL_DEV_COMMAND}}`, `{{TYPE_CHECK_COMMAND}}`, `{{LINT_TYPECHECK_COMMAND}}`
   **API Contracts:** `{{API_RESPONSE_ENVELOPE_EXAMPLE}}`, `{{API_ERROR_ENVELOPE_EXAMPLE}}`, `{{HTTP_STATUS_CODES_SPEC}}`, `{{PAGINATION_SCHEMA_EXAMPLE}}`
   **Security:** `{{AUTH_MECHANISM_SPEC}}`, `{{AUTHORIZATION_SPEC}}`, `{{TENANT_ISOLATION_SPEC}}`, `{{VALIDATION_ENGINE_SPEC}}`, `{{FILE_UPLOAD_SECURITY_SPEC}}`, `{{ENCRYPTION_SPEC}}`, `{{RATE_LIMITING_SPEC}}`, `{{ANTI_BOT_SPEC}}`
   **Testing Scopes:** `{{UNIT_TEST_SCOPE}}`, `{{INTEGRATION_TEST_SCOPE}}`, `{{E2E_TEST_SCOPE}}`
   **Deployment:** `{{STAGING_DEPLOY_PROCESS}}`, `{{PRODUCTION_DEPLOY_PROCESS}}`
   **Visual Identity / Design Tokens (if detected, else defer to Step 2):** `{{COLOR_PRIMARY}}`, `{{COLOR_SECONDARY}}`, `{{COLOR_ACCENT}}`, `{{COLOR_DANGER}}`, `{{COLOR_BG}}`, `{{COLOR_SURFACE}}`, `{{FONT_FAMILY}}`, `{{HEADING_SCALE}}`, `{{BODY_SCALE}}`, `{{LAYOUT_DIRECTION}}`, `{{GRID_BASELINE}}`, `{{BORDER_RADIUS_SCALE}}`
4. **Create / Update** workspace files:

| File | Action |
|------|--------|
| `Ai/Agent.md` | Replace variables and confirm core engineering principles |
| `Ai/ACTIVE_TASKS.md` | Ready — Active tasks register |
| `Ai/PROJECT_MAP.md` | Replace variables and link detected files |
| `Ai/README.md` | Replace variables and format index |
| `Ai/Protocols/*.md` | Replace placeholders with detected commands/specs |
| `Ai/Architecture/Visual_Identity.md` | Populate tokens if detected, or defer to Step 2 |
| `Ai/Skills/*.md` | Base universal skills ready |
| `Ai/Audits/*.md` | Base universal audit prompts ready |
| `Ai/Brand/Brand_Guide_Template.md` | Replace variables |
| `Ai/Tasks/Task_Template.md` | Ready — Task file template |

5. **Report Summary** of created files and populated parameters.

### Deliverable:
- Initialized `Ai/` governance workspace.

---

## Step 2: Architecture Documentation (Manual / Guided)

### Objective:
Fill in architectural specifications using the helper questionnaire.

### Execution Instructions:
1. **Direct User** to review `Ai/Architecture/Architecture_Questions.md`.
2. **Explain** that answering these questions populates:
   - `Technical_Architecture.md`
   - `PRD.md`
   - `Visual_Identity.md`
3. **Offer AI Assistance:** Prompt the user if they wish the AI Agent to draft architecture docs based on provided answers.

---

## Step 3: Legacy Rules Migration (Interactive)

### Prerequisites:
- Legacy agent files detected during Step 0.
- Skip if no legacy agent exists.

### Execution Instructions:
1. **Ask User:** Confirm the path of legacy agent instructions.
2. **Read Legacy Rules File** (up to 2 files max).
3. **Extract & Classify Rules:**
   - Code quality rules
   - Security rules
   - Architectural rules
   - Execution workflows
4. **Compare against new `Ai/Agent.md`:**

   | Condition | Action |
   |-----------|--------|
   | Legacy rule missing in new Agent.md | ✅ Append rule to appropriate section |
   | Duplicate rule with identical meaning | ⏭️ Skip (already covered) |
   | Conflicting rule | ⚠️ **Present conflict to user for resolution** |

5. **Generate Migration Report** in `Ai/Tasks/migration/step3_rules_migration_report.md`.

---

## Step 4: Knowledge Base & Task Migration (Batch Processing)

### Prerequisites:
- Historical task archives or legacy documentation present.
- Skip if no legacy task history exists.

### Execution Instructions:
> Follow protocol documented in `Ai/Skills/Knowledge_Builder_Skill.md`.

1. **Copy Legacy Directory** to `Ai/Archive_Legacy/`.
2. **Create Queue** in `Ai/Tasks/migration/migration_queue.md`.
3. **Batch Process (2-3 files per iteration):**
   - Read uncompleted items `[ ]`.
   - Convert tasks to standard format in `Ai/Tasks/[category]/`.
   - Register completed tasks in `Ai/PROJECT_MAP.md`.
   - Mark item `[x]` in `migration_queue.md`.
4. **Resume Capability:** If interrupted, resume cleanly from the first remaining unchecked item.

---

## Step 5: Stack-Specific Audits & Skills Customization

### Objective:
Generate additional audit prompts and specialized skills matching the target project's tech stack.

### Execution Instructions:
1. **Read** `Ai/Architecture/Project_Scan_Report.md` (Step 0) and `Technical_Architecture.md` (Step 2).
2. **Determine Stack-Specific Additions:**

   | Tech Stack | Suggested Skills | Suggested Audits |
   |------------|------------------|------------------|
   | Laravel | `Laravel_HMVC_Skill.md` | `HMVC_Architecture_Audit.md` |
   | React / Next.js | `NextJS_Hooks_Skill.md` | `Hooks_Isolation_Audit.md` |
   | Django | `Django_Patterns_Skill.md` | `Django_Views_Audit.md` |
   | Flutter | `Flutter_Clean_Arch_Skill.md` | `Widget_Decomposition_Audit.md` |
   | Go | `Go_Patterns_Skill.md` | `Go_Concurrency_Audit.md` |
   | .NET | `DotNet_Patterns_Skill.md` | `DotNet_Architecture_Audit.md` |

3. **Present Recommendations** to user for approval.
4. **Create Approved Files Only**.
5. **Update `Ai/PROJECT_MAP.md`**.

---

## General Rules
> [!IMPORTANT]
> - Never execute more than one step at a time without user confirmation.
> - Never make assumptions on unclear requirements — ask first.
> - Report progress summary after completing each step.
