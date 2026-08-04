

const{test,expect}= require('@playwright/test');
const { sign } = require('node:crypto');

test('Login practice', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('input#username');
    const password = page.locator('input#password');
    const signIn = page.locator('input#signInBtn');

    await userName.type('vignesh');
    await password.type('wiki1310');
    await signIn.click();
    await expect( page.locator("[style*='block']")).toContainText("Incorrect");


    await userName.type('vignesh');
    await password.type('wiki1310');
    await signIn.click();
    console.log(await page.title());


    await userName.fill('');
    await password.fill('');
    await userName.type('rahulshettyacademy');
    await password.type('Learning@830$3mK2');
   
    await signIn.click();
    console.log( await page.locator("[style*='block']").textContent());

})

test('UI Ddn Rdo', async({page})=>{
     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
     const userName = page.locator('input#username');
     const password = page.locator('input#password');
     await userName.type('rahulshettyacademy');
     await password.type('Learning@830$3mK2');
    
     await page.locator("span.checkmark").last().click();
     console.log(await page.locator("span.checkmark").last().isChecked());
     await page.pause();
     await expect(page.locator("span.checkmark").last()).toBeChecked();
       await page.locator("select.form-control").selectOption("consult");
     await page.locator("#okayBtn").click();
     await page.locator("#terms").click();
     await expect(page.locator("#terms")).toBeChecked();
     await page.locator("#terms").click();
     expect( await page.locator("#terms").isChecked()).toBeFalsy();
     await page.pause();
})

test("blinking", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(page.locator("[href*='https://rahulshettyacademy.com/documents-request']")).toHaveAttribute('class','blinkingText');
})
test('childWindow and split',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const documentLink = await page.locator("[href*='https://rahulshettyacademy.com/documents-request']");

const [childPage] =await Promise.all([
    context.waitForEvent('page'), 
    await documentLink.click()
])
const fullText = await childPage.locator("p.red").textContent();
    console.log(fullText);
    const text = fullText.split("@")[1].split(" ")[0];
        console.log(text);

         const userName = page.locator('input#username');
     const password = page.locator('input#password');
     const signIn = page.locator('input#signInBtn');
     await page.pause();

     await userName.fill(text);
     console.log(await userName.inputValue());
     await password.fill("Learning@830$3mK2");
     await signIn.click();

})


test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());

 })