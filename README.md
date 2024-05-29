
Features
Supports the execution of tests in both headless and interactive modes, allowing for flexible testing options.
Provides easy-to-use commands and assertions for validating the behavior of web applications.
Enables test execution and reporting using various plugins, including html reporting, to generate comprehensive test reports.
Offers reusable step definitions and custom commands to improve test maintainability and reduce duplication.
Allows for easy integration with continuous integration (CI) systems, such as Jenkins or GitLab CI, for seamless test execution as part of the development pipeline.
Prerequisites
Make sure you have the following dependencies installed:

Node.js (version 18 or higher)
NPM (Node Package Manager)
components of cypress:
Cypress Test Runner
Cypress Dashboard
Getting Started
Clone this repository to your local machine.
Navigate to the project directory.
Install the project dependencies by running the command: npm install
Configure your test cases by creating .cy.js file in the cypress/spec/ directory using mocha framework.
Implement step definitions for your scenarios in the cypress/step_definitions directory.
Run the tests using one of the available commands:
Run tests in interactive mode: npm run cy:test -- --browser=chrome --headed
Run tests in headless mode: npm run cy:test
Run tests in interactive mode for a specific spec:  npm run cy:test -- --spec cypress/e2e/login.cy.js --headed
Configuration
cypress.config.json: Cypress configuration file containing various settings for test execution.
cypress/support/commands.js: Custom commands and global configurations for Cypress.
cypress/support/e2e.js: Cypress e2e configuration file.
# cypress-testing-framework
Prerequisites
Make sure you have the following dependencies installed:
Node.js (version 18 or higher)
NPM (Node Package Manager)
components of cypress:
Cypress Test Runner
Cypress Dashboard


All Cypress tests are located in the cypress/integration directory. You can create new test files in this directory to add new tests.
Page Object Model
Page objects are located in the cypress/integration/pages directory. Each page object represents a page or component of your application and contains methods to interact with that page.
Mochawesome Reports
Mochawesome reports are generated in the mochareports directory. To generate and view the HTML report, use the following commands:
cypress.config.js:Cypress configuration file containing various settings for test execution.The cypress.config.js file is used to configure Cypress for your project. It allows you to specify settings such as the base URL of your application, viewport dimensions, folders for screenshots and videos, and more. You can also configure Cypress to use specific reporters, such as Mochawesome, for generating test reports. Customize the cypress.json file to match your project's requirements and structure.
cypress/support/commands.js: Custom commands and global configurations for Cypress.
cypress/support/e2e.js: Cypress e2e configuration file.
Run tests in interactive mode: npm run cy:test -- --browser chrome --headed
Run tests in headless mode: npm run cy:test
Run tests in interactive mode for a specific spec:  npm run cy:test -- --spec cypress/integration/googleFormSubmission_Test.cy.js --headed

