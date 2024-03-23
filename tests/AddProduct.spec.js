import { test, expect } from '@playwright/test'

test.only('Order Item', async ({ page }) => {

    const username = 'ola@yopmail.com';
    const password = 'Computer1'
    const productName = 'IPHONE 13 PRO'
    const cardNumber = '4444444444444'
    const cvv = '123'
    const nameOfBuyer = 'Automation Tester'
    const coupon = 'rahulshettyacademy'
    const couponAppliedText = 'Coupon Applied'
    const country = 'Nigeria'
    let index
    let indexOfCountry
    let a = 0

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill(username);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();

    await page.locator('.card-body h5').last().waitFor();
    const allProducts = await page.locator('.card-body h5').allTextContents();
    if (allProducts.includes(productName)) {
        index = allProducts.indexOf(productName);
        await page.locator('.w-10').nth(index).click();
    }

    await page.locator('.fa-shopping-cart').first().waitFor();
    await page.locator('.fa-shopping-cart').first().click();
    await expect(page.locator('.cartSection h3')).toHaveText(productName);
    await page.locator('.subtotal .btn').click();
    await page.locator('.field input').first().fill(' ');
    await page.locator('.field input').first().fill(cardNumber);
    await page.locator('.field input').nth(1).fill(cvv);
    await page.locator('.field input').nth(2).fill(nameOfBuyer);
    await page.locator('.field input').nth(3).fill(coupon);
    await page.locator('.field .mt-1').click();

    await page.locator('.mt-1').last(2).waitFor()//Waiting for coupon applied code to be displayed

    //await page.waitForTimeout(3000)
    await expect(page.locator('.mt-1').nth(1)).toContainText(couponAppliedText);

    await page.waitForLoadState('networkidle');

    await page.locator('.form-group input').click();
    await page.locator('.form-group input').pressSequentially('Niger');

    //await page.waitForLoadState('networkidle');
    await page.locator('.ta-results .ta-item').first().waitFor();

    //await expect(page.locator('.ta-results .ta-item').nth(0)).toBeVisible()
    const countries = await page.locator('.ta-results .ta-item').allTextContents();

    //indexOfCountry = countries.indexOf(country);

    if (countries.includes(` ${country}`)) {
        indexOfCountry = countries.indexOf(country);
    }

    await page.locator('.ta-results .ta-item').nth(indexOfCountry).click();
    await page.locator('.action__submit').click();

    await page.waitForLoadState('networkidle'); //Waiting for order number
    await page.locator('.em-spacer-1 .ng-star-inserted').waitFor() //Waiting for order number

    const orderNumberExtracted = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();

    const orderNumberArray = orderNumberExtracted.trim().split(' ')[1].split(' ');

    const orderNumber = orderNumberArray[0];
    //console.log(orderNumber);
    await page.locator('tbody tr label').first().click();

    await page.waitForLoadState('networkidle'); //Waiting for order number in orders
    await page.locator(".ng-star-inserted [scope='row']").nth(0).waitFor() //Waiting for order number in orders

    const allOrderNumbers = await page.locator(".ng-star-inserted [scope='row']").allTextContents();
    console.log(allOrderNumbers);

    let status = false;

    for (const number of allOrderNumbers) {
        if (number === orderNumber) {
            expect(await page.locator(".ng-star-inserted [scope='row']").allTextContents()).toContain(orderNumber);
            status = true
        }
    }
    expect(status).toBeTruthy();
})


test('Using Filter', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.getByLabel('I Agree to the terms and conditions').check();
    await page.getByRole('button').click();
    const allProductsCard = page.locator('.col-lg-3 .card');
    await allProductsCard.last().waitFor();
    await allProductsCard.filter({hasText: 'Nokia Edge'}).getByRole('button').click();
    
})