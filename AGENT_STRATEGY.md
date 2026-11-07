# AGENT_STRATEGY.md — Operational Strategy & Behavior Reference 🎯

> **Master Behavior Reference:** This document defines *how* the AI Agent behaves, reasons, and makes decisions while operating inside a repository governed by the `.tailorai/` workspace.  
> It is the behavioral counterpart to `AGENT_BLUEPRINT.md` (which defines *what* the system is and *why* it is built that way).  
> **Audience:** Any developer or AI maintainer extending or refining the agent in the future.  
> Version: 2.0.0 (Enterprise OS) | Last Updated: 2026-11-07

---

## 1. Purpose & Scope Split

This file captures the **operational strategy** of the AI Agent — the stable principles that govern its behavior across every task, stack, and project.

| File | Scope | Audience |
|---|---|---|
| `AGENT_BLUEPRINT.md` | **What** the system is + **Why** it was designed that way (topology, decisions, changelog) | Developers & Maintainers |
| `AGENT_STRATEGY.md` | **How** the agent behaves + **When** it takes each action (runtime strategy, decision trees) | Developers & Maintainers |
| `.tailorai/Agent.md` | Universal runtime entry router & critical invariants | AI Agents across Cursor, Windsurf, Claude Code, Antigravity |
| `.tailorai/HANDBOOK.md` | Engineering Operating Constitution (Dual-Track rules & priority tiers) | AI Agents & Human Engineers |

---

## 2. Core Strategic Pillars

The agent's entire behavior rests on six non-negotiable pillars:

| # | Pillar | Strategic Intent | Enforced In |
|---|---|---|---|
| 1 | **Context Isolation** | Load only 2–3 task-relevant files per request to protect token budget and reasoning quality. | `Agent.md` §4 |
| 2 | **Dual-Track Task Routing** | Route micro-changes (≤ 3 files) to Fast-Track; route architectural changes to Full Protocol. | `HANDBOOK.md` §2 |
| 3 | **Atomic Execution** | One sub-task at a time, gated by explicit user approval during full protocol tasks. | `HANDBOOK.md` & `Agent.md` |
| 4 | **Decoupled Quality Lifecycle** | Author tests with status `⬜`; never block velocity with auto-test runs. Tests execute on demand. | `QA/Agent_Testing.md` |
| 5 | **Persistent Knowledge Base** | `PROJECT_MAP.md` is cumulative memory; tracks both full tasks and Fast-Track history. | `PROJECT_MAP.md` |
| 6 | **Stack Agnosticism** | Base templates are universal. Stack-specific rules layer dynamically during initialization. | `AGENT_BLUEPRINT.md` |

---

## 3. Dual-Track Execution Decision Tree

For **every** incoming engineering request, the agent evaluates this routing tree:

```
REQUEST RECEIVED
      │
      ▼
[1] Is the modification ≤ 3 files AND free of migrations, auth, or breaking API changes?
      │
      ├─► YES: 🚀 FAST-TRACK EXECUTION
      │   1. Apply surgical fix directly to target files.
      │   2. Run syntax/type check (e.g. tsc --noEmit, php -l).
      │   3. Append single-line entry in PROJECT_MAP.md under ## Fast-Track History.
      │   4. Present diff summary to user (< 1 min execution). END.
      │
      └─► NO: 🛡️ FULL PROTOCOL EXECUTION
          1. Check .tailorai/ACTIVE_TASKS.md for related work.
          2. Create task file in .tailorai/Tasks/[category]/YYYY-MM-DD_[slug].md.
          3. Register in ACTIVE_TASKS.md.
          4. Execute atomically step-by-step with user confirmation.
          5. Write corresponding test files with status ⬜ in TEST_PLAN.md.
          6. Archive completed task in PROJECT_MAP.md. END.
```

---

## 4. Decoupled QA & Testing Strategy

To eliminate test execution latency:
1. **Feature Implementation (Lead Developer - Agent 1):**
   - Implements code changes.
   - Authors matching unit, integration, or live scenario test files.
   - Marks tests in `TEST_PLAN.md` with status `⬜` (Unverified / Pending Run).
   - **NEVER triggers long-running test suites automatically**.
2. **On-Demand Test Execution (QA Lead - Agent 3):**
   - Triggered when the user invokes `/qa`, `run tests`, or manual terminal commands.
   - Executes suites, runs live headed browser scenarios where applicable.
   - Logs failures in `.tailorai/QA/DEFECTS_LOG.md`.
   - Dispatches minor fixes back to Agent 1 via Fast-Track, or major bugs via `Tasks/bugfix/`.

---

## 5. Role Dispatching Strategy

The agent dynamically adapts its persona based on command intent:
- **Implementation & Bug Fixes:** Assume **Lead Developer (Agent 1)** (`Engineering/Lead_Developer.md`).
- **Code Reviews & Diff Auditing:** Assume **Code Reviewer (Agent 2)** (`Engineering/Code_Review.md`).
- **Testing & Defect Verification:** Assume **QA Automation Lead (Agent 3)** (`QA/Agent_Testing.md`).
- **Offline Documentation Generation:** Invoke `node scripts/build-explorer.js`.
