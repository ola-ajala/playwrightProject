import {test, expect} from '@playwright/test'

test('Extracting Text From Multiple WebElements', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('ola@yopmail.com');
    await page.locator('#userPassword').fill('Computer1');
    await page.locator('#login').click();
    //const firstItem = await page.locator('.card-body h5 b').nth(0).textContent()
    await page.waitForLoadState('networkidle');
    const allItems = await page.locator('.card-body h5 b').allTextContents();
    console.log(allItems);
    const indexOfiPhone = await allItems.indexOf('IPHONE 13 PRO');
    await page.locator('.w-10').nth(indexOfiPhone).click();
    await page.waitForTimeout(5000)
    
});