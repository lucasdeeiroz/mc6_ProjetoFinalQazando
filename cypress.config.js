const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jdt4xd',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
