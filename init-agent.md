# init-agent.md — AI Agent Workspace Setup Protocol 🚀

> **Master Setup Protocol:** Use this document to initialize or upgrade the `.tailorai/` governance workspace in any new or existing software repository.  
> Contains 7 numbered steps (0 to 5, including Step 3B). Execute step-by-step: prompt the AI Agent with **"Read `init-agent.md` and execute Step X"**.

---

## How to Use

1. Clone or copy `TailorAI-DevLead` alongside or into your target project.
2. Open an AI Agent session in your target project root and state: **"Read `init-agent.md` and execute Step 0"**.
3. After reviewing each step's output, proceed by stating: **"Execute Step X"**.

### New Project (No Legacy Agent):
Run: **Step 0 → Step 1 → Step 2 (Manual Setup) → Step 5**

### Existing Project with Older TailorAI v1:
Run: **Step 0 → Step 3B (Upgrade to Enterprise OS v2) → Step 5**

### Existing Project (With Generic Legacy Agent / Historic Tasks):
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

2. **Inspect Directory Layout:** Scan top 2 levels of project hierarchy.

3. **Check for Legacy Agent Files:** Search for pre-existing agent files or folders:
   - Existing `.tailorai/` (Check if v1 with single `Agent.md` and no `HANDBOOK.md`), `TailorAI/`, `ai/`, `.ai/`, `Ai_old/`, `docs/agent/`, `AGENT.md`, `.cursorrules`, `CLAUDE.md`, `.windsurfrules`.

4. **Generate Report** in `.tailorai/Architecture/Project_Scan_Report.md`:
   ```markdown
   # Project Scan Report
   - **Scan Date:** [YYYY-MM-DD]
   - **Project Name:** [Detected from config]
   - **Tech Stack:**
     - Backend: [e.g. Laravel 11 / Django 5 / Express / Go]
     - Frontend: [e.g. Next.js 14 / Vue 3 / Flutter / None]
     - Database: [e.g. PostgreSQL / MySQL / SQLite]
     - Storage: [e.g. S3 / MinIO / Local]
   - **Locales & Languages:** [e.g. English / Arabic RTL]
   - **TailorAI Version Detected:** [None / Legacy v1 / Enterprise OS v2]
   ```

5. **Present Report** to user and confirm correctness before proceeding.

---

## Step 1: Base Workspace Initialization

### Objective:
Initialize core `.tailorai/` workspace files using detected project specifications from Step 0.

### Execution Instructions:
1. **Instantiate Workspace Directory:** If `./.tailorai/` does not exist in your target project root, copy the `.tailorai/` directory from `TailorAI-DevLead/.tailorai/` into `./.tailorai/`.
2. **Copy Utility Scripts:** Copy `scripts/build-explorer.js` to target project's `scripts/` folder.
3. **Inspect Project Manifests** to detect actual commands (e.g. `scripts` in `package.json` for test/dev commands, or `pytest`, `php artisan test`, `go test`, etc.).
4. **Populate Dynamic Placeholders:** Replace core tokens:
   - `{{PROJECT_NAME}}`, `{{TECH_STACK}}`, `{{DATABASE}}`
   - `{{TEST_COMMAND}}`, `{{E2E_TEST_COMMAND}}`, `{{LOCAL_DEV_COMMAND}}`, `{{TYPE_CHECK_COMMAND}}`, `{{LINT_COMMAND}}`
5. **Create / Update Workspace Files:**

| File / Folder | Action |
|---|---|
| `.tailorai/Agent.md` | Universal entry router and 10 Critical Engineering Invariants |
| `.tailorai/HANDBOOK.md` | Engineering Constitution & Fast-Track Dual-Track rules |
| `.tailorai/Engineering/` | Lead Developer, Code Reviewer, and Operational Runbooks |
| `.tailorai/QA/` | Dedicated QA Automation Lead, `DEFECTS_LOG.md`, and `TEST_PLAN.md` |
| `.tailorai/Protocols/*.md` | Universal engineering protocols (11 total) |
| `.tailorai/ACTIVE_TASKS.md` | In-progress task queue |
| `.tailorai/PROJECT_MAP.md` | Master index with `## Fast-Track History` |
| `.tailorai/README.md` | Directory map & Fast-Track overview |
| `scripts/build-explorer.js` | Offline documentation viewer generator |

6. **Generate Initial Explorer UI:**
   ```bash
   node scripts/build-explorer.js
   ```

---

## Step 2: Architecture Documentation (Manual / Guided)

### Objective:
Fill in architectural specifications using the helper questionnaire.

### Execution Instructions:
1. **Direct User** to review `.tailorai/Architecture/Architecture_Questions.md`.
2. **Explain** that answering these questions populates:
   - `Technical_Architecture.md`
   - `PRD.md`
   - `Visual_Identity.md`
3. **Offer AI Assistance:** Prompt the user if they wish the AI Agent to draft architecture docs based on provided answers.

---

## Step 3: Legacy Rules Migration (For Non-TailorAI Agents)

### Prerequisites:
- Generic legacy agent files detected during Step 0 (`.cursorrules`, `CLAUDE.md`, custom prompts).
- Skip if no legacy agent exists.

---

## Step 3B: Upgrade Legacy TailorAI v1 to Enterprise OS v2

### Prerequisites:
- Existing `.tailorai/` directory detected from TailorAI v1 (lacking `HANDBOOK.md` or `QA/`).

### Execution Instructions:
1. **Preserve Completed History:** Ensure existing `.tailorai/Tasks/` and `.tailorai/PROJECT_MAP.md` are backed up / preserved.
2. **Introduce New Core Layers:**
   - Add `.tailorai/HANDBOOK.md` (codifying Dual-Track Engine and 10 Critical Invariants).
   - Add `.tailorai/Engineering/` (`Lead_Developer.md`, `Code_Review.md`, and `Runbooks/`).
   - Add `.tailorai/QA/` (`Agent_Testing.md`, `DEFECTS_LOG.md`, `TEST_PLAN.md`).
   - Add new universal protocols (`I18n_Protocol.md`, `Theme_Protocol.md`, `Storage_Protocol.md`, `Environment_Variables_Protocol.md`, `Audit_Log_Protocol.md`, `WebSocket_Protocol.md`).
3. **Upgrade `.tailorai/Agent.md`:** Replace monolithic v1 `Agent.md` with the new lean Universal Router trampoline.
4. **Upgrade `.tailorai/PROJECT_MAP.md`:** Add the `## Fast-Track History` section and link new protocols while retaining existing completed task archives.
5. **Add Documentation Explorer Generator:** Copy `scripts/build-explorer.js` and execute it to generate `.tailorai/index.html`.
6. **Report Upgrade Summary** to user.

---

## Step 4: Knowledge Base & Task Migration (Batch Processing)

### Prerequisites:
- Historical task archives or legacy documentation present.
- Skip if no legacy task history exists.

---

## Step 5: Stack-Specific Audits & Skills Customization

### Objective:
Generate additional audit prompts and specialized skills matching the target project's tech stack.

### Execution Instructions:
1. Review `.tailorai/Architecture/Project_Scan_Report.md`.
2. Propose stack-specific skills (e.g. Next.js, Laravel, Go, Django) to user.
3. Install approved skills and update `.tailorai/PROJECT_MAP.md`.
