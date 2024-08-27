import { expect, type Locator, type Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly logoRSK: Locator;
  readonly daftarHeader: Locator;
  readonly emailInput: Locator;
  readonly katasandiInput: Locator;
  readonly daftarButton: Locator;
  readonly googleButton: Locator;
  readonly facebookButton: Locator;
  readonly masukLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoRSK = page.getByAltText('Logo Rumah Siap Kerja')
    this.daftarHeader = page.locator('h2', { hasText: 'Yuk Daftar Sekarang' });
    this.emailInput = page.locator('data-testid=TextInputEmailDaftar')
    this.katasandiInput = page.locator('data-testid=TextInputKataSandiDaftar')
    this.daftarButton = page.locator('data-testid=ButtonDaftar')
    this.googleButton = page.locator('data-testid=ButtonAkunGoogleLogin')
    this.facebookButton = page.locator('data-testid=ButtonFacebookLogin')
    this.masukLink = page.locator('data-testid=TextLinkMasukDaftar')
  }

  async goto() {
    await this.page.goto('https://rumahsiapkerja.com/daftar');
  }

  async masuk() {
    await this.masukLink.click();
    await expect(this.page).toHaveURL(/.*masuk/);
  }
}