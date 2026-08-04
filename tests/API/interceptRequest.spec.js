const { test, expect, request } = require('@playwright/test')
const { ApiUtils } = require('./utils/apiUtils')
const loginPayload = { userEmail: "vigneshwiki1323@gmail.com", userPassword: "Vignesh@1310" }
const orderPayload = { orders: [{ country: "Canada", productOrderedId: "6960ea76c941646b7a8b3dd5" }] }
let response;
const fakePayloadOrder = {message:"No Product in Cart"}
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload)
    response = await apiUtils.createOrder(orderPayload)

    
})

test('@API Placed order checking', async ({ page }) => {
   
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token)
  
    await page.goto("https://rahulshettyacademy.com/client")


// await page.pause();
   
     await page.locator("[routerlink='/dashboard/myorders']").first().click();
     await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
     route=> route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=25636878532" }) )  // fake order id
    //   id=* for any view button was clicked
    await page.locator("button:has-text('View')").first().click();


    })