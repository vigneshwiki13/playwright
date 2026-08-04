const{test, expect} = require('@playwright/test');
test( 'Registration Page', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client');
    
    await page.locator('#userEmail').fill('vigneshwiki1323@gmail.com');
     await page.locator('#userPassword').fill('Vignesh@1310');
      await page.locator('input.btn').click();

      console.log(await page.locator('div.card-body').first().textContent());
      console.log(await page.locator('div.card-body').last().textContent());
      console.log(await page.locator('div.card-body').nth(1).textContent());
      console.log('all Text');
        await page.waitForLoadState('networkidle');  //Can cause Flakeenes
        await page.locator('div.card-body').last().waitFor();
        console.log(await page.locator('div.card-body').allTextContents());

}

)