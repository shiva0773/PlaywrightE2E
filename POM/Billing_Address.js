const data = require('../Data/Pega.json')
import { expect } from '@playwright/test'
const { faker } = require('@faker-js/faker');

exports.BillingAddress = class BillingAddress {


    constructor(page) {



        this.page = page

        this.firstname = page.locator('#bfirst_name')
        this.lastname = page.locator('#blast_name')
        this.company = page.locator('#bcompany_name')
        this.address = page.locator('#bstreet_address')
        this.zip = page.locator('#bzip_code')
        this.areacode = this.page.locator('#barea_code')
        this.phonenumber = this.page.locator('#bprimary_phone')
        this.shipto = page.locator('#ship_to_bill')
        this.next_btn = page.locator('#next2_button')
        // this.cardtype = this.page.locator("//*[@id='card_type']//option")
        

    }


    async biilingdetails() {

        await this.firstname.fill(data.fname)
        await this.lastname.fill(data.lname)
        await this.company.fill(data.company)
        await this.address.fill(data.address)
        await this.zip.fill(data.zip)
        await this.areacode.fill(data.areacode)
        await this.phonenumber.fill(data.phone)
        await this.shipto.click()
        await this.next_btn.click()
        await this.page.waitForLoadState('networkidle')
      
    }








}