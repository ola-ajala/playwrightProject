import { expect, test } from '@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'
import { ProductPage } from '../pageObjects/ProductPage';
import { HeaderSection } from '../pageObjects/HeaderSection';


test('Sign In Page Object Test', async ({ page }) => {


    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page)
    const headerSection = new HeaderSection(page)

    const username = 'ola@yopmail.com';
    const password = 'Computer1';
    const zara = 'ZARA COAT 3';
    const iphone = 'IPHONE 13 PRO';

    await loginPage.goToRahulShettyPage();
    await loginPage.loginToPage(username, password);
    await productPage.addProductToCart(iphone);
    await productPage.addProductToCart(zara);
    await headerSection.clickOnOrderButton()
    await headerSection.
    await page.pause();


})