import { test, expect } from '@playwright/test';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

test.describe('AmitToolsX PDF Tools Verification', () => {
  let server;

  test.beforeAll(async () => {
    server = exec('python3 -m http.server 3000');
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  test.afterAll(async () => {
    if (server) server.kill();
  });

  test('should display PDF tools on desktop', async ({ page }) => {
    await page.goto('http://localhost:3000/tools.html');
    await page.setViewportSize({ width: 1280, height: 800 });

    const pdfTitle = page.locator('h2:has-text("PDF Tools")');
    await expect(pdfTitle).toBeVisible();

    const imagesToPdfBtn = page.locator('#create-pdf-from-images');
    await expect(imagesToPdfBtn).toBeVisible();

    const mergePdfBtn = page.locator('#merge-pdfs-btn');
    await expect(mergePdfBtn).toBeVisible();

    await page.screenshot({ path: 'verification/pdf_tools_desktop.png', fullPage: true });
  });

  test('should display PDF tools on mobile', async ({ page }) => {
    await page.goto('http://localhost:3000/tools.html');
    await page.setViewportSize({ width: 375, height: 667 });

    const pdfTitle = page.locator('h2:has-text("PDF Tools")');
    await expect(pdfTitle).toBeVisible();

    await page.screenshot({ path: 'verification/pdf_tools_mobile.png', fullPage: true });
  });
});
