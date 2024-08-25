import { test, expect } from '@playwright/test';

test.describe('MenuBar Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });

    test('renders all menu items', async ({ page }) => {
        await expect(page.getByText('Home')).toBeVisible();
        await expect(page.getByText('DJ Sets')).toBeVisible();
        await expect(page.getByText('Playlists')).toBeVisible();
        await expect(page.getByText('Likes')).toBeVisible();
        await expect(page.getByText('Plans & Pricing')).toBeVisible();
    });

    test('navigates to home page when Home is clicked', async ({ page }) => {
        await page.getByText('Home').click();
        await expect(page).toHaveURL('http://localhost:3000');
    });

    test('opens DJ Sets submenu and navigates to Convert DJ Set page', async ({ page }) => {
        await page.getByText('DJ Sets').click();
        await page.getByText('Convert DJ Set').click();
        await expect(page).toHaveURL('http://localhost:3000/dj');
    });

    test('opens Playlists submenu and navigates to Analyze Playlist page', async ({ page }) => {
        await page.getByText('Playlists').click();
        await page.getByText('Analyze Playlist').click();
        await expect(page).toHaveURL('http://localhost:3000/playlist');
    });

    test('opens Likes submenu and navigates to Liked Sets page', async ({ page }) => {
        await page.getByText('Likes').click();
        await page.getByText('Liked Sets').click();
        await expect(page).toHaveURL('http://localhost:3000/djSets?isLiked=True&userSortField=liked_date');
    });

    test('navigates to Plans & Pricing page', async ({ page }) => {
        await page.getByText('Plans & Pricing').click();
        await expect(page).toHaveURL('http://localhost:3000/pricing');
    });
});
