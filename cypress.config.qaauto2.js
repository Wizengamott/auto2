const { defineConfig } = require('cypress')
const fs = require('fs');

function loadEnvConfig(fileName) {
  const path = `cypress.env.${fileName}.json`;
  return fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, 'utf8')) : {};
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space/',  
    specPattern: [
        '**/*.test.js',
        '**/*.cy.js'
      ],
    setupNodeEvents(on, config) {
        const file = config.env.configFile || 'qaauto2';
        const loadedEnv = loadEnvConfig(file);
  
        // объединяем всё в config.env
        config.env = { ...config.env, ...loadedEnv };
        return config;
    }  
  }
})