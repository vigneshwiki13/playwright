class ProductPage{
    constructor(page){
        this.page = page;
        this.productContainer = this.page.locator(".card-body")


    }

   
    async productSelectAndAddCart(productName){
        await this.productContainer.last().waitFor();
        for (let i = 0; i < await this.productContainer.count(); i++) {
      const optionProduct = await this.productContainer.nth(i).locator("b").textContent();
      console.log(optionProduct);
      if (optionProduct === productName) {
         console.log(optionProduct);
         await this.productContainer.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
   await this.page.locator("[routerlink*='cart']").click();


    }

   
//    console.log(await productContainer.allTextContents());
   // productContainer.count()

   
}
module.exports = {ProductPage}