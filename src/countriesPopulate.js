import { countries, getEmojiFlag } from "countries-list";

const countryNames = Object.values(countries).map((country) => country.name);
const countryEmojis = Object.keys(countries).map((country) =>
  getEmojiFlag(country),
);

const countryArray = countryNames.map(
  (name, index) => `${name} ${countryEmojis[index]}`,
);
const countrySelectInput = document.getElementById("countrySelect");

function createOptionElement(country) {
  const option = document.createElement("option");
  option.textContent = country;
  countrySelectInput.appendChild(option);
}

function populateCountrySelect() {
  countryArray.forEach((country) => {
    createOptionElement(country);
  });
}

export default populateCountrySelect;
