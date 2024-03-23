class ProductPage {

    /**
* @param {import('@playwright/test').Page} page
*/

    constructor(page) {

        this.page = page;
        this.zaraCoat = page.locator('.col-lg-4').nth(0);
        this.addidasOriginal = page.locator('.col-lg-4').nth(1);
        this.iPhone = page.locator('.col-lg-4').nth(2);
        this.allProducts = page.locator('.col-lg-4');
    }

    async addProductToCart(productName) {
        await this.allProducts.last().waitFor();
        await this.allProducts.filter({ hasText: productName }).locator('.w-10').click();
    }


    
}

module.exports = { ProductPage };