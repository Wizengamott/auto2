const { defineConfig } = require("cypress");

module.exports = defineConfig({
    "viewportWidth": 1440,
    "viewportHeight": 720,
    "screenshotsFolder": "cypress/screenshots",
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
