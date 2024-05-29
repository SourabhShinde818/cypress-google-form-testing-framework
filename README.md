# cypress-testing-framework
Prerequisites
Make sure you have the following dependencies installed:
Node.js (version 18 or higher)
NPM (Node Package Manager)
components of cypress:
Cypress Test Runner
Cypress Dashboard

Installation
To install the project and its dependencies, follow these steps:

Clone the repository:
git clone https://github.com/your-username/your-repository.git
Navigate to the project directory:
cd your-repository
Install dependencies:
npm install
Running Tests
To run the Cypress tests, use the following command:
npm run test
This will open the Cypress Test Runner and run your tests.
npm cypress open
Writing Tests
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

