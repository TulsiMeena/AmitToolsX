import { test, expect } from '@playwright/test';

test.describe('AmitToolsX Web App', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000'); // Assuming a local server will be running
    });

    test('Check Navigation and Page Titles', async ({ page }) => {
        await expect(page).toHaveTitle(/AmitToolsX - Advanced Image Resizer/);

        await page.click('text=About Me');
        await expect(page).toHaveTitle(/About Me - AmitToolsX/);

        await page.click('text=Contact Us');
        await expect(page).toHaveTitle(/Contact Us - AmitToolsX/);

        await page.click('text=Privacy Policy');
        await expect(page).toHaveTitle(/Privacy Policy - AmitToolsX/);
    });

    test('Responsive Design Check - Mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        // Check if navigation menu is hidden and mobile menu button is visible
        const mobileMenuButton = page.locator('#mobile-menu-button');
        await expect(mobileMenuButton).toBeVisible();
    });

    test('Responsive Design Check - Desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        const homeLink = page.locator('nav >> text=Home');
        await expect(homeLink).toBeVisible();
    });

    test('Verify Core UI Elements', async ({ page }) => {
        await expect(page.locator('#drop-zone')).toBeVisible();
        await expect(page.locator('h1')).toContainText('Advanced Image Resizer');
    });
});
