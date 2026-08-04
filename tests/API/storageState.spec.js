const {test,expect}=require('@playwright/test');
const email = "vigneshwiki1323@gmail.com";
const password = "Vignesh@1310";
let webContext;

test.beforeAll(async({browser})=>{
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(password);
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle')  // important to store this
    await browserContext.storageState({path:'state.json'})
    webContext= await browser.newContext({storageState:'state.json'})


})
test("@API ECommerce", async()=>{
     const page = await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
   const productName = 'ZARA COAT 3';
   const shippingMailId= page.locator("//label[text()='vigneshwiki1323@gmail.com']//following-sibling::input");
   const txtCountryElement= page.locator("[placeholder*=Country]");
   const  productContainer = page.locator(".card-body");
    
    await productContainer.last().waitFor();
    console.log(await productContainer.allTextContents());
    // productContainer.count()

       for(let i=0; i<await productContainer.count(); i++){
          console.log("control enters loop");
           const optionProduct = await productContainer.nth(i).locator("b").textContent();
           console.log(optionProduct);
            if(optionProduct === productName){
                console.log(optionProduct);
                await productContainer.nth(i).locator("text= Add To Cart").click();
                break;
             }}
      await page.locator("[routerlink*='cart']").click();
      await page.locator(".infoWrap").last().waitFor();
                const myCartPoduct = await page.locator("text=ZARA COAT 3").isVisible();
                    await expect(myCartPoduct).toBeTruthy();
   
                await page.locator("text=Checkout").click();
                await page.locator("//div[text()='CVV Code ']//following-sibling::input").fill("522");
                const mail= await shippingMailId.inputValue()
                 await console.log(mail);
                await txtCountryElement.pressSequentially("ind", {delay: 150});
                const dropdown = await page.locator(".ta-results");
                 await dropdown.last().waitFor();

                 const count =  await dropdown.locator("button").count();
                 console.log(count);
                for(let i=0; i<await count; i++){
                  const text = await dropdown.locator("button").nth(i).textContent();
                  await console.log(text);
                  if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }}
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

      const bookingOrderID = await page.locator("label.ng-star-inserted").textContent();
      console.log(await bookingOrderID);
      await page.locator("[routerlink='/dashboard/myorders']").first().click();

      await page.locator("tr th").last().waitFor();
      const cells = await page.locator("tbody tr");
         for(let i=0; i<await cells.count(); i++){
            const value = await cells.nth(i).locator("th").textContent();
            console.log(value);
            if( bookingOrderID.includes(value)){
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

                     for(let i =0; i< await txtVerifyAddress.count(); i++){
                         console.log(await txtVerifyAddress.count());

                      const text = await txtVerifyAddress.nth(i).locator(".text").first().textContent();
                        console.log("Email On Order Summary Page: "+ text); 
                        if(text.includes(email)){
                            
                        await expect(await txtVerifyAddress.nth(i).locator(".text").first()).toHaveText(email);
                        break;
                    }}
                    await page.pause()

    })

    test("test 2 ", async()=>{
     const page = await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
    
   const productName = 'ZARA COAT 3';
   const shippingMailId= page.locator("//label[text()='vigneshwiki1323@gmail.com']//following-sibling::input");
   const txtCountryElement= page.locator("[placeholder*=Country]");
   const  productContainer = page.locator(".card-body");
    
    await productContainer.last().waitFor();
    console.log(await productContainer.allTextContents());
    // productContainer.count()

       for(let i=0; i<await productContainer.count(); i++){
          console.log("control enters loop");
           const optionProduct = await productContainer.nth(i).locator("b").textContent();
           console.log(optionProduct);
            if(optionProduct === productName){
                console.log(optionProduct);
                await productContainer.nth(i).locator("text= Add To Cart").click();
                break;
             }}
      await page.locator("[routerlink*='cart']").click();
      await page.locator(".infoWrap").last().waitFor();
                const myCartPoduct = await page.locator("text=ZARA COAT 3").isVisible();
                    await expect(myCartPoduct).toBeTruthy();
                
                await page.pause();})
      
