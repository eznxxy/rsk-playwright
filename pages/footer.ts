import { expect, type Locator, type Page } from '@playwright/test';

export class Footer {
  readonly page: Page;

  //Footer
  readonly tentangKamiLink: Locator;

  constructor(page: Page) {
    this.page = page;
  }
}