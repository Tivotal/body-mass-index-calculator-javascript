/* Created by Tivotal */

let btn = document.querySelector(".btn");
let heightInput = document.querySelector(".height");
let weightInput = document.querySelector(".weight");

let resInput = document.querySelector(".result");
let condText = document.querySelector(".cond");

let calcBMI = () => {
  let heightVal = heightInput.value / 100;
  let weightVal = weightInput.value;

  let bmi = weightVal / (heightVal * heightVal);

  resInput.value = bmi;

  let cond = "";
  if (bmi < 18.5) {
    cond = "Under weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    cond = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    cond = "Over weight";
  } else if (bmi >= 30) {
    cond = "Obesity";
  }
  condText.textContent = cond;
};

btn.onclick = () => {
  calcBMI();
};

calcBMI();
