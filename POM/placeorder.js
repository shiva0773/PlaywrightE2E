const data = require('../Data/Pega.json')
const { expect } = require('@playwright/test');

exports.order = class order {


constructor(page){

this.page= page

this.orderbutton = page.locator('#login_button')
this.ordertxt =(ordertxt)=> page.locator(`//*[contains(text(),'${ordertxt}')]`)
this.continueshop = page.locator("//*[@name='continue_shopping']")
this.editcart = page.locator("//*[@name='edit_your_cart']")
this.next_btn = page.locator('#next1_button')
this.step1 =(step1)=> page.locator(`//*[contains(text(),'${step1}')]`)
this.step2 =(step2)=> page.locator(`//*[contains(text(),'${step2}')]`)

}

async placeorder(){

await this.orderbutton.click()
await this.page.waitForLoadState('networkidle')
await this.page.waitForTimeout(1000)
// Assertion: Check if order text is visible after clicking order button
const orderTextLocator = this.ordertxt(data.ordertxt);
await expect(orderTextLocator).toBeVisible();
await expect(this.continueshop).toBeEnabled();
await this.editcart.click()
//await expect(this.step1(data.step1)).toBeVisible() 
await this.next_btn.scrollIntoViewIfNeeded()
await this.page.waitForTimeout(500)
await expect(this.next_btn).toBeEnabled() 
await this.next_btn.click()
await expect(this.step2(data.step2)).toBeVisible() 

}



}