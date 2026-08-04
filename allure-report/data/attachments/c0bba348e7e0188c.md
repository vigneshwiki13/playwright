# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\EComSplLocators.spec.js >> E2E eCommerce with Special Locators
- Location: tests\UI\EComSplLocators.spec.js:19:1

# Error details

```
TypeError: page.getByPlaceholder(...).pressSequentially(...).selectOption is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: vigneshwiki1323@gmail.com
            - textbox [ref=e81]: vigneshwiki1323@gmail.com
            - textbox "Select Country" [active] [ref=e84]: "ind, {delay:150}"
            - generic [ref=e87] [cursor=pointer]: Place Order
```

# Test source

```ts
  1  | const {test,expect}=require('@playwright/test');
  2  | 
  3  | test("special locators", async({page})=>{
  4  |    await page.goto("https://rahulshettyacademy.com/angularpractice/");
  5  |    await page.getByLabel("Check me out if you Love IceCreams!").click();
  6  |    await page.getByLabel("Employed").click();
  7  |    await page.getByLabel("Gender").selectOption("Male");
  8  |     await page.getByLabel("Password").fill("Male");
  9  | await page.getByPlaceholder("Password").fill("Vignesh@1310");
  10 | await page.getByRole("button",{name:'Submit'}).click();
  11 | await page.getByText("Success! The Form has been submitted successfully!.").click();
  12 | const verifySuccess = await page.getByText(" The Form has been submitted successfully!.                    ").isVisible
  13 | console.log(verifySuccess);
  14 | await page.getByRole("link",{name:"Shop"}).click();
  15 | // await page.locator("app-card-list").filter({hasText:"Blackberry"}).getByRole('button',{name:'Add '}).click();
  16 | await page.locator(".card.h-100").filter({hasText:"Blackberry"}).getByRole('button',{name:'Add '}).click();
  17 | })
  18 | 
  19 | test("E2E eCommerce with Special Locators", async({page})=>{
  20 |     const email = "vigneshwiki1323@gmail.com";
  21 |     const password = "Vignesh@1310";
  22 |     const productName = 'ZARA COAT 3';
  23 | 
  24 |     await page.goto("https://rahulshettyacademy.com/client");
  25 |     await page.getByPlaceholder("email@example.com").fill(email);
  26 |     await page.getByPlaceholder("enter your passsword").fill(password);
  27 |     await page.getByRole("button",{name:"Login"}).click();
  28 |     const  productContainer = page.locator(".card-body");
  29 |     await productContainer.last().waitFor();
  30 |     await productContainer.filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:" Add To Cart"}).click();
  31 |     await page.locator("[routerlink='/dashboard/cart']").waitFor();
  32 |     await page.locator("[routerlink='/dashboard/cart']").click();
  33 |     await page.waitForLoadState("networkidle");
  34 |     await page.locator(".items").first().waitFor();
  35 |     await page.getByText("Checkout").click();
  36 |     await page.getByPlaceholder("Select Country").waitFor();
> 37 |     await page.getByPlaceholder("Select Country").pressSequentially("ind, {delay:150}").selectOption().nth(1);
     |                                                                                         ^ TypeError: page.getByPlaceholder(...).pressSequentially(...).selectOption is not a function
  38 |     await page.getByText("Name on Card ").filter({has:".input"}).fill("Vignesh");
  39 |     await page.getByText("Apply Coupon ").filter({name:"coupon"}).fill("rahulshettyacademy")
  40 |     await page.waitForLoadState("networkidle");
  41 |     await page.locator("text='* Coupon Applied'").waitFor();
  42 |     await page.locator("text='* Coupon Applied'").click();
  43 |     await page.getByRole("button",{name:"Place Order "}).click();
  44 |     await page.getByText(" Thankyou for the order. ").click();
  45 | 
  46 |     await page.locator("label.ng-star-inserted").click();
  47 | 
  48 |     await page.getByRole("button",{name:"  ORDERS"}).click();
  49 | 
  50 |     await page.locator("table tr").first().waitFor();
  51 |     await page.locator("table tr").nth(2).click();
  52 |     await page.locator("table tr").filter({hasText:"View"}).click();
  53 |     await page.locator("div.col-text.-main").click();
  54 | })
  55 | 
  56 | 
```