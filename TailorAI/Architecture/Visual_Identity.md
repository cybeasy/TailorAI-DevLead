# Visual Identity & Design System — {{PROJECT_NAME}}

> **Agent Directive:** Populate the values below automatically based on project inspection (CSS custom properties / design-token config / utility-framework config) or via manual configuration. If a value cannot be auto-detected, **leave the token in place and flag it for manual completion** in Step 2 — never invent a value.

## 1. Color Palette & CSS Tokens
| Token / Name | Hex / Value | Usage |
|--------------|-------------|-------|
| Primary | {{COLOR_PRIMARY}} | Dominant brand elements, primary CTAs, main text |
| Secondary | {{COLOR_SECONDARY}} | Interactive highlights, links, active states |
| Accent | {{COLOR_ACCENT}} | Success states, positive feedback |
| Danger | {{COLOR_DANGER}} | Errors, warnings, destructive actions |
| Background | {{COLOR_BG}} | Page body background |
| Surface / Card | {{COLOR_SURFACE}} | Container elements, modals, cards |

## 2. Typography
- **Font Family:** {{FONT_FAMILY}}
- **Heading Scale:** {{HEADING_SCALE}}
- **Body Scale:** {{BODY_SCALE}}
- **Direction:** {{LAYOUT_DIRECTION}} <!-- LTR / RTL / Multilingual -->

## 3. Spacing & Grid System
- **Grid Baseline:** {{GRID_BASELINE}}
- **Border Radius Scale:** {{BORDER_RADIUS_SCALE}}

## 4. UI Components Guidelines
- All presentation elements MUST use predefined design tokens / CSS variables specified in this project.
- Maintain contrast ratio compliance across text and interactive surfaces.
- Micro-interactions, hover states, and loading states MUST be defined for interactive components.
