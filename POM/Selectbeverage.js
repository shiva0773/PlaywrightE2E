const { expect } = require("@playwright/test")
const data = require('../Data/Pega.json')

exports.Selectbeverage = class Selectbeverage {

constructor(page){

    this.page = page

this.product = page.locator(`//*[@id='menu']//ul/li/a[text()='${data.product}']`)
this.beverage = page.locator("//*[@id='my-beverages-table']//a[text()='Beverages']")
this.prodcutlist = page.locator("//*[@id='shopping_seasoning_products']//tbody//td[@class='product']")
this.item =(item) => page.locator(`//*[@class='product_list sortable']//tbody//td//a[text()='${item}']`)
this.order_txt = page.locator("#login_button")




}

async selectproduct(product){
    await this.product.click()
    await this.beverage.click()
    
await this.page.waitForTimeout(2000) 

  const itemLocator = this.item(product);
    if (await itemLocator.count() > 0) {
        await itemLocator.click({ force: true });
        await expect(this.order_txt).toBeVisible();
    } else {
        throw new Error(`Product "${product}" not found in the list.`);
    }
  
await expect( this.order_txt).toBeVisible()
 

}
}