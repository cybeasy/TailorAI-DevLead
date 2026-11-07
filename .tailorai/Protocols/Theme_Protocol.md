# Design Tokens & Theme Protocol (Theme_Protocol.md) 🎨🌓

> **Location:** `.tailorai/Protocols/Theme_Protocol.md`  
> **Status:** MANDATORY & ENFORCED

---

## 1. Core Principles

1. **Design Tokens First:** All components must consume defined design tokens, theme CSS custom properties (`var(--primary)`, `var(--bg-card)`), or pre-configured utility classes. Never hardcode arbitrary hex, RGB, or pixel values directly in component files.
2. **Theme Parity:** Both Light Mode and Dark Mode must be supported with proper contrast ratios conforming to WCAG AA standards.
3. **Persistent Preference:** Theme selection must persist across sessions via client storage (`localStorage` / cookies) with graceful fallback to system preference (`prefers-color-scheme`).

---

## 2. Token Architecture (CSS Variables)

Define theme variables in the root stylesheet (`globals.css` / `variables.scss`):

```css
:root {
  --bg-main: #ffffff;
  --bg-surface: #f8fafc;
  --bg-card: #ffffff;
  --border-main: #e2e8f0;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --radius-card: 0.75rem;
}

[data-theme="dark"], html.dark {
  --bg-main: #090d16;
  --bg-surface: #0f172a;
  --bg-card: #1e293b;
  --border-main: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --primary: #3b82f6;
  --primary-hover: #1d4ed8;
}
```

---

## 3. Component Enforcement

- **Cards / Containers:** Use theme container classes (e.g. `q-card` or `bg-[var(--bg-card)] border border-[var(--border-main)]`).
- **Typography:** Use semantic color tokens (`text-[var(--text-main)]` and `text-[var(--text-muted)]`).
- **Interactive Elements:** Buttons and inputs must define consistent hover, focus-visible, and disabled states matching theme tokens.

