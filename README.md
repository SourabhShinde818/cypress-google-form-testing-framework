

Google Form Test Automation Framework using framework (Cypress)

## Features of framework


##Features of Cypress-Mocha Framework
- The combination of Cypress with Mocha provides a robust testing framework for web applications, offering a range of features that make testing easier and more efficient. Here are the key features of the Cypress-Mocha framework:
- Mocha Test Runner: Mocha is a flexible and feature-rich JavaScript test framework that provides a clear and comprehensive interface for writing test cases and suites.
- Describe and It Blocks: Mocha uses describe and it blocks to organize tests into logical groups and define individual test cases, making it easy to manage and understand test suites.
- Hooks: Mocha provides before, after, beforeEach, and afterEach hooks that allow you to set up and tear down test environments, ensuring tests run in a clean state.
- Assertions: Mocha does not include its own assertion library, so you can use any assertion library of your choice (e.g., Chai, Should.js, Expect.js) to perform assertions in your tests.
- Async Support: Mocha provides support for testing asynchronous code using callbacks, promises, or async/await syntax, making it easy to write tests for modern asynchronous web applications.
- Reporters: Mocha supports multiple reporters that can generate test reports in various formats. allowing you to choose the format that best suits your needs.
- Extensibility: Both Cypress and Mocha are highly extensible frameworks, allowing you to customize and extend their functionality to meet your specific testing requirements.

## Prerequisites

Make sure you have the following dependencies installed:

- Node.js (version 18 or higher)
- NPM (Node Package Manager)

##Steps

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running the command: `npm install`
4. Configure your test steps by creating .cy.js files in the 'cypress/integration/' directory using mocha framework.
5. Implement page object in the 'cypress/pageObjects' directory.
6. create test data file in the 'cypress/fixture/'directory and used in Test cases execution.
7. create yaml file to run our script in github repository (remote)
8. Run the tests using one of the available commands:
   -there are various command as below:
   - Run tests in interactive mode: `npm run cy:test -- --browser=chrome --headed`
   - Run tests in headless mode: `npm run cy:test`
   - Run tests in interactive mode for a specific spec: ` npm run cy:test -- --spec cypress/e2e/login.cy.js --headed`

## Configuration

-  cypress.config.json`: Cypress configuration file containing various settings for test execution.
- `cypress/support/commands.js`: Custom commands and global configurations for Cypress.
- `cypress/support/e2e.js`: Cypress e2e configuration file.

## Mochawesome Report
-
