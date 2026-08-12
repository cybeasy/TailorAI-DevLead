# Architecture Questions — Helper Guide

> **Helper Document:** Use the questions below to gather information for populating:
> - `Technical_Architecture.md`
> - `PRD.md`
> - `Visual_Identity.md`
>
> You can answer these manually or prompt the AI Agent to help construct the architecture files based on your answers.

---

## 1. Technical Architecture

### 1.1 Tech Stack
- What is the Backend Framework? (Laravel, Django, Express.js, Go, .NET, Rails, etc.)
- What is the Frontend Framework? (Next.js, Vue, React, Flutter, Angular, None, etc.)
- What is the Database? (PostgreSQL, MySQL, MongoDB, SQLite, etc.)
- What is the Cache/Queue System? (Redis, RabbitMQ, SQS, etc. — if applicable)
- What is the Storage/CDN? (S3, R2, Cloudinary, Local, etc. — if applicable)

### 1.2 Architectural Patterns
- What is the overall architecture pattern? (Monolith, Modular Monolith, Microservices, Serverless, etc.)
- Is there a specific domain/feature module organization?
- What is the main directory layout? (Sketch a high-level tree)

### 1.3 Communication & APIs
- What API paradigm is used? (REST, GraphQL, gRPC, tRPC, etc.)
- Are WebSockets or real-time event systems present?
- What external third-party APIs are integrated?

---

## 2. Product Requirements Document (PRD)

### 2.1 Product Overview
- What is the product? (Clear one-sentence summary)
- What primary problem does it solve?
- Who is the target audience?

### 2.2 Roles & Permissions
- What are the user roles? (Admin, User, Doctor, Staff, etc.)
- What permissions apply to each role?
- Is there a Multi-tenancy architecture? (SaaS / Standalone / Both)

### 2.3 Core Modules
- What are the primary feature modules?
  - Example: Authentication, Dashboard, Billing, Users, Reports, Settings
- Which modules are completed versus pending development?

### 2.4 Primary User Journeys
- What are the top 3 user journeys?
  - Example: Registration → Onboarding / Account Setup → Daily Core Usage

---

## 3. Visual Identity & Design Tokens

### 3.1 Color System
- Primary Color?
- Secondary Color?
- Background Color?
- Surface / Container Color?
- Is Dark Mode supported?

### 3.2 Typography
- What font family is used? (Inter, Roboto, System UI, etc.)
- Is RTL/Multilingual layout required?

### 3.3 Design Tokens & Spacing
- Is a Design System or CSS Token set defined?
- What spacing grid and border radius scale apply?

---

## 4. Additional Specifications (Optional)

### 4.1 Localization & i18n
- What locales are supported?
- How is localization key parity managed?

### 4.2 Security
- What authentication mechanism is enforced? (JWT, Session, OAuth, etc.)
- What authorization model applies (RBAC, ABAC)?
- Are rate limits or anti-bot protections required?

### 4.3 DevOps & Execution
- What is the deployment environment? (Docker, VPS, Vercel, AWS, etc.)
- What commands run local development, type checking, and unit testing?
