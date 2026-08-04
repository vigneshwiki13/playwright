const { Given, When, Then } = require('@cucumber/cucumber')
const {POManager} = require('../../../tests/UI/POM/POManager')
const {expect} =require('@playwright/test')
const playwright =  require('@playwright/test')

// test is for mocha framework
//npx cucumber-js Cucumber/features/Ecommerece.feature --exit  ==to exit from the running scenario
//  inbuild headless mode, define in the launch({headless: false})  {}-> important
const dataset = JSON.parse(JSON.stringify(require('../../../tests/UI/Utils/EcommereceTestData.json')))
// world constructor == just give this. to variables to access seamlessly.  no const or let needed
  //in java we use global constructor or dependency injection


// every method lasts only for 5 sec then failed so if want give {timeouts}
Given('a login to Ecommerece application with {string} and {string}',{timeout:10*1000}, async function (userName, password) {
  // Write code here that turns the phrase above into concrete actions
  this.userName = userName

   this.shippingMailId = this.page.locator("//label[text()='vigneshwiki1323@gmail.com']//following-sibling::input");
   this.txtCountryElement = this.page.locator("[placeholder*=Country]");

   
   await this.pom.getLoginPage().pageLaunch();
   await this.pom.getLoginPage().validLogin(this.userName, password)
});

When('Add {string} to Cart',async function (productName) {
  // Write code here that turns the phrase above into concrete actions
   await this.pom.getProductPage().productSelectAndAddCart(productName);
   await this.pom.getMyCartPage().checkout();
});


When('Enter valid details and Place the order',async function () {
  // Write code here that turns the phrase above into concrete actions
 await this.page.locator("//div[text()='CVV Code ']//following-sibling::input").fill("522");
   const mail = await this.shippingMailId.inputValue()
   await console.log(mail);
   await this.txtCountryElement.pressSequentially("ind", { delay: 150 });
   const dropdown = await this.page.locator(".ta-results");
   await dropdown.last().waitFor();

   const count = await dropdown.locator("button").count();
   console.log(count);
   for (let i = 0; i < await count; i++) {
      const text = await dropdown.locator("button").nth(i).textContent();
      await console.log(text);
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
   const txtApplyCoupoun = await this.page.locator("[name='coupon']");
   await txtApplyCoupoun.fill("rahulshettyacademy");
   const btnApplyCoupoun = await this.page.locator("//*[text()='Apply Coupon']");
   await btnApplyCoupoun.first().click();
   const txtCoupounApplied = await this.page.locator("text='* Coupon Applied'")
   await txtCoupounApplied.waitFor();
   const txtCoupounAppliedDisplayed = await txtCoupounApplied.isVisible();
   console.log(await await txtCoupounApplied.textContent());
   console.log(await txtCoupounAppliedDisplayed);
   await this.page.locator("[class*=btnn]").click();
});

Then('Verify order is present in the OrderHistory',async function () {
  // Write code here that turns the phrase above into concrete actions
    const txtThankYou = await this.page.locator(".hero-primary").textContent();
   await this.page.locator(".hero-primary").waitFor();
   console.log(await txtThankYou);

   const bookingOrderID = await this.page.locator("label.ng-star-inserted").textContent();
   console.log(await bookingOrderID);
   await this.page.locator("[routerlink='/dashboard/myorders']").first().click();

   await this.page.locator("tr th").last().waitFor();
   const cells = await this.page.locator("tbody tr");
   for (let i = 0; i < await cells.count(); i++) {
      const value = await cells.nth(i).locator("th").textContent();
      console.log(value);
      if (bookingOrderID.includes(value)) {
         console.log("order Click start");

         await cells.nth(i).locator(".btn-primary").click();
         console.log("order Click start");
      }


   }
  

   const txtVerifyAddress = this.page.locator(".address");
   await txtVerifyAddress.first().waitFor();

   for (let i = 0; i < await txtVerifyAddress.count(); i++) {
      console.log(await txtVerifyAddress.count());

      const text = await txtVerifyAddress.nth(i).locator(".text").first().textContent();
      console.log("Email On Order Summary Page: " + text);
      if (text.includes(this.userName)) {

         await expect(await txtVerifyAddress.nth(i).locator(".text").first()).toHaveText(this.userName);
         break;
      }
   }

});

Given('a login to application with {string} and {string}',async function (userName, password) {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    this.userName = this.page.locator('input#username');
    this.password = this.page.locator('input#password');
    this.signIn = this.page.locator('input#signInBtn');

      await  this.userName.type(userName);
    await  this.password.type(password);
});

  When('click submit button',async function () {
    await  this.signIn.click();
});


Then('Verify error code is present',async function () {
  await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
});

  
  