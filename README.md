# Learn Playwright Fundamentals 2x

This project is a hands-on learning repository for mastering **Playwright**, a modern end-to-end testing framework for web applications.

## Setup

```bash
npm install
```

## Running Tests

Run all tests across all configured browsers (Chromium, Firefox, WebKit):

```bash
npx playwright test
```

Run tests in headed mode (see the browser UI):

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

View the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
├── tests/                  # Test files
│   └── example.spec.ts     # Example test suite
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project dependencies
└── .gitignore              # Git ignore rules
```
