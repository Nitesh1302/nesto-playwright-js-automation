# Nesto Signup Automation

Automated tests for the Nesto Signup page using **Playwright (JavaScript)**.  
Covers positive and negative scenarios, UI field/label validation, and API verification.

---

## ✅ Features Covered

- **Positive Test Cases**: Valid signup with different user data.  
- **Negative Test Cases**: Invalid or missing inputs, duplicate email.  
- **UI Validation**: Field presence, labels, placeholders.  
- **API Validation**: Account creation returns `201` and response contains submitted data.  
- **Bug Reports**: Any issues discovered during testing included in `/bug-reports` folder.  

---

## 🗂 Project Structure

nesto-playwright-js-automation/
│
├─ pages/ # Page Object Model
│ └─ SignupPage.js
├─ tests/ # Test scripts
│ ├─ signup-positive.test.js
│ ├─ signup-negative.test.js
│ └─ signup-ui-structure.test.js
├─ test-data/ # JSON test data
│ ├─ positive-signup.json
│ └─ negative-signup.json
├─ playwright.config.js # Playwright configuration
├─ package.json # Node.js dependencies
└─ README.md # Project documentation
