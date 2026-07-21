import { test, expect } from '@playwright/test';


test( 'Verify login url', async ( { page } ) => {

    await page.goto( "https://app.thetestingacademy.com/playwright/multiple_element_filter" );
    await page.locator( "#email" ).fill( "akshay@testaccadamey.com" );
    await page.locator( "#password" ).fill( "AK@9090" );
    await page.getByRole( 'checkbox', { name: "remember" } ).check();
    await page.getByRole( 'button', { name: 'Login to Practice Account' } ).click();
    await page.waitForTimeout( 3000 );

    await expect( page ).toHaveURL( /email=akshay%40testaccadamey.com&password=AK%409090&remember=yes#login-success/ );
    console.log( "Login successfull" );

    // https://app.thetestingacademy.com/playwright/multiple_element_filter?email=akshay%40testaccadamey.com&password=AK%409090&remember=yes#login-success
} );