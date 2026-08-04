const {test, expect, request} = require('@playwright/test')
const loginPayload = {userEmail: "vigneshwiki1323@gmail.com", userPassword: "Vignesh@1310"}
const orderPayload = {orders: [{country: "Canada", productOrderedId: "6960ea76c941646b7a8b3dd5"}]}
let token;
let orderId;
test.beforeAll ('@API',async()=>{
const apiContext = await request.newContext()
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
{
    data:loginPayload
})
expect((await loginResponse).ok()).toBeTruthy();
// convert response to json to get the token alone
const loginResponseJson = await loginResponse.json();  // use other than json to explore more
const loginresponseBody = await loginResponse.body()
console.log('loginresponseBody')
console.log(loginresponseBody)

// use web to get token alone
token = loginResponseJson.token
console.log(token)

const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
    data: orderPayload,
    headers:{
        "Authorization" : token,
        "Content-type" : "application/json"

    }
})
const orderResponseJson = await orderResponse.json();
orderId = await orderResponseJson.orders[0]
// https://jsonpathfinder.com/

console.log(orderId)

})

test('order placing', async({page})=>{
await page.addInitScript(value=>{
    window.localStorage.setItem('token',value);

},token)
await page.goto("https://rahulshettyacademy.com/client")
await page.pause();
await page.locator("[routerlink='/dashboard/myorders']").first().click();

      await page.locator("tr th").last().waitFor();
      const cells = await page.locator("tbody tr");
         for(let i=0; i<await cells.count(); i++){
            const value = await cells.nth(i).locator("th").textContent();
            console.log(value);
            if( orderId.includes(value)){
            await cells.nth(i).locator(".btn-primary").click();
            }
      }
      console.log("done");
                  const txtVerifyOrderId = await page.locator("div.col-text");
                  console.log(await txtVerifyOrderId.textContent());
                  await expect(txtVerifyOrderId).toHaveText(orderId);
                })
