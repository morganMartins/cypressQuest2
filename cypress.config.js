const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "qiw9d9",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
