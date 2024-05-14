export default class FormValidate {
  static validateEmail(email) {}

  static validateCountry(country) {}

  static validateZip(zip) {}

  static validatePassword(password) {}

  static validateConfirmPassword(password, confirmPassword) {}

  static validateName(ev) {
    const nameInput = ev;

    nameInput.setCustomValidity("");
    const currentState = nameInput.checkValidity();
    if (currentState) {
      const regEx = new RegExp("^[a-zA-Z]+$");
      if (!regEx.test(nameInput.value) || nameInput.length < 3) {
        nameInput.setCustomValidity(
          "Name should not contain numbers and/or symbols and be longer than 3 letters",
        );
        nameInput.reportValidity();
      }
    }

    console.log(nameInput.validity);
  }

  static addListeners() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const country = document.getElementById("countrySelect");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const zipcode = document.getElementById("zipcode");

    name.addEventListener("input", this.validateName.bind(this, name));
  }
}
