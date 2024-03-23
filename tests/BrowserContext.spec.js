import {test, expect} from '@playwright/test'

test('Browser Context Playwright test', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    //await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');

})


