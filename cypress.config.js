const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e:{
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: 'cypress/integration/googleFormSubmission.cy.js'
  },
  env:{
     URL:'https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform'
  }
  

});
