import { test, expect } from '@playwright/test';

test( "Verify the Url that have Launched", async ( { page } ) => {

    await page.goto( "https://app.vwo.com/#/login" );
    await expect( page ).toHaveTitle( "Login - Wingify" );

} );