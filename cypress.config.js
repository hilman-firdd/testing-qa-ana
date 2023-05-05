const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.anaonline.id/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
