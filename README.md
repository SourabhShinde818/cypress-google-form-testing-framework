

his guide explores the concept of a Cypress.js boilerplate and how it can streamline your Cypress testing workflow.

## Features of framework

- Supports the execution of tests in both headless and interactive modes, allowing for flexible testing options.
- Provides easy-to-use commands and assertions for validating the behavior of web applications.
- Enables test execution and reporting using various plugins, including html reporting, to generate comprehensive test reports.
- Offers reusable step definitions and custom commands to improve test maintainability and reduce duplication.
- Allows for easy integration with continuous integration (CI) systems, such as Jenkins or GitLab CI, for seamless test execution as part of the development pipeline.

## Prerequisites

Make sure you have the following dependencies installed:

- Node.js (version 18 or higher)
- NPM (Node Package Manager)

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running the command: `npm install`
4. Configure your test scenarios by creating .cy.js files in the `cypress/integration/` directory using mocha framework.
5. Implement page object in the `cypress/pageObjects` directory.
6. Run the tests using one of the available commands:
   - Run tests in interactive mode: `npm run cy:test -- --browser=chrome --headed`
   - Run tests in headless mode: `npm run cy:test`
   - Run tests in interactive mode for a specific spec: ` npm run cy:test -- --spec cypress/e2e/login.cy.js --headed`

## Configuration

-  cypress.config.json`: Cypress configuration file containing various settings for test execution.
- `cypress/support/commands.js`: Custom commands and global configurations for Cypress.
- `cypress/support/e2e.js`: Cypress e2e configuration file.
## Mochawesome Report
-
