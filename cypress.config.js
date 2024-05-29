
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:"cypress-mochawesome-reporter",
    defaultCommandTimeout: 6000,
    
    "retries":{
      "runMode":1,
    },

    e2e:{
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
        require('cypress-mochawesome-reporter/plugin')(on);

    },
     specPattern: 'cypress/integration/googleFormSubmission_Test.cy.js'
  },
  env:{
     URL:'https://docs.google.com',

  }
  
});
