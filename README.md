# Learning Playwright Fundamentals 2x

A hands-on starter project for learning [Playwright](https://playwright.dev/) end-to-end testing with TypeScript. Part of **The Testing Academy** Playwright Fundamentals course.

## Tech Stack

- [Playwright Test](https://playwright.dev/docs/intro) `^1.61.1`
- TypeScript / Node.js (`@types/node`)

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (ships with Node)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run in headed mode (watch the browser)
npx playwright test --headed

# Run a single spec
npx playwright test tests/example.spec.ts

# Run in UI mode (interactive)
npx playwright test --ui

# Debug a test
npx playwright test --debug
```

## Viewing the Report

After a run, open the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/                              # Test specs organized by module
│   ├── 01_Basics/                      # Basic launches, annotations
│   │   ├── 215_Basic_Launch.spec.ts
│   │   └── 216_Test_Annotation.spec.ts
│   ├── 02_first_tests/                 # BCP, multi-context, multi-page, first test suite
│   │   ├── 217_First_Running_Verify.spec.ts
│   │   ├── 218_BCP.spec.ts
│   │   ├── 219_MultiContext.spec.ts
│   │   ├── 220_BCP_MultiPages.spec.ts
│   │   ├── 221_Test1.spec.ts
│   │   ├── 222_Test2.spec.ts
│   │   ├── 223_BCP_Test_Options.spec.ts
│   │   └── 224_Task_06.spec.ts
│   ├── 03_Locators_Commands/           # Locator strategies and Playwright commands
│   │   ├── 225_LS.spec.ts
│   │   └── 226_Project_VWO_Login.spec.ts
│   ├── 04_Session_Storage/             # Session storage and cookie management
│   ├── 05_Allure_Reporting/            # Allure reporting integration
│   ├── 06_Multiple_Element_/           # Handling multiple elements and element lists
│   ├── 07_WebTables/                   # Web table interaction (read, filter, sort)
│   ├── 08_Web_Select_Frames_Iframe/    # Select dropdowns, frames, iframes
│   ├── 09_Frame_Iframe/                # Deep dive into frames and iframes
│   ├── 10_Keyboard_Hover_Drag_Drop/    # Keyboard, hover, drag-and-drop actions
│   ├── 11_JS_Alerts/                   # JavaScript dialog handling
│   ├── 12_Handle_SVG/                  # SVG element location and interaction
│   ├── 13_Shadow_DOM/                  # Shadow DOM piercing and interaction
│   ├── 14_FileUpload/                  # File upload handling
│   ├── 15_File_Download/               # File download verification
│   ├── 16_Scroll_toElement/            # Element scrolling and page scroll
│   ├── 17_Expect_Assertions/           # Built-in Playwright assertions
│   ├── 18_Test_hooks/                  # Before/after hooks
│   ├── 19_Data_Driven_Testing/         # Parameterized tests with external data
│   ├── 20_Page_Object_Model/           # POM design pattern
│   ├── 21_Fixture/                     # Custom Playwright fixtures
│   ├── 22_Misc_Concepts/               # Miscellaneous advanced concepts
│   ├── 23_Advance_Framework/           # Advanced test framework structure
│   ├── Projects/
│   │   └── template.spec.ts            # Blank project template
│   └── example.spec.ts                 # Sample: title check + "Get started" link
├── playwright.config.ts                # Playwright configuration
├── package.json
└── .gitignore
```

## What's Inside

### Module 1 — Basics (`tests/01_Basics/`)
- **Basic Launch** (`215_Basic_Launch.spec.ts`) — launches `app.vwo.com` and verifies the page title.
- **Test Annotations** (`216_Test_Annotation.spec.ts`) — demonstrates `test.skip`, `test.only`, `test.fail`, `test.slow`, and conditional skipping.

### Module 2 — First Tests (`tests/02_first_tests/`)
- **BCP (Browser-Context-Page)** (`218_BCP.spec.ts`) — low-level Playwright API: launch a browser, create separate contexts (isolated sessions), open pages, and clean up in reverse order.
- **Multi-Context** (`219_MultiContext.spec.ts`) — simulate multiple users (admin + viewer) with separate browser contexts sharing the same browser instance.
- **Multi-Page** (`220_BCP_MultiPages.spec.ts`) — open multiple tabs within the same context (shared cookies/session).
- **Test Isolation** (`221_Test1.spec.ts`, `222_Test2.spec.ts`) — Playwright's automatic `page` fixture isolation; multi-user scenarios using `browser` fixture.
- **Context Options** (`223_BCP_Test_Options.spec.ts`) — custom viewport, locale, timezone, geolocation permissions, and mobile emulation.
- **Task 06 — Multi-Context Apps** (`224_Task_06.spec.ts`) — launches two isolated browser contexts, navigates to different applications (TTACart and TTA Bank), then cleans up.

### Module 3 — Locators & Commands (`tests/03_Locators_Commands/`)
- **Launch Site** (`225_LS.spec.ts`) — navigates to the TTACart app and verifies the page loads.
- **VWO Login with CSS Locators** (`226_Project_VWO_Login.spec.ts`) — demonstrates CSS selector strategies (`#id`, `[name=""]`), auto-waiting, and login error validation with `toContainText`.

### Modules 4–23 (Scaffolded — Coming Soon)

All modules 04–23 are scaffolded and ready for exercises as you progress through the course:

| Module | Topic |
|---|---|
| **04_Session_Storage** | Browser session storage and cookie management |
| **05_Allure_Reporting** | Allure reporting integration for rich test reports |
| **06_Multiple_Element_** | Handling multiple elements (`locator.all()`, loops) |
| **07_WebTables** | HTML web table interaction (read, filter, sort) |
| **08_Web_Select_Frames_Iframe** | `<select>` dropdowns, frames, and iframes |
| **09_Frame_Iframe** | Deep dive into frames and iframe interaction |
| **10_Keyboard_Hover_Drag_Drop** | Keyboard input, hover effects, drag-and-drop |
| **11_JS_Alerts** | JavaScript dialog handling (alert, confirm, prompt) |
| **12_Handle_SVG** | Locating and interacting with SVG elements |
| **13_Shadow_DOM** | Piercing Shadow DOM for element interaction |
| **14_FileUpload** | File upload dialogs and input handling |
| **15_File_Download** | Downloading and verifying files |
| **16_Scroll_toElement** | Scrolling to elements and managing page scroll |
| **17_Expect_Assertions** | Playwright's built-in assertions (`expect`, matchers) |
| **18_Test_hooks** | `beforeEach`, `afterEach`, `beforeAll`, `afterAll` hooks |
| **19_Data_Driven_Testing** | Parameterized tests with external data (JSON, fixtures) |
| **20_Page_Object_Model** | POM design pattern for reusable page abstractions |
| **21_Fixture** | Custom Playwright fixtures for shared test state |
| **22_Misc_Concepts** | Miscellaneous advanced Playwright concepts |
| **23_Advance_Framework** | Building an advanced test framework structure |

### Projects (`tests/Projects/`)
- **Template** (`template.spec.ts`) — a blank spec file for starting new test projects.

### Example (`tests/example.spec.ts`)
Demonstrates two core patterns:
1. **Assertions** — verify the page title matches `/Playwright/`.
2. **Navigation + role locators** — click the *Get started* link and assert the *Installation* heading is visible.

## Configuration Highlights

Defined in `playwright.config.ts`:

- `testDir: './tests'` — where specs live
- `testMatch: ['tests/**/*.spec.ts']` — glob pattern for test files
- `fullyParallel: true` — run test files in parallel
- `reporter: 'html'` — generate an HTML report
- `trace: 'on'` — collect trace for every test (not just retries)
- `screenshot: 'on'` — capture screenshot on each test
- `video: 'on'` — record video for every test
- `headless: false` — run browser visibly (headed mode by default)
- `viewport: { width: 1920, height: 1080 }` — default screen resolution
- Projects for Chromium, Firefox, and WebKit
- CI-aware retries and workers (`process.env.CI`)

## Learn More

- [Playwright Docs](https://playwright.dev/docs/intro)
- [The Testing Academy](https://thetestingacademy.com/)

## License

ISC
