import {test as base} from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";
import { Navbar } from "../pages/navbar";
import { Footer } from "../pages/footer";
import { RegisterPage } from "../pages/register-page";
import { ForgotPasswordPage } from "../pages/forgot-password-page";

type Fixtures = {
    navbar: Navbar,
    homePage: HomePage,
    registerPage: RegisterPage,
    loginPage: LoginPage,
    forgotPasswordPage: ForgotPasswordPage,
    footer: Footer,
}

export const test = base.extend<Fixtures>({
    navbar: async ({ page }, use) => {
        await use(new Navbar(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    forgotPasswordPage: async ({ page }, use) => {
        await use(new ForgotPasswordPage(page))
    },
    footer: async ({ page }, use) => {
        await use(new Footer(page))
    },
})

export { expect } from "@playwright/test"