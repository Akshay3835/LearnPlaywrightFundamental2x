import { chromium } from 'playwright';

async function multiContextTest() {

    let browser = await chromium.launch( { headless: false } );

    //Context 1

    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto( "https://app.thetestingacademy.com/playwright/ttacart/" );
    console.log( "Successfully logined with context 1" );

    //Context 2

    let context2 = await browser.newContext();
    let page2 = await context2.newPage();
    await page2.goto( "https://tta-bank-digital-973242068062.us-west1.run.app/" );
    console.log( "Successfully loggined with Context 2" );

    await context1.close();
    await context2.close();
    await browser.close();


}

multiContextTest();