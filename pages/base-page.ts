import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  // Navbar
  readonly kategoriDropdown: Locator;
  readonly searchInput: Locator;
  readonly promoLink: Locator;
  readonly notifikasiButton: Locator;
  readonly daftarLink: Locator;
  readonly masukLink: Locator;
  readonly imageProfileButton: Locator;

  //Footer
  readonly tentangKamiLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.kategoriDropdown = page.locator('data-testid=ButtonMenuNavbarKategoriHomepage')
    this.searchInput = page.locator('data-testid=ButtonSearchHomepage')
    this.promoLink = page.locator('data-testid=TextlinkPromoHomepage')
    this.notifikasiButton = page.locator('data-testid=ImgLoncengHomepage')
    this.daftarLink = page.locator('a', { hasText: /^Daftar$/ })
    this.masukLink = page.locator('a', { hasText: 'Masuk' })
    this.imageProfileButton = page.locator('data-testid=ImgButtonProfileHomepage')
  }

  async masuk() {
    await this.masukLink.click();
    await expect(this.page).toHaveURL(/.*masuk/);
  }

  async daftar() {
    await this.daftarLink.click();
    await expect(this.page).toHaveURL(/.*daftar/);
  }
}