import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { SecureAreaPage } from '../pages/secure-area.page';

test('user can log in and then log out (refactored)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const securePage = new SecureAreaPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
  await expect(page.locator(securePage.logoutBtn)).toBeVisible();

  await securePage.logout();

  await expect(page).toHaveURL('https://the-internet.herokuapp/login');
  await expect(page.locator(loginPage.submitBtn)).toBeVisible();
});
