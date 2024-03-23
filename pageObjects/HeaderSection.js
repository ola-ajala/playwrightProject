class HeaderSection {


        /**
* @param {import('@playwright/test').Page} page
*/

    constructor(page) {

        this.page = page;
        this.homeButton = page.locator(' .btn-custom').nth(0);
        this.orderButton = page.locator(' .btn-custom').nth(1);
        this.cartButton = page.locator('.fa-shopping-cart').first();
        this.signOutButton = page.locator(' .btn-custom').nth(3);

    }


    async clickOnHomeButton() {

        await this.homeButton.click();

    }

    async clickOnOrderButton() {

        await this.orderButton.waitFor();
        await this.orderButton.click();

    }

    async clickOnCartButton() {

        await this.cartButton.click();

    }

    async signOut() {

        await this.signOutButton.click();

    }



}
module.exports = {HeaderSection};