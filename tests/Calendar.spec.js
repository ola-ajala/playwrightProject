import { test, expect } from '@playwright/test'

test('Calendar Validation', async({page})=>{


    let day = '24';
    let month = '12';
    let year = '2027';


    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator('.react-date-picker__inputGroup').first().click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months [type='button']").nth(month-1).click();
    await page.locator('.react-date-picker__calendar').getByText(day).click();
     
    console.log(await page.locator("[name='date']").getAttribute('value'))

    await expect(page.locator("[name='date']")).toHaveValue(`${year}-${month}-${day}`)
})


test('Dialoge', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    page.on('dialog', (dialog)=>{
        dialog.accept()
    })

    await page.locator('#confirmbtn').click();

})

test('Mouse Hover', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#mousehover').hover();
    await page.locator('.mouse-hover-content a').nth(1).click();

})