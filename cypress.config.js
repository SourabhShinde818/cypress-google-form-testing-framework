
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:"cypress-mochawesome-reporter",
    
    e2e:{
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
        require('cypress-mochawesome-reporter/plugin')(on);

    },
     specPattern: 'cypress/integration/googleFormSubmission_Test.cy.js'
  },
  env:{
     URL:'https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform',

  }
  

});
