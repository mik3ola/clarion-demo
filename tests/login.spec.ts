import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Login using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('clarionUser', 'clarionPass');
  await expect(page).toHaveURL('https://example.com/dashboard');
});
