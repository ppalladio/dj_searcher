import { test, expect } from '@playwright/test';

test.describe('DJPage', () => {
    const baseURL ='http://localhost:3000' 
    test.beforeEach(async ({ page }) => {
        await page.goto(`${baseURL}/dj`);
    });
    test('renders the Convert DJ Set card', async ({ page }) => {
		await expect(page.getByTestId('dj-url-input')).toBeVisible();
        await expect(page.getByText('Convert DJ Set')).toBeVisible();
        await expect(page.getByTestId('dj-clear-button')).toBeVisible();
        await expect(page.getByTestId('dj-convert-button')).toBeVisible();
    });

    test('shows error toast for empty URL', async ({ page }) => {
        await page.getByRole('button', { name: 'Convert' }).click();
        await expect(page.getByText('Please enter a URL')).toBeVisible();
    });

    test('shows error toast for invalid URL', async ({ page }) => {
        await page.getByPlaceholder('Youtube Video URL').fill('invalid-url');
        await page.getByRole('button', { name: 'Convert' }).click();
        await expect(page.getByText('Invalid URL format')).toBeVisible();
    });

    test('clears input when Clear button is clicked', async ({ page }) => {
        await page.getByPlaceholder('Youtube Video URL').fill('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        await page.getByTestId('dj-clear-button').click();
        await expect(page.getByPlaceholder('Youtube Video URL')).toHaveValue('');
    });

    test('shows hover card content when question mark is hovered', async ({ page }) => {
        await page.getByTestId('question-icon').hover();
        await expect(page.getByText('How to use it:')).toBeVisible();
        await expect(page.getByText('Pick a video from Youtube that contains multiple songs')).toBeVisible();
    });

   
});