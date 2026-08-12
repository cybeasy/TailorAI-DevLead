# Testing Standards & Quality Assurance — {{PROJECT_NAME}}

> **Agent Directive:** Populate testing framework commands and scopes below based on detected project configuration.

## 1. Test Suite Hierarchy
- **Unit Tests:** {{UNIT_TEST_SCOPE}}
- **Integration Tests:** {{INTEGRATION_TEST_SCOPE}}
- **E2E / UI Tests:** {{E2E_TEST_SCOPE}}

## 2. Test Coverage Mandates
- Business domain logic and critical security paths MUST be fully covered by automated tests.
- API endpoints MUST test success paths, unauthorized access, and invalid input validation errors.

## 3. Execution Commands
- **Run Tests:** `{{TEST_COMMAND}}`
- **Type Checking:** `{{TYPE_CHECK_COMMAND}}`

## 4. Test Verification Workflow
Before marking any task as completed:
1. Execute `{{TEST_COMMAND}}` and verify zero failures.
2. Confirm zero regressions in existing test suite.
3. Add new test cases covering any added functionality or bug fix.
