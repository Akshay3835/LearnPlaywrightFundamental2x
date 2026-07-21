import { test, expect } from '@playwright/test';


test( 'Verify Terminated employee details', async ( { page } ) => {

    await page.goto( "https://awesomeqa.com/hr/web/index.php/auth/login" );

    await page.getByRole('textbox', { name: 'username' }).fill('admin');
    await page.getByPlaceholder('Password').fill('Awesomeqa@4321');
    await page.getByRole('button', { name: 'Login' }).click();
    
    await page.locator(".oxd-table-row oxd-table-row--with-border oxd-table-row--clickable");

} );