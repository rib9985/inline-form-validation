export default class GiveHighFive {
  static submitForm() {
    const form = document.getElementById("form");
    form.onsubmit = (event) => {
      event.preventDefault();
      const formState = form.checkValidity();
      if (formState) {
        this.createHighFive();
      } else {
        return;
      }
    };
  }

  static createHighFive() {
    const newDiv = document.createElement("div");
    newDiv.textContent = "Form Submitted! 💯👊";
    newDiv.id = "highFive";
    document.body.insertAdjacentElement("beforeend", newDiv);
  }
}
