import {test, expect} from '@playwright/test'


test('Select DropDown', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('ola@yopmail.com');
    await page.locator('#password').fill('Computer1');
    await page.locator('.form-group select').selectOption('consult')
    await page.pause()


});

