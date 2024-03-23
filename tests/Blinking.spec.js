import {test, expect} from '@playwright/test'


test('Select DropDown', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('ola@yopmail.com');
    await expect(page.locator('body a').nth(0)).toHaveClass('blinkingText')


});

test.only('Handling Child Window', async({browser})=>{
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');


        const [childPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('body a').nth(0).click()
        ])
        

        console.log(await childPage.locator('.inner-box h1').textContent());
        await expect(childPage.locator('.inner-box h1')).toContainText('Document');
        await childPage.pause()
})

