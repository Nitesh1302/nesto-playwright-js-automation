const { test, expect }= require("@playwright/test");
const { SignupPage } = require("../pages/SignupPage.js");
const negativeData = require("../test-data/negative-signup.json"); 

test.describe("Signup Negative Cases", () => {
  for (const data of negativeData) {
    test(`Validate ${data.scenario}`, async ({ page }) => {
      const signup = new SignupPage(page);
      await signup.goto();

      await signup.fillForm(data);
      await signup.submit();
    if (data.expectedErrors && data.expectedErrors.length > 0) {
        for (const errorText of data.expectedErrors) {
          await expect(page.getByText(errorText)).toBeVisible();
        }
      } 
      else if (data.expectedError) { 
          await expect(page.getByText(data.expectedError)).toBeVisible();
      }
    });
  }
});
