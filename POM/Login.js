require('dotenv').config();
const data = require ('../Data/Pega.json')
import { expect } from '@playwright/test';


exports.login = class login {
    constructor(page) {

        this.page = page;

        this.Username = page.locator('#user_name');
        this.password = page.locator('#user_pass');
        this.loginButton = page.locator('#login_button');



    }


async Login(username, password) {
    await this.page.goto(process.env.Url)
    await this.Username.fill(username)
    await this.password.fill(password)
    await this.password.press('Enter'); 
    await this.page.waitForTimeout(500); 
    await this.loginButton.isEnabled();
    await this.loginButton.click();
  await expect(this.page).toHaveTitle(data.title);



}





}