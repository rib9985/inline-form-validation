export default class FormValidate {
  static validateEmail(email) {}

  static validateCountry(country) {}

  static validateZip(zipInput) {
    zipInput.setCustomValidity("");
    const zipRegEx = /^[^\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (zipInput.value.length < 3 || zipInput.value.length > 15) {
      zipInput.setCustomValidity(
        "Zipcode should be longer than 3 characters and shorter than 15",
      );
      zipInput.reportValidity();
      return;
    }
    if (!zipRegEx.test(zipInput.value)) {
      zipInput.setCustomValidity(
        "The zipcode should not include symbols and spaces!",
      );
      zipInput.reportValidity();
      return;
    }
    zipInput.setCustomValidity("");
  }
  static validatePassword(passwordInput) {}

  static validateConfirmPassword(password, confirmPassword) {}

  static validateName(nameInput) {
    nameInput.setCustomValidity("");
    const regEx = new RegExp("^[a-zA-Z]+$");

    if (
      nameInput.value == null ||
      nameInput.value == undefined ||
      nameInput.value == ""
    ) {
      nameInput.setCustomValidity("You forgot to fill here!");
      nameInput.reportValidity();
      return;
    }
    if (!regEx.test(nameInput.value)) {
      nameInput.setCustomValidity(
        "Name should not contain numbers and/or symbols ",
      );
      nameInput.reportValidity();
      return;
    }
    if (nameInput.value.length < 3) {
      nameInput.setCustomValidity("Name should be longer than 3 letters");
      nameInput.reportValidity();
      return;
    }
    nameInput.setCustomValidity("");
  }

  static addListeners() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const country = document.getElementById("countrySelect");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const zipcode = document.getElementById("zipcode");

    name.addEventListener("input", this.validateName.bind(this, name));
    zipcode.addEventListener("input", this.validateZip.bind(this, zipcode));
  }
}
