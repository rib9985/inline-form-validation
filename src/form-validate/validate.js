export default class FormValidate {
  constructor(elementId, errorMessage) {
    this.element = document.getElementById(elementId);
    this.errorMessage = errorMessage;
    this.setupValidation();
  }

  setupValidation() {
    this.element.addEventListener("input", () => {
      if (!this.element.validity.valid) {
        this.element.setCustomValidity(this.errorMessage);
      }
    });
  }
}
const nameValidator = new FormValidate("name", "Please input a valid name");
const emailValidator = new FormValidate(
  "email",
  "Please input a valid email address",
);
const countryValidator = new FormValidate(
  "country",
  "Please select a valid country",
);
const zipcodeValidator = new FormValidate(
  "zipcode",
  "Please input a valid zipcode or area code",
);
const passwordValidator = new FormValidate(
  "passwordForm",
  "A valid password should contain at least 8 characters, both lower and upper case characters, and one number or symbol",
);
const confirmPasswordValidator = new FormValidate(
  "confirmPassword",
  "Your passwords do not match",
);

export function validateForms() {
  passwordValidator.setupValidation();
  confirmPasswordValidator.setupValidation();
  countryValidator.setupValidation();
  emailValidator.setupValidation();
  zipcodeValidator.setupValidation();
  nameValidator.setupValidation();
}
