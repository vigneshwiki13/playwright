import{test, expect, Locator, Page} from '@playwright/test'
export class LoginPage{

    page: Page
    userName: Locator
    password: Locator
    loginButton: Locator
    
    constructor(page: Page){
        this.page = page
        this.userName = page.locator("#userEmail")
         this.password = page.locator("#userPassword")
         this.loginButton = page.locator("#login")
    }


async pageLaunch(){
    await this.page.goto("https://rahulshettyacademy.com/client");
}

async validLogin(userName: string, password: string ){
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();

}


}
// module.exports = {LoginPage}