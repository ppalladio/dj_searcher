import { test, expect } from '@playwright/test';

test.describe('UserMenu Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });
	
    test('should render the UserMenu with avatar', async ({ page }) => {
        const avatar = await page.getByTestId('avatar-image');
        await expect(avatar).toBeVisible();
        await expect(avatar).toHaveAttribute('alt', '@shadcn');
        await expect(avatar).toHaveAttribute('src', 'https://github.com/shadcn.png');
    });

    test('should open dropdown menu on click', async ({ page }) => {
        // Click the avatar to open the dropdown
        await page.getByTestId('avatar-image').click();

        // Check if the dropdown menu is visible
        const dropdownMenu = await page.getByTestId('dropdown-menu');
        await expect(dropdownMenu).toBeVisible();

        // Check if all menu items are present
        const menuItems = ['My Account', 'Subscription', 'Refer a friend', 'Logout'];
        for (const item of menuItems) {
            const menuItem = await page.locator(`text=${item}`);
            await expect(menuItem).toBeVisible();
        }
    });
});
