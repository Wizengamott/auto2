const { defineConfig } = require("cypress");

module.exports = defineConfig({
    "viewportWidth": 1440,
    "viewportHeight": 720,
    "screenshotsFolder": "cypress/screenshots",
  e2e: {
    baseUrl: "https://example.cypress.io",
    specPattern: [ 
      '**/*.test.js',
      '**/*.cy.js'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportTitle: 'qaauto cypress report',
    embeddedScreenshots: true,
    inlineAssets: true
  }

});
