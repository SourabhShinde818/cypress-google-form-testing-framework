Automation Framework

##Cypres-Mocha Framework

##Features of Cypress-Mocha Framework
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
9. The cypress.config.js file is used to configure settings for the Cypress test runner. config base URL of your application, and file path configurations. You can also define environment variables, plugins, and other settings in this file.
   

   
   
   - Run tests in headless mode: 'npm run test'
   - Run tests in interactive mode for a specific spec: ` npm run test -- --spec cypress/Integration/googleFormSubimssion_Test.cy.js --headed`
   - Run test in interaction mode 'npm run test:headtest'
   - Run test in headless mode for a specific spec:'npm run test:googleform'
   - Run test in headless mode for chrome browser (specific spec):'npm run test:googleform_chrome'
   - Run test in headless mode for firefox browser (specific spec):'test:googleform_firefox'
   - Run test in headless mode for Edge browser (specific spec):'test:googleform_Egde'
   - Run test in interactive mode for chrome browser(specfic spec):'npm run test:googleform_headtest_chrome'
   - Run test in interactive mode for firefox browser(specfic spec):'npm run test:googleform_headtest_firefox'
   - Run test in interactive mode for edge browser(specfic spec):'npm run test:googleform_headtest_Edge'

## Page Object Model
   - The Page Object Model (POM) is a design pattern in test automation that separates the UI elements of a web application from the test code. 
   - It enhances code readability, reusability, and maintainability by encapsulating interactions with web pages into separate classes called Page Objects.
   - This pattern promotes cleaner test code and easier maintenance as applications evolve.
     

## Configuration

-  cypress.config.js:
     - Cypress configuration file containing various settings for test execution.
     - The cypress.config.js file is used to configure settings for the Cypress test runner. It allows you to customize various aspects of your Cypress tests, such as the browser to use, the base URL of your 
       application, and file path configurations. You can also define environment variables, plugins, and other settings in this file.
                      -
- `cypress/support/commands.js`:
    - Custom commands and global configurations for Cypress.
    - The cypress/support/commands.js file in a Cypress project is used to extend Cypress' command set.
    -  You can define custom commands or override existing commands here. This file is a good place to encapsulate  commonly used actions or assertions to make your test code more readable and maintainable.
    - Custom commands can interact with your application in ways that are specific to your project, making your tests  more expressive and easier to write

- `cypress/support/e2e.js`:
      - Cypress e2e configuration file.
      -e2e.js in the cypress/support directory is a common naming convention for a file that centralizes e2e testing configurations and utilities for Cypress tests, but its exact purpose and content can vary 
       based on the specific needs of your project.

  ## In a Cypress framework that uses Mocha as the test runner, the folder structure typically follows a common pattern. Here's a basic overview:

     - Integration Tests Folder: This is where your actual test files are located. By default, Cypress looks for these files in the cypress/integration directory.
     - Support Folder: The cypress/support directory contains support files for your tests, such as custom commands (commands.js) and global configuration (e2e.js)
     - Configuration File: The cypress.config.js file at the root of your project is used to configure Cypress settings.
     - Fixture Folder: If you need to use fixtures (test data for your tests), you can place them in the cypress/fixtures directory.
     - Screenshots and Videos : Cypress can capture screenshots and videos during test runs, which are typically saved in the cypress/screenshots and cypress/videos directories, respectively.
     - Report Folder : By using Mochawesome-html-reporter we create standard report. it directly stores into a report folder
     - .github folder: created Yml files to run scprit on github.


## Mochawesome HTML Report
- Mochawesome is a custom reporter for Mocha that generates detailed and visually appealing HTML reports for your test results
- You can install Mochawesome and its dependencies using npm:
   - npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
- This particular code we have to write in cypress/config.js to run Mochawesome-Html-Report
   - reporter:"cypress-mochawesome-reporter"   
   - require('cypress-mochawesome-reporter/plugin')(on)

  


