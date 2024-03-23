class LoginPage {

/**
* @param {import('@playwright/test').Page} page
*/

    constructor(page) {

        this.page = page;
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.signInbutton = page.locator('[value="Login"]');
    }

    async goToRahulShettyPage() {

        await this.page.goto('https://rahulshettyacademy.com/client');

    }

    async loginToPage(username, password) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();


    }
}

module.exports = { LoginPage };