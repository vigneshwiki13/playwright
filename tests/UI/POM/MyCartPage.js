const {test, expect}=require('@playwright/test')
class MyCartPage {
    constructor(page, productName) {
        this.page = page;
        this.infoWrap = this.page.locator(".infoWrap")
        this.myCartPoduct = this.page.locator("text="+productName)
        this.btnCheckout = this.page.locator("text=Checkout")
    }

    async checkout() {
        await this.infoWrap.last().waitFor();
        const myCartPoduct = await this.myCartPoduct.isVisible();
        // await expect(myCartPoduct).toBeTruthy();
        await this.btnCheckout.click();
    }

}
module.exports = { MyCartPage }