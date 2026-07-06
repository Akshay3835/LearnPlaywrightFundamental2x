import { test, expect } from '@playwright/test';

test( "Verify our first TC", async ( { page } ) => {

    await page.goto( "https://app.vwo.com" );
    await expect( page ).toHaveTitle( "Login - Wingify" );
    const logo_image = await page.locator( "#vow-login-logo" ); // #vow-login-logo is id which is collected from inspect element
    await expect( logo_image ).toBeVisible();

} );