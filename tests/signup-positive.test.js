const { test, expect }= require("@playwright/test");
const { SignupPage } = require("../pages/SignupPage.js");
const positiveData = require("../test-data/positive-signup.json"); 

test.describe("Signup Positive Cases", () => {
  for (const data of positiveData) {
    test(`Verify successful signup for ${data.email}`, async ({ page }) => {
      const signup = new SignupPage(page);
      await signup.goto();
      //using spread sytnax to copy all the data kye-value pair and additionally adding new key-value pair
        const testData = {
      ...data,
      email: `validuser${Date.now()}@email.com`
    };

      await signup.fillForm(testData);

    //  Validate API - 201 response + body
     const responsePromise = page.waitForResponse((res) => {
        return res.url().includes("/api/account") && res.status() === 201;
      });
      await signup.submit();
      const response = await responsePromise;
      console.log(response.url());
      const responseBody = await response.json();
      expect(responseBody.account.email).toBe(testData.email);
      expect(responseBody.account.firstName).toBe(testData.firstName);
      expect(responseBody.account.lastName).toBe(testData.lastName);
      expect(responseBody.account.phone ).toBe(testData.phone);
    
      await expect(page).toHaveTitle("Get A Quote");
    });
  }
});