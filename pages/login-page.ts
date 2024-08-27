import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly logoRSK: Locator;
  readonly masukHeader: Locator;
  readonly emailInput: Locator;
  readonly katasandiInput: Locator;
  readonly eyeIcon: Locator;
  readonly lupaKatasandiLink: Locator;
  readonly masukButton: Locator;
  readonly googleButton: Locator;
  readonly facebookButton: Locator;
  readonly daftarLink: Locator;
  readonly invalidCredentialError: Locator;
  readonly blankEmailError: Locator;
  readonly blankKatasandiError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoRSK = page.getByAltText('Logo Rumah Siap Kerja')
    this.masukHeader = page.locator('h2', { hasText: 'Yuk Masuk Akun RSK' });
    this.emailInput = page.locator('data-testid=TextInputAlmatEmailLogin')
    this.katasandiInput = page.locator('data-testid=TextInputPasswordLogin')
    this.eyeIcon = page.locator('//*[contains(@class,"tw-w-5 tw-shrink-0 tw-grow-0 lg:tw-w-6")]/..')
    this.lupaKatasandiLink = page.locator('data-testid=TextLinkLupaKataSandiLogin')
    this.masukButton = page.locator('data-testid=ButtonMasukLogin')
    this.googleButton = page.locator('data-testid=ButtonAkunGoogleLogin')
    this.facebookButton = page.locator('data-testid=ButtonFacebookLogin')
    this.daftarLink = page.locator('a', { hasText: 'Daftar' })
    this.invalidCredentialError = page.locator('data-testid=MessageBoxAlamatEmailAtauKataSandiTidakSesuaiLogin')
    this.blankEmailError = page.locator('data-testid=ErrorStateWajibMengisiAlamatEmailLogin')
    this.blankKatasandiError = page.locator('data-testid=ErrorStateWajibMengisiKataSandiLogin')
  }

  async goto() {
    await this.page.goto('https://rumahsiapkerja.com/masuk');
  }

  async clickLogo() {
    await this.logoRSK.click();
    await expect(this.page).toHaveURL('https://rumahsiapkerja.com');
  }

  async clickEyeIcon() {
    await this.eyeIcon.click();
  }

  async login(email, katasandi) {
    await this.emailInput.fill(email);
    await this.katasandiInput.fill(katasandi);
  }

  async submit() {
    await this.masukButton.click();
  }

  async lupaKatasandi() {
    await this.lupaKatasandiLink.click();
    await expect(this.page).toHaveURL('https://rumahsiapkerja.com/lupa-password');
  }

  async daftar() {
    await this.daftarLink.click();
    await expect(this.page).toHaveURL(/.*daftar/);
  }
}