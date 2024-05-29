# cypress-testing-framework
Prerequisites
Make sure you have the following dependencies installed:
Node.js (version 18 or higher)
NPM (Node Package Manager)

Installation
To use this framework, you need to have Node.js and npm installed. Then, clone the repository and install the dependencies:
commands: git clone https://github.com/your/repo.git
         cd repo
         npm install
Clone this repository to your local machine.
Navigate to the project directory.
Install the project dependencies by running the command: npm install

Configure your test scenarios by creating files in the cypress/integration/ directory using mocha framework.
Implement Page object for your test case in the cypress/PageObjects directory.
cypress.config.json: Cypress configuration file containing various settings for test execution.
cypress/support/commands.js: Custom commands and global configurations for Cypress.
cypress/support/e2e.js: Cypress e2e configuration file.
Run the tests using one of the available commands:
Run tests in interactive mode: npm run cy:test -- --browser=chrome --headed
Run tests in headless mode: npm run cy:test
Run tests in interactive mode for a specific spec:  npm run cy:test -- --spec cypress/integration/googleFormSubmission_Test.cy.js --headed
Configuration
