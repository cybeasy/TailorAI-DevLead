---
name: ✨ Feature / Enhancement Request
about: Suggest a new skill, audit, protocol, or behavioral improvement for the workspace
title: "[FEATURE] "
labels: ["enhancement", "triage"]
assignees: []
---

## 💡 Summary

<!-- A clear and concise description of the feature or enhancement you are proposing. -->

## 🎯 Problem / Motivation

<!-- What problem does this solve? Why is it needed? Link any related issue if applicable. -->

## 🏗️ Proposed Solution

<!-- Describe the approach you have in mind. Be as specific as possible about which file(s) would change. -->

## 📁 Affed Files / Areas

<!-- Check the maintenance matrix in AGENT_STRATEGY.md §9 to know where the change belongs. -->
- [ ] `Ai/Agent.md` (behavioral rule)
- [ ] `Ai/Skills/` (new skill)
- [ ] `Ai/Audits/` (new audit)
- [ ] `Ai/Protocols/` (protocol change)
- [ ] `init-agent.md` (setup workflow change)
- [ ] `AGENT_BLUEPRINT.md` (structure / placeholder contract)
- [ ] `AGENT_STRATEGY.md` (operational behavior)
- [ ] Other: <!-- specify -->

## 🔀 Alternatives Considered

<!-- What other approaches did you consider, and why did you reject them? -->

## 📋 Design Decision Impact

<!-- If accepted, this would add a row to the Design Decisions Log (AGENT_BLUEPRINT.md §6) or the Strategy Change Log (AGENT_STRATEGY.md §10). Briefly state the proposed decision + rationale. -->

| Decision | Choice | Rationale |
|----------|--------|-----------|
| <!-- e.g. #18 --> | <!-- choice --> | <!-- rationale --> |

## ✅ Checklist

- [ ] I have searched existing issues/discussions to avoid duplicates.
- [ ] I have read `AGENT_STRATEGY.md` §9 (Future Development Guide) and the backward-compatibility invariants.
- [ ] This change does **not** break any of the 5 invariants (Context cap, 8-stage cycle, two-register model, agnosticism, resumable migration).
