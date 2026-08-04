const {test,expect}=require('@playwright/test');

test("special locators", async({page})=>{
   await page.goto("https://rahulshettyacademy.com/angularpractice/");
   await page.getByLabel("Check me out if you Love IceCreams!").click();
   await page.getByLabel("Employed").click();
   await page.getByLabel("Gender").selectOption("Male");
    await page.getByLabel("Password").fill("Male");
await page.getByPlaceholder("Password").fill("Vignesh@1310");
await page.getByRole("button",{name:'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").click();
const verifySuccess = await page.getByText(" The Form has been submitted successfully!.                    ").isVisible
console.log(verifySuccess);
await page.getByRole("link",{name:"Shop"}).click();
// await page.locator("app-card-list").filter({hasText:"Blackberry"}).getByRole('button',{name:'Add '}).click();
await page.locator(".card.h-100").filter({hasText:"Blackberry"}).getByRole('button',{name:'Add '}).click();
})

test("E2E eCommerce with Special Locators", async({page})=>{
    const email = "vigneshwiki1323@gmail.com";
    const password = "Vignesh@1310";
    const productName = 'ZARA COAT 3';

    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByRole("button",{name:"Login"}).click();
    const  productContainer = page.locator(".card-body");
    await productContainer.last().waitFor();
    await productContainer.filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:" Add To Cart"}).click();
    await page.locator("[routerlink='/dashboard/cart']").waitFor();
    await page.locator("[routerlink='/dashboard/cart']").click();
    await page.waitForLoadState("networkidle");
    await page.locator(".items").first().waitFor();
    await page.getByText("Checkout").click();
    await page.getByPlaceholder("Select Country").waitFor();
    await page.getByPlaceholder("Select Country").pressSequentially("ind, {delay:150}").selectOption().nth(1);
    await page.getByText("Name on Card ").filter({has:".input"}).fill("Vignesh");
    await page.getByText("Apply Coupon ").filter({name:"coupon"}).fill("rahulshettyacademy")
    await page.waitForLoadState("networkidle");
    await page.locator("text='* Coupon Applied'").waitFor();
    await page.locator("text='* Coupon Applied'").click();
    await page.getByRole("button",{name:"Place Order "}).click();
    await page.getByText(" Thankyou for the order. ").click();

    await page.locator("label.ng-star-inserted").click();

    await page.getByRole("button",{name:"  ORDERS"}).click();

    await page.locator("table tr").first().waitFor();
    await page.locator("table tr").nth(2).click();
    await page.locator("table tr").filter({hasText:"View"}).click();
    await page.locator("div.col-text.-main").click();
})

