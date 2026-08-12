# AGENT_STRATEGY.md — Operational Strategy & Behavior Reference

> **Master Behavior Reference:** This document defines *how* the AI Agent behaves, reasons, and makes decisions while operating inside a repository governed by the `Ai/` workspace.
> It is the behavioral counterpart to `AGENT_BLUEPRINT.md` (which defines *what* the system is and *why* it is built that way).
>
> **Audience:** Any developer or AI maintainer extending or refining the agent in the future. Read this before modifying any behavioral rule in `Ai/Agent.md` or any Skill/Protocol file.
> Last Updated: 2026-08-12

---

## 1. Purpose of This Document

This file captures the **operational strategy** of the AI Agent — the stable principles that govern its behavior across every task, stack, and project. It exists so that future development of the agent is:

- **Predictable:** Behavioral changes are made deliberately, not by accident.
- **Traceable:** Every rule traces back to a documented rationale.
- **Isolated:** Behavior (`AGENT_STRATEGY.md`) is separated from architecture (`AGENT_BLUEPRINT.md`), so you can evolve either without destabilizing the other.

> [!IMPORTANT]
> **Scope split:**
> - `AGENT_BLUEPRINT.md` → **What** the system is + **Why** it was designed that way (structure, decisions, changelog).
> - `AGENT_STRATEGY.md` → **How** the agent behaves + **When** it takes each action (runtime strategy, decision trees).
> - `Ai/Agent.md` → The agent-facing **constitution** (the rules the agent reads at runtime). This strategy file is the human-facing explanation *behind* that constitution.

---

## 2. Core Strategic Pillars

The agent's entire behavior rests on five non-negotiable pillars. Any future change must preserve all five.

| # | Pillar | Strategic Intent | Enforced In |
|---|-------|------------------|-------------|
| 1 | **Context Isolation** | Load only 2-3 task-relevant files per request to protect token budget and reasoning quality. | `Agent.md` §2 (Context Router) |
| 2 | **Atomic Execution** | One sub-task at a time, gated by explicit user approval. Never batch without checkpoints. | `Agent.md` §3B |
| 3 | **Knowledge Persistence** | `PROJECT_MAP.md` is cumulative memory; tasks are archived with full history. | `PROJECT_MAP.md` |
| 4 | **Documentation Before Code** | A task file must exist before any non-trivial code change. No task file = no code. | `Agent.md` §3A |
| 5 | **Stack Agnosticism** | Universal principles only. Stack-specific rules are layered in Step 5, never baked into base files. | `AGENT_BLUEPRINT.md` Decision #6 |

---

## 3. Context Management Strategy

### 3.1 The Context Router Decision Tree

For **every** incoming request, the agent follows this exact sequence. This is the single most important behavioral contract.

```
REQUEST RECEIVED
      │
      ▼
[1] Is this a trivial fix? (typo, CSS color, 1-line tweak)
      │ YES → execute directly, load NO extra files. END.
      │ NO  ↓
      ▼
[2] Open Ai/ACTIVE_TASKS.md — is there a related in-progress task?
      │ YES → read that task file, continue its remaining [ ] steps.
      │ NO  ↓
      ▼
[3] Is the user asking for NEW work (not searching past work)?
      │ YES → do NOT read PROJECT_MAP.md. Ask the user to clarify scope.
      │ NO  (searching past work / locating context) ↓
      ▼
[4] Read Ai/PROJECT_MAP.md → locate the relevant task file or architecture doc.
      │
      ▼
[5] Load ONLY that 1 task file (or 1 architecture/protocol doc).
      │
      ▼
[6] Still need more? Load at most 1 more file. Hard cap: 2-3 files/request.
```

> [!DANGER]
> **Hard rule:** Never exceed 3 context files per request. If you find yourself wanting more, you are loading too much — narrow the task scope or ask the user to split the request.

### 3.2 Proactive vs. Reactive Loading

| Scenario | Behavior |
|----------|----------|
| User asks for new feature | **Reactive only** — read `ACTIVE_TASKS.md`, then ask. Do NOT preload `PROJECT_MAP.md`. |
| User references "the auth work we did" | **Reactive search** — consult `PROJECT_MAP.md` to locate the past task, then read only that file. |
| User asks a simple question | **Minimal** — answer from `Agent.md` principles or ask. Load files only if the answer depends on a specific doc. |
| User asks for an audit/review | **Targeted sweep** — this is the one exception where the agent reads multiple files, but only within one domain (e.g. security files only). |

### 3.3 Context Budget Reporting

After completing every task, the agent appends a mandatory `## Context Budget Report` showing files read, total context size, and an efficiency rating. This is not decorative — it creates a feedback loop so the user can detect when the agent is over-loading context.

---

## 4. Task Execution Lifecycle Strategy

### 4.1 The 8-Stage Atomic Cycle

Every non-trivial task moves through these stages. No stage is skipped.

```
┌─────────────────────────────────────────────────────────────┐
│ 1. CLARIFY     → If unclear, ambiguous, or multi-approach,  │
│                  ASK the user first. Never assume.           │
├─────────────────────────────────────────────────────────────┤
│ 2. TASK FILE   → Create Ai/Tasks/[cat]/YYYY-MM-DD_slug.md   │
│                  using Task_Template.md. Self-contained.     │
├─────────────────────────────────────────────────────────────┤
│ 3. REGISTER    → Add the new task file to ACTIVE_TASKS.md.   │
├─────────────────────────────────────────────────────────────┤
│ 4. PRESENT     → Show the user the plan. WAIT for approval.  │
│                  (No code written yet.)                      │
├─────────────────────────────────────────────────────────────┤
│ 5. EXECUTE     → Run ONE sub-task only. Mark [ ] → [x].      │
├─────────────────────────────────────────────────────────────┤
│ 6. DOCUMENT    → Update §3 "Implementation Reality" of the   │
│                  task file with actual changes made.         │
├─────────────────────────────────────────────────────────────┤
│ 7. VERIFY      → Run test/typecheck/lint commands. Confirm  │
│                  zero errors before proceeding.              │
├─────────────────────────────────────────────────────────────┤
│ 8. STOP        → Report what was done, then ASK the user     │
│                  before starting the next sub-task.          │
└─────────────────────────────────────────────────────────────┘
        On final completion → user confirms →
        remove from ACTIVE_TASKS.md, add [x] to PROJECT_MAP.md.
```

### 4.2 Category Matching Heuristic

When creating a task file, the agent picks a category from `Ai/Tasks/[category]/`:
1. Check existing categories first (`feature`, `bugfix`, `refactor`, `backend`, `frontend`, `security`, `migration`).
2. If an existing category fits, use it.
3. Only create a **new** category directory if no existing one is semantically appropriate.

### 4.3 The "Documentation Before Code" Invariant

> [!WARNING]
> The agent must **never** write non-trivial code without a task file existing first. The only exemption is "truly simple fixes" (typos, color changes, trivial CSS). This invariant is what makes the `Ai/` workspace an audit trail rather than a decoration.

---

## 5. Decision-Making Strategy

### 5.1 The "Ask, Don't Assume" Protocol

The agent defaults to asking whenever a decision has **any** of these traits:
- Multiple valid approaches exist.
- The request is ambiguous about scope.
- The change is architectural (touches `Architecture/` or `Protocols/`).
- A legacy rule conflicts with a new rule (Step 3 migration).
- Stack-specific behavior is undefined.

| Signal | Agent Action |
|--------|--------------|
| Clear request, single approach | Execute directly (with task file). |
| Clear request, 2+ approaches | Present options, ask user to choose. |
| Unclear request | Ask clarifying questions before any work. |
| Rule conflict detected | Pause, present conflict, never auto-resolve. |

### 5.2 Confidence Thresholds

- **High confidence** (clear spec, mechanical change) → execute and report.
- **Medium confidence** (likely correct but design-choice involved) → present plan, wait for approval.
- **Low confidence** (ambiguous, architectural, or cross-cutting) → ask first, no assumptions.

---

## 6. Knowledge Base Maintenance Strategy

### 6.1 The Two Registers

| Register | Role | Lifecycle |
|----------|------|-----------|
| `ACTIVE_TASKS.md` | Tasks currently being worked on. | Entry added on task creation, removed on user-confirmed completion. |
| `PROJECT_MAP.md` | Cumulative archive of completed tasks + master index. | Entry added on completion, **never deleted** (history preservation). |

### 6.2 Sync Invariants

1. A task exists in **exactly one** of the two registers at any time — never both, never neither.
2. Moving a task from Active → Map requires **explicit user confirmation** (never auto-archive).
3. When auditing, the `## 3. Implementation Reality` section of each task file is updated to match the **current** code state (docs track code, not the reverse).

### 6.3 Legacy Migration Strategy (Step 3 + Step 4)

The agent treats legacy knowledge as precious and never destroys it:
- **Step 3 (Rules):** Legacy rules are compared against `Agent.md`. Missing rules are appended; duplicates are skipped; conflicts are escalated to the user. A migration report is generated.
- **Step 4 (Tasks):** The legacy directory is copied verbatim to `Ai/Archive_Legacy/` before any conversion. A `migration_queue.md` tracks progress so the workflow is **resumable** — interruption is safe.

> [!CAUTION]
> **Resume design:** The migration queue uses `[ ]` / `[x]` checkboxes precisely so a crashed or interrupted session can resume from the first remaining `[ ]` without re-doing work or losing state. This resumability is a first-class requirement, not an afterthought.

---

## 7. Skills & Audits Strategy

### 7.1 Skills (Reference Layer)

Skills in `Ai/Skills/` are **reference knowledge** the agent consults on demand. They are not auto-loaded — they are pulled only when a task touches their domain.

| Skill | When Consulted |
|-------|----------------|
| `CleanCode_Skill.md` | Any code-writing or refactoring task. |
| `Security_Skill.md` | Tasks touching auth, input handling, or data access. |
| `Performance_Skill.md` | Tasks with query, loading, or caching implications. |
| `Code_Review_Skill.md` | When reviewing a PR or completed task. |
| `Designer_Skill.md` | UI/UX work — tokens, responsiveness, a11y. |
| `Knowledge_Builder_Skill.md` | Step 4 legacy migration only. Runtime/batch protocol. |

### 7.2 Audits (Verification Layer)

Audits in `Ai/Audits/` are **read-only diagnostic prompts**. They never mutate code. Their contract:
- Read the relevant governance + skill files.
- Scan the codebase within one domain.
- Produce a structured report (violations, severity, remediation).
- Output **findings**, not fixes.

### 7.3 Slash Command Mapping

For ergonomic invocation, the agent recognizes slash commands that resolve to skill files:

| Command | Resolves To |
|---------|-------------|
| `/clean-code` | `Skills/CleanCode_Skill.md` |
| `/security` | `Skills/Security_Skill.md` |
| `/performance` | `Skills/Performance_Skill.md` |
| `/code-review` | `Skills/Code_Review_Skill.md` |
| `/design` | `Skills/Designer_Skill.md` |

> **Note on `Knowledge_Builder_Skill.md`:** It is intentionally **not** exposed as a slash command. It is a batch runtime protocol triggered only by Step 4 of `init-agent.md`, not an interactive reference. If a future maintainer wants to expose it, that is a deliberate behavioral change — document it in the changelog of `AGENT_BLUEPRINT.md`.

---

## 8. Stack Agnosticism Strategy

### 8.1 The Agnosticism Boundary

Base files (`Agent.md`, all Skills, all Audits, all Protocols) contain **only** stack-neutral principles. They must work identically on Laravel, Django, React, Go, Flutter, .NET, etc.

Stack-specific rules are **layered on top** in Step 5 (e.g. `Laravel_HMVC_Skill.md`, `NextJS_Hooks_Skill.md`) and are additions, never modifications to base files.

### 8.2 The Placeholder Strategy

To keep base files agnostic but still project-aware, templates use `{{PLACEHOLDER}}` tokens filled at Step 1. The full placeholder contract is documented in `AGENT_BLUEPRINT.md` §7. The behavioral rule is:

> The agent replaces **every** `{{...}}` token it finds during Step 1. If a value cannot be detected, the agent leaves the token in place and flags it for manual completion rather than inventing a value.

---

## 9. Future Development Guide

This section is the maintainer's compass. When extending the agent, follow these rules:

### 9.1 Where to Make Each Kind of Change

| You want to... | Modify this | Do NOT touch |
|-----------------|-------------|--------------|
| Change a behavioral rule (how the agent acts) | `Ai/Agent.md` + document rationale here in §5 | Base architecture |
| Add a universal engineering skill | `Ai/Skills/` (new file) + register in `Agent.md` §C + here §7 | `Agent.md` core rules |
| Add a stack-specific skill | `Ai/Skills/` (new file) + Step 5 table in `init-agent.md` | Base skills |
| Add an audit type | `Ai/Audits/` (new file) + register in `README.md` | Skills |
| Change directory structure | `AGENT_BLUEPRINT.md` §4 + `README.md` tree + this file's references | Existing file paths |
| Evolve the setup workflow | `init-agent.md` + `AGENT_BLUEPRINT.md` §3 | `Agent.md` runtime rules |
| Add a new placeholder token | Template file + register in `AGENT_BLUEPRINT.md` §7 + `init-agent.md` Step 1 list | — |

### 9.2 Backward-Compatibility Contract

When evolving the agent, preserve these invariants or bump a major version:
1. The Context Router (§3.1) decision tree shape.
2. The 8-stage atomic cycle (§4.1) ordering.
3. The two-register model (`ACTIVE_TASKS.md` ↔ `PROJECT_MAP.md`).
4. Agnosticism of base files (§8.1).
5. Resumability of the migration queue (§6.3).

### 9.3 Testing a Behavioral Change

Before merging any change to `Agent.md` or a Skill, verify:
- [ ] The change does not violate any of the 5 pillars (§2).
- [ ] The change does not raise the context-file cap above 3.
- [ ] The change preserves atomic execution (user gating intact).
- [ ] The change is documented in `AGENT_BLUEPRINT.md` §6 changelog.
- [ ] If a slash command was added/removed, §7.3 here is updated.

---

## 10. Strategy Change Log

| Date | Change |
|------|--------|
| 2026-08-12 | Initial extraction of operational strategy from `PLAN.md` into `AGENT_STRATEGY.md`. |
| 2026-08-12 | Documented Context Router decision tree (§3.1), 8-stage atomic cycle (§4.1), and slash-command mapping (§7.3). |
| 2026-08-12 | Added Future Development Guide (§9) with change-location matrix and backward-compatibility contract. |
