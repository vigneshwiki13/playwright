// const {LoginPage} = require('../POM/LoginPage')     in js
// const {ProductPage}= require('../POM/ProductPage')
// const {MyCartPage}= require('../POM/MyCartPage')
// while importing './for same folder'   and '../for different folder '

// use import in TS  && no need of module.exports just export before class name

import { LoginPage } from "./LoginPage"
import { ProductPage } from "./ProductPage"
import { MyCartPage } from "./MyCartPage"
import { Page } from "@playwright/test"

export class POManager {
    loginPage: LoginPage
    productPage: ProductPage
    myCartPage: MyCartPage
    page: Page

    constructor(page: Page, productName: string) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.productPage = new ProductPage(page)
        this.myCartPage = new MyCartPage(page, productName)


    }

    //  dont use async. because it only creates and sent the object not performing and action
    getLoginPage() {
        return this.loginPage;
    }
    getProductPage() {
        return this.productPage
    }
    getMyCartPage() {
        return this.myCartPage
    }



}
