# PlayWright_Test
### 1. Clone the repository
git clone https://github.com/soorya474/Playwright_Test.git

### 2. Install dependencies
npm install

### 3. Install Playwright/Browser engines
npx install playwright

### 4. Run tests
npx playwright test

### 5. Run tests in specific browser
npx playwright test --project=chromium

### 6. Run in headed mode
npx playwright test --headed

### 7. HTML Report
npx playwright show-report

### Project Structure

.
├── tests/                  # Test files 
├── pages/                  # Page Object Models (e.g., LoginPage.ts)
├── playwright.config.ts    # Test runner configuration
├── testData/               # Testdata files                 
└── README.md
