# RSK Playwright

This repository contains end-to-end tests for the RSK project using Playwright. Playwright is a powerful tool for automating browsers, enabling you to write tests that simulate real user interactions with your application.

## Installation

To get started with this project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/eznxxy/rsk-playwright.git
cd rsk-playwright
pnpm install
```

## Running Tests

To execute the tests, use the following command:

```bash
npx playwright test
```

## Running Specific Tests

You can run a specific test or set of tests by providing a path or name:

```bash
npx playwright test <filename>
```

## Running Tests with Different Browsers

Playwright supports multiple browsers. You can run tests in a specific browser as follows:

```bash
npx playwright test --project=chromium
npx playwright test --project=google-chrome
```
