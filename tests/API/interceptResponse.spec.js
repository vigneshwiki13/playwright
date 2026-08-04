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


await page.pause();
   
    
    // after clicking the myorders button the api response will fetch and interact with front end
    //  this line comes at the base

     // it is not an api changes it simply bypass and manipulate the response body
    // we are doing in the ui only. thats why we using page.route
      await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    // await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a004d76e83610b531d6c041",
    //  it is  a dynamic, changes with every user so use wildcard *
    async route=>{
        const response = await page.request.fetch(route.request())
        let body = JSON.stringify(fakePayloadOrder)
        route.fulfill({
            response,       // overload the body to the response body
            body,
// intercepting Response
// Api response-> {playwright FAke Response}-> browser -> render data on front end
        })
    })
     await page.locator("[routerlink='/dashboard/myorders']").first().click();
    // await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")


    })