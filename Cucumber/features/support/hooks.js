const playwright =  require('@playwright/test')
const {Before, After, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber')
const {POManager} = require('../../../tests/UI/POM/POManager')
//  Before for all before scenario
// After for all after Scenario
// BeforeStep for every step before
// BeforeAll and After all

// import before, beforestep, status 
// tagged hooks
// Before({tags: "@Ecommerece and @LoginPage"} ,async function(){
Before(async function(){
     const browser = await playwright.chromium.launch({
    headless: false
 }
 );
 const context = await browser.newContext();
    this.page = await context.newPage();
    this.pom = new POManager(this.page);

})

After(async function() {
    console.log('finished')
})

AfterStep(async function({result}){
if(result.status === Status.FAILED){
        await this.page.screenshot({path: 'screenshotfailed.png'})

}

})