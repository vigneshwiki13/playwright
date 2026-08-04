const dataset = JSON.parse(JSON.stringify(require('../Utils/EcommereceTestData.json')))
// json was just a file so just like above is enough

import{test, expect} from '@playwright/test'
import { POManager } from './POManager'
import { customTest } from './TestBaseCustomFixture'

// testDataForOrder == is a fixture run only once with a set of data
customTest('Client Login', async ({ page,testDataForOrder }) => {
     
   const shippingMailId = page.locator("//label[text()='vigneshwiki1323@gmail.com']//following-sibling::input");
   const txtCountryElement = page.locator("[placeholder*=Country]");

   const pom = new POManager(page,testDataForOrder.productName);
   await pom.getLoginPage().pageLaunch();
   await pom.getLoginPage().validLogin(testDataForOrder.userName, testDataForOrder.password)

   await pom.getProductPage().productSelectAndAddCart(testDataForOrder.productName);

   await pom.getMyCartPage().checkout();


   await page.locator("//div[text()='CVV Code ']//following-sibling::input").fill("522");
   const mail = await shippingMailId.inputValue()
   await console.log(mail);
   await txtCountryElement.pressSequentially("ind", { delay: 150 });
   const dropdown = await page.locator(".ta-results");
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
   const txtApplyCoupoun = await page.locator("[name='coupon']");
   await txtApplyCoupoun.fill("rahulshettyacademy");
   const btnApplyCoupoun = await page.locator("//*[text()='Apply Coupon']");
   await btnApplyCoupoun.first().click();
   const txtCoupounApplied = await page.locator("text='* Coupon Applied'")
   await txtCoupounApplied.waitFor();
   const txtCoupounAppliedDisplayed = await txtCoupounApplied.isVisible();
   console.log(await await txtCoupounApplied.textContent());
   console.log(await txtCoupounAppliedDisplayed);
   await page.locator("[class*=btnn]").click();


   const txtThankYou = await page.locator(".hero-primary").textContent();
   await page.locator(".hero-primary").waitFor();
   console.log(await txtThankYou);
let bookingOrderID : any
   bookingOrderID = await page.locator("label.ng-star-inserted").textContent();
   console.log(await bookingOrderID);
   await page.locator("[routerlink='/dashboard/myorders']").first().click();

   await page.locator("tr th").last().waitFor();
   const cells = await page.locator("tbody tr");
   for (let i = 0; i < await cells.count(); i++) {
      
      const value = await cells.nth(i).locator("th").textContent();
      console.log(value);
      if (bookingOrderID.includes(value)) {
         console.log("order Click start");

         await cells.nth(i).locator(".btn-primary").click();
         console.log("order Click start");
      }


   }
   console.log("done");
   // const txtVerifyOrderId = await page.locator("div.col-text");
   // console.log(await txtVerifyOrderId.textContent());
   // await expect(txtVerifyOrderId).toHaveText(bookingOrderID);

   const txtVerifyAddress = page.locator(".address");
   await txtVerifyAddress.first().waitFor();

   for (let i = 0; i < await txtVerifyAddress.count(); i++) {
      console.log(await txtVerifyAddress.count());
      let text: any
       text = await txtVerifyAddress.nth(i).locator(".text").first().textContent();
      console.log("Email On Order Summary Page: " + text);
      if (text.includes(testDataForOrder.userName)) {

         await expect(await txtVerifyAddress.nth(i).locator(".text").first()).toHaveText(testDataForOrder.userName);
         break;
      }
   }

})

// await page.pause();
