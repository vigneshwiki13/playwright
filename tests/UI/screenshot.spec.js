const{test,expect} = require('@playwright/test');
const path = require('node:path');
test('screenShot',async({page})=>{
   await page.goto("https://www.udemy.com/course/playwright-tutorials-automation-testing/learn/lecture/31110968#overview");
   await page.screenshot({path: 'screenshot.png'})
   // await page.locator("img[src*='jul-963']").screenshot({path:'partial.png'})

expect(await page.screenshot()).toMatchSnapshot('landing.png')
// npx playwright test tests/UI/screenshot.spec.js --update-snapshots --> to update the landing file with new one
   // npx playwright test tests/UI/screenshot.spec.js     use this, first time the landing png will update
})