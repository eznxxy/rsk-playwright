import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  readonly mulaiSekarangButton: Locator;

  constructor(page: Page) {
    super(page);
    this.mulaiSekarangButton = page.getByText('Mulai Sekarang!');
  }

  async goto() {
    await this.page.goto('https://rumahsiapkerja.com');
  }

  async mulaiSekarang() {
    await this.mulaiSekarangButton.click();
  }
}