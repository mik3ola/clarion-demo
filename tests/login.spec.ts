import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Login using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  
  // Check for login success message
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
