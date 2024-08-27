import { test, expect } from '../utils/fixtures';

test('Check login page when masuk from CTA Masuk on home page [Dekstop View]', async ({ homePage, loginPage }) => {
  await homePage.goto();
  await homePage.masuk();
  await expect(loginPage.logoRSK).toBeVisible();
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.katasandiInput).toBeVisible();
  await expect(loginPage.lupaKatasandiLink).toBeVisible();
  await expect(loginPage.googleButton).toBeVisible();
  await expect(loginPage.facebookButton).toBeVisible();
});

test('Check login page when masuk from CTA Masuk on daftar page [Desktop View]', async ({ homePage, registerPage, loginPage }) => {
  await homePage.goto();
  await homePage.daftar();
  await registerPage.masuk();
  await expect(loginPage.logoRSK).toBeVisible();
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.katasandiInput).toBeVisible();
  await expect(loginPage.lupaKatasandiLink).toBeVisible();
  await expect(loginPage.googleButton).toBeVisible();
  await expect(loginPage.facebookButton).toBeVisible();
});

test('Click icon RSK on header [Desktop View]', async ({ homePage, loginPage }) => {
  await homePage.goto();
  await homePage.masuk();
  await loginPage.clickLogo();
  await expect(homePage.mulaiSekarangButton).toBeVisible();
})

test('Check eye icon on field kata sandi [Desktop View]', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('marjanramdhani@gmail.com', 'rawr');
  await loginPage.clickEyeIcon();
})

test('Click CTA Lupa kata sandi [Desktop View]', async ({ loginPage, forgotPasswordPage }) => {
  await loginPage.goto();
  await loginPage.lupaKatasandi();
  await expect(forgotPasswordPage.lupaKatasandiHeader).toBeVisible();
  await expect(forgotPasswordPage.emailInput).toBeVisible();
  await expect(forgotPasswordPage.aturUlangButton).toBeVisible();
  await expect(forgotPasswordPage.masukLink).toBeVisible();
})

test('Click CTA Daftar [Desktop View]', async ({ loginPage, registerPage }) => {
  await loginPage.goto();
  await loginPage.daftar();
  await expect(registerPage.logoRSK).toBeVisible();
  await expect(registerPage.emailInput).toBeVisible();
  await expect(registerPage.katasandiInput).toBeVisible();
  await expect(registerPage.daftarButton).toBeVisible();
  await expect(registerPage.googleButton).toBeVisible();
  await expect(registerPage.facebookButton).toBeVisible();
})

test('Cant login when input invalid Email & Kata Sandi [Desktop View]', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('d.e.s.a.p.i.2.4.6.7@gmail.com', 'dummy');
  await loginPage.submit();
  await expect(loginPage.invalidCredentialError).toBeVisible();
})

test('Cant Login when input wrong Email [Desktop View]', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('data.rahko@gmail', 'dummy123');
  await loginPage.submit();
  await expect(loginPage.blankEmailError).toBeVisible();
})

test('Cant login when input wrong Kata Sandi [Desktop View]', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('d.e.s.a.p.i.2.4.6.7@gmail.com', 'dummy');
  await loginPage.submit();
  await expect(loginPage.invalidCredentialError).toBeVisible();
})

test('Cant Login when input kata sandi Null [Desktop view]', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('d.e.s.a.p.i.2.4.6.7@gmail.com', '');
  await loginPage.submit();
  await expect(loginPage.blankKatasandiError).toBeVisible();
})

test('Click CTA Daftar [Mobile View]', async ({ page, registerPage, loginPage }) => {
  await page.setViewportSize({ width: 412, height: 914 })

  await loginPage.goto();
  await loginPage.daftar();
  await expect(registerPage.emailInput).toBeVisible();
  await expect(registerPage.katasandiInput).toBeVisible();
  await expect(registerPage.daftarButton).toBeVisible();
})
