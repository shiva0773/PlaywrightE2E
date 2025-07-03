import { test, expect } from '@playwright/test';
const { loginpega, data, selectbeverage, placeorder, billinginfo, cardinfo,today } = require('../testSetup');




test.beforeEach(async ({ page }) => {


    const Login = new loginpega.login(page)
    await Login.Login(process.env.username1, process.env.password)



})

test('Order beverages', async ({ page }) => {
 test.setTimeout(60000)

    for (let item of data.items){

    

    const Selectbeverage = new selectbeverage.Selectbeverage(page)
    await Selectbeverage.selectproduct(item)
    await page.screenshot({ path: 'screenshot.png' })

    const Placeorder = new placeorder.order(page)
    await Placeorder.placeorder()
    await page.screenshot({ path: 'screenshot1.png' })


    const BillingAddress = new billinginfo.BillingAddress(page)
    await BillingAddress.biilingdetails()

    await page.screenshot({path:`Screenshots/Pega/BillingAddress/${item}_/${today}.png`})

    const CardDetails = new cardinfo.cardDetails(page)

    await CardDetails.fillCardDetails(item)

    }  
})

