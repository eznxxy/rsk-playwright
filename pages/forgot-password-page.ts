import { expect, type Locator, type Page } from '@playwright/test';

export class ForgotPasswordPage {
  readonly page: Page;
  readonly logoRSK: Locator;
  readonly lupaKatasandiHeader: Locator;
  readonly emailInput: Locator;
  readonly aturUlangButton: Locator;
  readonly masukLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoRSK = page.getByAltText('Logo Rumah Siap Kerja')
    this.lupaKatasandiHeader = page.locator('h2', { hasText: 'Atur Ulang Kata Sandimu' });
    this.emailInput = page.locator('data-testid=TextInputAlamatEmailLupaKataSandi')
    this.aturUlangButton = page.locator('data-testid=ButtonKirimLupaKataSandi')
    this.masukLink = page.locator('a', { hasText: 'Masuk' })
  }

  async goto() {
    await this.page.goto('https://rumahsiapkerja.com/lupa-password');
  }

  async masuk() {
    await this.masukLink.click();
    await expect(this.page).toHaveURL(/.*masuk/);
  }
}