const {LoginPage} = require('../POM/LoginPage')
const {ProductPage}= require('../POM/ProductPage')
const {MyCartPage}= require('../POM/MyCartPage')

class POManager{
    constructor(page){
        this.page = page
        this.loginPage = new LoginPage(page)
        this.productPage = new ProductPage(page)
        this.myCartPage = new MyCartPage(page)


    }

    //  dont use async. because it only creates and sent the object not performing and action
getLoginPage(){
    return this.loginPage;
}
getProductPage(){
    return this.productPage
}
getMyCartPage(){
    return this.myCartPage
}



}
module.exports = {POManager}
