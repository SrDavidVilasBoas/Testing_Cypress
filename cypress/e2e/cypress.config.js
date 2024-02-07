const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vv5726',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
