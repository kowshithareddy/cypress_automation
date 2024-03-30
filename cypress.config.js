const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practicetestautomation.com/practice-test-login/",
    "env":{
      "username" : "student",
      "password": "Password123",
    },
    
   "viewportWidth": 1920,
   "viewportHeight": 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
  // "retries": {"openMode":2, "runMode": 0},
});
