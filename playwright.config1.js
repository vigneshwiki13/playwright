// @ts-check
const { chromium, defineConfig, devices } = require ('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  
  testDir: './tests',
    retries: 0,
    workers: 10,
    // retry 1 time and if passed put them as flaky
    //  by default test files run in parallel mode whereas tests in the test file run in sequence
timeout: 40 *1000,
    expect: { 
      //  to explicitly give timeout (by default 30000)
      timeout: 5000,
    },
      reporter: 'html',

      // --config playwright.config1.js --project=safari
      //  if project was not defined (--project=safari) run on all projects with multithread simultaneously
  projects: [
      {
        name : 'safari',
        use: {
      browserName: 'webkit',
      headless: false,
      screenshot: 'on',
      trace: 'on',
      // viewport: {width:720, height: 1080}
      ...devices['iPhone XR'],
      video: 'retain-on-failure'
  }   },
  {
         name : 'chrome',
  use: {
      browserName: 'chromium',
      headless: false,
      screenshot: 'on',
      trace: 'on',
      ...devices['Galaxy S24'],
      ignoreHTTPSErrors: true,
      permissions:['geolocation']
  }   
  },
  {
      
         name : 'firefox',
        use: {
      browserName: 'firefox',
      headless: true,
      screenshot: 'on',
      trace: 'on'
  }   
  

  }


  ]
  

});
// module.exports= config

