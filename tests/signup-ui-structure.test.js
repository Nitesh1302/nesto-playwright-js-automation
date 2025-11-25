const { test, expect }= require("@playwright/test");
const { SignupPage } = require("../pages/SignupPage.js");

test.describe("Signup Page UI/Structure Tests", () => {
  test('Verify all essential fields and labels are present and visible', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.goto();
    
    console.log("Asserting Signup Form Structure - fields and labels.");

    // Check Header and Logo
    await expect(page.getByRole('heading', { name: 'Create a nesto account' })).toBeVisible();
    await expect(page.getByAltText('nesto secure')).toBeVisible(); 
    
    // Check all fields using locators from POM 
    await expect(signup.firstName).toBeVisible();
    await expect(signup.lastName).toBeVisible();
    await expect(signup.email).toBeVisible();
    await expect(signup.phone).toBeVisible();
    await expect(signup.password).toBeVisible();
    await expect(signup.confirmPassword).toBeVisible();
    await expect(signup.province).toBeVisible(); // The combobox/dropdown
    
    // Check Constraint Text 
    await expect(page.getByText('Password must be between 12 and 32 characters')).toBeVisible();

    // Check Checkbox/Terms and Submit Button
    await expect(signup.termsCheckbox).toBeVisible();
    await expect(page.getByText('By checking this box, you agree to be contacted by nesto’s partners')).toBeVisible();
    await expect(signup.submitBtn).toBeVisible();
    await expect(signup.submitBtn).toBeEnabled();

    console.log("Signup Form structure validation complete.");
  });
});