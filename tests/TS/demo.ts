
let message: string = "Hello";
message = "bye";
console.log(message);

let age: number = 29
console.log(age);

let isActive: boolean = true;

let numArray: number[] = [25, 36, 45]

let data: any = "This could be anything"
data = 25;
//  convert to js and then run
// convert ==  tsc folder/file name
// tsc tests/TS/demo.ts(it is only working)
//now same code with js was created
// node tests/TS/demo.js  => to run the js code

// for funtions
function add(a: number, b: number): number {
    return a + b
}

// object level
let userName: { name: string, age: number, salary: any } = { name: "Vignesh", age: 29, salary: "25" }
userName.salary = "95000"


//  class level
// import  and give type to pages, locators and fixtures, inside constructors also define it
import { test as base, type Page, type Locator } from '@playwright/test';
class LoginPage {

    page: Page;
    userName: Locator
    password: Locator
    loginButton: Locator
    constructor(page: Page) {
        this.page = page
        this.userName = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.loginButton = page.locator("#login")
    }


    async pageLaunch() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(userName: string, password: string) {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();

    }


}
module.exports = { LoginPage }