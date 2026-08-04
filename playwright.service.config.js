const { defineConfig } = require('@playwright/test');
const { createAzurePlaywrightConfig, ServiceOS, getAzureReporter } = require('@azure/microsoft-playwright-testing');
const { DefaultAzureCredential } = require('@azure/identity');
const config = require('./playwright.config');

module.exports = defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    exposeNetwork: '<loopback>',
    connectTimeout: 3 * 60 * 1000, // 3 minutes
    os: ServiceOS.LINUX,
    credential: new DefaultAzureCredential(),
  }),
  {
    reporter: [
      ["html", { open: "never" }],
      getAzureReporter(), // Use official helper to attach the Azure Playwright Workspace reporter
    ],
  }
);