const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space/',
    specPattern: [
        '**/*.test.js',
        '**/*.cy.js'
      ],
    env: {
      configFile: 'qaauto2',
    },
  },
})
// 