const{test, expect}=require('@playwright/test');

test('Browser configure Playwright test', async({browser})=>
{
//  chrome- plugins, cookies,   (with browser fixture)  fixture are used to inject predefined things
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.omrbranch.com/");
    console.log(await page.title());
});

test('First Playwright test', async({page})=>
{
//  with page fixture
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google") ;
});
