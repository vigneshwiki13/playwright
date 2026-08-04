const {test, expect} = require('@playwright/test')

test("Navigation",async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await page.goto("https://www.google.com/?zx=1779789484938");
        await page.goBack();
        // await page.goForward();

        await expect(page.locator("#displayed-text")).toBeVisible();
        await page.locator("#hide-textbox").click();
        await expect(page.locator("#displayed-text")).toBeHidden();
// await page.pause();
// Js or dialog
        await page.locator("#confirmbtn").click();
        page.on('dialog',dialog=>dialog.dismiss())
    await page.locator("#alertbtn").click()        
        await page.locator("#mousehover").hover()

// Frames
        const framePage = await page.frameLocator("#courses-iframe");
        const allAccessPlanBtn = await framePage.locator("li a[href='lifetime-access']:visible").click()
        let text = await framePage.locator(".text h2").textContent();
        console.log(text.split(" ")[1])





    })