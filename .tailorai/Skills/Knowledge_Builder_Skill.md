# Skill: Legacy Knowledge Base Conversion Protocol (Knowledge_Builder_Skill.md)

## Purpose
This skill defines the autonomous protocol for reading a legacy agent directory or historical task archives, extracting semantic context, converting tasks to the new standardized format in `TailorAI/Tasks/`, and building the master index in `TailorAI/PROJECT_MAP.md`.

---

## Execution Directives & Protocol

### Step 1: Scan & Archive Backup
1. Ask the user for the path of the legacy agent/tasks folder if not already specified.
2. Copy the entire legacy folder into `TailorAI/Archive_Legacy/` so zero historic context is destroyed or lost.

### Step 2: Initialize Migration Queue
Create `TailorAI/Tasks/migration/migration_queue.md` listing all files discovered in `TailorAI/Archive_Legacy/`:

```markdown
# Legacy Migration Queue
- **Total Files Discovered:** X
- **Status:** In Progress

## Queue Checklist
- [ ] `TailorAI/Archive_Legacy/[file_1].md`
- [ ] `TailorAI/Archive_Legacy/[file_2].md`
```

### Step 3: Batch Processing Loop (2-3 Files Per Batch)
In each iteration:
1. **Read ONLY 2-3 uncompleted items** `[ ]` from `migration_queue.md`.
2. **Classify Content Type:**
   - **Task / Feature / Bugfix:** Extract task name, status (completed `[x]` vs in-progress `[ ]`), category, target files, objective, and implementation details. Create a new task file: `TailorAI/Tasks/[category]/YYYY-MM-DD_[task_slug].md` following `Task_Template.md`.
   - **Protocol / Guideline:** Extract rule and merge into the appropriate file in `TailorAI/Protocols/`.
   - **Architecture Document:** Extract system notes and append to `TailorAI/Architecture/Technical_Architecture.md` or `PRD.md`.
3. **Register in `PROJECT_MAP.md`:**
   - For completed tasks, add a structured entry under the appropriate category in `TailorAI/PROJECT_MAP.md`.
4. **Mark Progress:**
   - Change `[ ]` to `[x]` in `migration_queue.md`.
5. **Stop & Report:**
   - Report progress after each batch and prompt the user before starting the next batch.

### Step 4: Resume Capability
If execution is interrupted at any point, reopen `migration_queue.md`, locate the first remaining unchecked `[ ]` item, and resume batch processing cleanly.

### Step 5: Final Migration Report
Upon completing all items in the queue, generate a summary report in `TailorAI/Tasks/migration/migration_report.md` detailing total tasks migrated, categories created, and archived file references.
