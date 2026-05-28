const { test, expect } =
require('@playwright/test');

const LoginPage =
require('../pages/LoginPage');

test('Login Test', async ({ page }) => {

    await page.goto(
'https://opensource-demo.orangehrmlive.com/'
    );

    const loginPage =
        new LoginPage(page);

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await expect(page)
        .toHaveURL(/dashboard/);
});