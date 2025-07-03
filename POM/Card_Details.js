import { faker } from '@faker-js/faker';
const data = require('../Data/Pega.json');
import { expect } from '@playwright/test';
import { time } from 'console';


exports.cardDetails = class cardDetails {

    constructor(page) {
        this.page = page
        // Locators for card details form elements

        this.security = this.page.locator('#security_code')
        this.cardnumber = this.page.locator('#card_number')
        this.submit_btn = this.page.locator('#submit_button')
        this.cardtype = this.page.locator('#card_type');
        this.expiry_month = this.page.locator('#expiry_month');
        this.expiry_year = this.page.locator('#expiry_year');
        this.ordernumber = this.page.locator("//*[contains(text(),'Order #')]")




    }

    async fillCardDetails(item) {
        await this.cardtype.selectOption({ value: data.cardtype })
        await this.security.fill(data.securitycode)
        await expect(this.cardnumber).toBeVisible({ timeout: 5000 })
        await this.cardnumber.fill(data.cardnumber)
        await expect(this.expiry_month).toBeVisible({ timeout: 5000 })
        await this.expiry_month.selectOption({ value: data.expirymon })
        await this.expiry_year.selectOption({ value: data.expirye })
        await this.submit_btn.click()
        await expect(this.ordernumber).toBeVisible({ timeout: 10000 })

        const Ordernumber = await this.ordernumber.textContent();
        console.log(`Order number is: ${Ordernumber}`);
        await this.page.waitForLoadState('networkidle');
     
        try {
            await this.page.screenshot({
                path: `Screenshots/Pega/Ordernumber_${item}_${Ordernumber}.png`,
                timeout: 60000
            });
        } catch (err) {
            console.warn('Screenshot failed:', err);
        }

    }
}
