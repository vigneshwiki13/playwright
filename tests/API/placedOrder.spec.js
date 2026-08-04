const { test, expect, request } = require('@playwright/test')
const { ApiUtils } = require('./utils/apiUtils')
const loginPayload = { userEmail: "vigneshwiki1323@gmail.com", userPassword: "Vignesh@1310" }
const orderPayload = { orders: [{ country: "Canada", productOrderedId: "6960ea76c941646b7a8b3dd5" }] }
let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload)
    response = await apiUtils.createOrder(orderPayload)
})

test('Placed order checking', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token)
    await page.goto("https://rahulshettyacademy.com/client")
    await page.pause();
    await page.locator("[routerlink='/dashboard/myorders']").first().click();

    await page.locator("tr th").last().waitFor();
    const cells = await page.locator("tbody tr");
    for (let i = 0; i < await cells.count(); i++) {
        const value = await cells.nth(i).locator("th").textContent();
        console.log(value);
        if (response.orderId.includes(value)) {
            await cells.nth(i).locator(".btn-primary").click();
        }
    }
    console.log("done");
    const txtVerifyOrderId = await page.locator("div.col-text");
    console.log(await txtVerifyOrderId.textContent());
    await expect(txtVerifyOrderId).toHaveText(response.orderId);
})