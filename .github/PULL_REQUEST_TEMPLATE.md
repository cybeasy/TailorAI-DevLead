<!-- Thank you for contributing to the AI Agent Workspace Template! -->
<!-- Please fill in every section below. Incomplete PRs may be closed. -->

## 📌 Summary

<!-- One or two sentences describing what this PR does and why. -->

## 🔗 Related Issue

<!-- Link the issue this PR closes (use "Closes #N" / "Fixes #N" / "Resolves #N"). If none, explain. -->

Closes #

## 🏗️ Type of Change

<!-- Check all that apply. -->
- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature / new skill or audit (non-breaking)
- [ ] ♻️ Refactor / restructure (no behavioral change)
- [ ] 💥 Breaking change (would require users to change their workflow — see backward-compatibility section below)
- [ ] 📝 Documentation / governance file update only
- [ ] 🔧 Chore (typo, link fix, formatting)

## 📁 Files Changed

<!-- List the key files modified. Reference the maintenance matrix in AGENT_STRATEGY.md §9. -->
-
-
-

## 🔍 What & Why

<!-- Explain the rationale. This becomes a Design Decision / Strategy entry — be explicit. -->

**Decision (for AGENT_BLUEPRINT.md §6 or AGENT_STRATEGY.md §10):**

| Decision | Choice | Rationale |
|----------|--------|-----------|
| <!-- # --> | <!-- choice --> | <!-- rationale --> |

## ✅ Backward-Compatibility Check

<!-- This PR must NOT break any of the 5 invariants. Confirm each: -->
- [ ] **Context cap** — the agent still loads ≤ 2-3 files per request.
- [ ] **8-stage atomic cycle** — user gating at each step is intact.
- [ ] **Two-register model** — `ACTIVE_TASKS.md` ↔ `PROJECT_MAP.md` separation preserved.
- [ ] **Stack agnosticism** — base files (`Agent.md`, Skills, Audits, Protocols) remain stack-neutral.
- [ ] **Resumable migration** — `migration_queue.md` checkbox/resume design intact.

> If any box above is unchecked, this is a **breaking change**: bump a major version note in the changelog and call it out explicitly in the Summary.

## 🧪 How Was This Tested?

<!-- Describe how you verified the change works and doesn't regress behavior. -->
- [ ] Dry-run: executed the relevant step with an AI agent on a sample project.
- [ ] Read-through: confirmed no internal cross-reference is broken.
- [ ] Changelog row added to `AGENT_BLUEPRINT.md` §9 and/or `AGENT_STRATEGY.md` §10.

## 📝 Checklist Before Merge

- [ ] Branch follows `Ai/Protocols/Git_Workflow.md` naming (`feat/`, `fix/`, `refactor/`, `chore/`).
- [ ] Commit messages are atomic and reference the governance file in the body (`Ref: AGENT_BLUEPRINT.md §6`).
- [ ] No hardcoded stack-specific values introduced in agnostic base files.
- [ ] Any new `{{PLACEHOLDER}}` token is registered in `AGENT_BLUEPRINT.md` §7 **and** `init-agent.md` Step 1.
- [ ] `README.md` updated if the change affects public-facing behavior or structure.

---

<!--
Maintainer review focus:
1. Does this preserve the 5 pillars (AGENT_STRATEGY.md §2)?
2. Is the Design Decision rationale clear enough to audit later?
3. Did the PR touch base files with stack-specific content? (Reject if so — move to Step 5 layer.)
-->
