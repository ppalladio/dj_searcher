import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });
    test('should render the BentoGrid with correct items', async ({ page }) => {
        // Navigate to the home page

        // Wait for the BentoGrid to be visible
        await page.waitForSelector('.max-w-screen');

        // Check if the correct number of BentoGridItems are rendered
        const items = await page.$$('.max-w-screen > div');
        expect(items).toHaveLength(5);
    });


});
