# Bettermode

## Tools Used in this Project

- [eslint](https://eslint.org/) to lint code
- [prettier](https://prettier.io/) to format code
- [Next.js](https://nextjs.org/) to build the app
- [tailwindcss](https://tailwindcss.com/) to style
- [typescript](https://www.typescriptlang.org/) to write code
- [husky](https://typicode.github.io/husky/#/) to run git hooks
- [commitlint](https://commitlint.js.org/#/) to lint commit messages
- [validate-branch-name](https://www.npmjs.com/package/validate-branch-name) to validate branch names

## Conventional Commit Messages using Commitlint and Husky

In this repository, we adhere to a structured approach for writing commit messages using the commitlint tool, which enforces conventional commit message standards. Additionally, we have integrated commitlint with husky to ensure these rules are consistently followed.

### 1. Commit Message Guidelines

When creating a commit message, it is essential to adhere to the guidelines outlined in the @commitlint/config-conventional package. These guidelines provide a standardized format for commit messages, making it easier to understand the purpose and impact of each commit.
Reference: [commitlint](https://commitlint.js.org/#/)

---

# Project Folder Structure

This section provides an overview of the folder structure for the **Dropshipping Backoffice** project. The structure has been designed to promote modularity, organization, and ease of development. Each section below describes the purpose and content of the corresponding folders and files.

## Folder Structure

```
src/
|-- api/
|   |-- queries/
|   |-- post/
|-- app/
|-- assets/
|   |-- fonts/
|-- components/
|   |-- containers/
|   |-- card/
|-- constants/
|-- services/
|-- styles/
|-- utils/
```

### 1. api/

This folder contains the services and API queries used throughout the application. It includes specific subfolders for queries, mutations, and types that interface with your backend or external services.

### 2. app/

This folder is responsible for high-level application components or pages. Each page is a self-contained part of the application, contributing to the app's routing and structure.

### 3. assets/

The assets folder is the home for static files like logos, icons, fonts, and other resources used in the application.

### 4. components/

This folder contains reusable UI components that are used throughout the application. By separating components, you ensure modularity and easier maintenance.

### 5. constants/

This folder holds constant variables, configurations, and static values used throughout the application.

### 6. services/

Services folder includes utility files such as API handlers, Apollo client configurations, and any third-party service integrations.

### 7. styles/

Global styles and styling-related resources are stored here. This includes CSS, theme files, and layouts that define the overall look and feel of the application.

### 8. utils/

The utils folder contains helper functions and utilities that can be reused across different parts of the application. This enhances maintainability and reduces code duplication.

---

# Project Execution Commands

These are the execution commands defined in the project's `package.json` file. You can use them to manage and develop the project:

### dev

```
npm run dev
```

Runs the development server using Next.js. This command starts a local development server with hot reloading, allowing you to preview your application as you work on it.

### build

```
npm run build
```

Builds the production-ready version of the application using Next.js. This command prepares your application for deployment by generating optimized assets and pages.

### start

```
npm run start
```

Starts the production server for the application. After using the build command, you can use this command to launch the application in a production environment.

### lint

```
npm run lint
```

Runs linting checks on the project's codebase using Next.js's linting tools. This command helps you identify and fix coding style and formatting issues in your code.

### lint:fix

```
npm run lint:fix
```

Runs linting checks on the project's codebase and attempts to automatically fix any fixable issues.

### prettier

```
npm run prettier
```

Checks the project's files for code formatting consistency using the Prettier tool. It identifies files with formatting inconsistencies but does not modify them.

### prettier:fix

```
npm run prettier:fix
```

Formats the project's files to ensure consistent code formatting using Prettier. This command automatically updates files to match the defined code style.

### check-types

```
npm run check-types
```

Performs type checking on the project using TypeScript's type checker (tsc). This helps catch type-related errors and ensures type safety in your codebase.

### storybook

```
npm run storybook
```

Starts Storybook locally on port 6006. This command allows you to view and develop UI components in isolation, providing a visual environment for component development.

### prepare

```
npm run prepare
```

Installs the Husky Git hooks during package installation. Husky is used to set up Git hooks that can enforce pre-commit and pre-push checks, ensuring code quality and consistency.

---

Let me know if you’d like to refine any part of this draft or add more details!
