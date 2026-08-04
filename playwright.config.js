// @ts-check
const { chromium, defineConfig, devices } = require ('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  
  testDir: './tests',
timeout: 40 *1000,
    expect: { 
      //  to explicitly give timeout (by default 30000)
      timeout: 5000,
    },
      reporter: 'html',
  use: {
      browserName: 'chromium',
      headless: false,
      screenshot: 'on',
      trace: 'on'
      
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

});
// module.exports= config

