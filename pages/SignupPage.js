 class SignupPage {
  constructor(page) {
    this.page = page;

    this.firstName =  page.getByRole("textbox",{name:'First name'});
    this.lastName = page.getByRole("textbox",{name:'Last name'});
    this.phone =  page.getByRole("textbox",{name:'Phone number'});
    this.province= page.getByRole("combobox", { name: 'Province of purchase' });
    this.email = page.getByRole("textbox",{name:'Email'});
    this.password = page.locator("input[name='password']");
    this.confirmPassword = page.locator("input[name='passwordConfirmation']");
    this.termsCheckbox = page.getByRole("checkbox");
    this.submitBtn = page.getByRole("button", { name: "Create your account" });
    
  }

  async goto() {
    await this.page.goto("/signup");
  }

  async fillForm(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.province.selectOption(data.province);
    await this.phone.fill(data.phone);
    await this.password.fill(data.password);
    await this.confirmPassword.fill(data.confirmPassword);
    await this.termsCheckbox.check();
  }

  async submit() {
    await this.submitBtn.click();
  }

}

module.exports ={SignupPage}