const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    specPattern:"./cypress/api/**/*.spec.js",

    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    viewportWidth:1920,
    viewportHeight:1080,
    chromeWebSecurity:false,
  },
});
