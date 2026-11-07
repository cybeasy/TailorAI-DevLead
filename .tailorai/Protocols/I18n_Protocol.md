# Mandatory Internationalization Protocol (I18n_Protocol.md) 🌐

> **Location:** `.tailorai/Protocols/I18n_Protocol.md`  
> **Status:** MANDATORY & ENFORCED

---

## 1. Core Principles

1. **Zero Hardcoded Strings:** NEVER write raw text strings directly inside view templates or presentational components.
2. **Zero Binary Ternaries for Text:** Avoid binary ternaries for UI labels (e.g., `isRtl ? 'حفظ' : 'Save'`). All user-facing text MUST consume the project's translation function `t('section.key', 'Fallback')`.
3. **100% Locale Key Parity:** Every translation key MUST exist across ALL configured project locale dictionaries. When adding or updating a key in one locale, it must be synchronized across all target locales simultaneously.
4. **CSS Logical Properties for Bi-Directional Layouts (RTL/LTR):**
   - Use CSS logical properties instead of physical directions:
     - Use `margin-inline-start` / `margin-inline-end` (or `ms-*`, `me-*`, `ps-*`, `pe-*`) instead of `left` / `right`.
     - Use `start` / `end` alignments instead of `left` / `right`.
     - In Tailwind CSS: use `rtl:rotate-180` for directional navigation arrows.

---

## 2. Dynamic Translation Enforcement

- **Frontend Helper Example:**
  ```typescript
  import { useTranslation } from '{{I18N_HOOK_PATH}}';

  export function SubmitButton() {
    const { t } = useTranslation();
    return <button type="submit">{t('common.save', 'Save')}</button>;
  }
  ```

- **Backend / API Localization:**
  Validation error messages and API notification payloads must be localized using the application's localization handler based on the incoming `Accept-Language` header or user locale preference.

---

## 3. Pre-Commit Verification Gate

Before submitting a task for code review or archival:
1. Verify no raw strings exist in newly created view templates.
2. Verify all new translation keys are present in all target locale files (`{{LOCALES_LIST}}`).
3. Run static type/lint check: `{{TYPE_CHECK_COMMAND}}`.

