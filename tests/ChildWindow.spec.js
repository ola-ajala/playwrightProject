import {test, expect} from '@playwright/test'


test('Handling Child Window', async({browser})=>{
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');


        const [childPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('body a').nth(0).click()
        ]);
        

        console.log(await childPage.locator('.col-md-8 p:nth-child(2)').textContent());
        await expect(childPage.locator('.inner-box h1')).toContainText('Document');
        const text = await childPage.locator('.col-md-8 p:nth-child(2)').textContent();
        const uname = text.split('@')[1].split(' ')[0]

        await page.locator('#username').fill(uname);
        await page.pause()
})

