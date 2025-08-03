import { Page } from '@playwright/test';

export class SecureAreaPage {
    readonly page: Page;
    readonly logoutBtn = 'a[href="/logout"]';

    constructor(page: Page) {
        this.page = page;
    }

    async logout() {
        await this.page.click(this.logoutBtn);
    }
}