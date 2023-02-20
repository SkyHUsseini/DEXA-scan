"use strict";
const btn = document.querySelector(".enter-btn");
const tScore_value = document.querySelector(".tScore");
const ResultContainer = document.querySelector(".diagnosis-result");

//delete diagnosis when clicked on input field again
const emptyDiagnosis = function () {
  ResultContainer.innerHTML = "";
  tScore_value.value = 0;
};
tScore_value.addEventListener("click", emptyDiagnosis);

//save input when you click 'enter'
tScore_value.addEventListener("keypress", function (event) {
  // event.preventDefault();

  if (event.key === "Enter") {
    const input = tScore_value.value;
    diagnose(input);
  }
});

btn.addEventListener("click", function () {
  const input = tScore_value.value;
  diagnose(input);
});

const diagnose = function (input) {
  //no input

  if (!input) {
    alert("Please enter a valid value");
    return;
  }

  if (input >= -1) {
    const html = `
    <p class="fs-paragraph">
      According to the entered T-score of (${input}) the diagnosis is: <span class="text-white fw-bold">Normal</span>
    </p>
    `;

    ResultContainer.insertAdjacentHTML("beforeend", html);
  }

  //if score between -1 and -2.5
  if (input < -1 && input >= -2.5) {
    const html = `
    <p class="fs-paragraph">
      According to the entered T-score of (${input}) the diagnosis is: <span class="text-darkRed fw-bold">Oteopenia</span>
    </p>
    <img
      class="diagnosis__img"
      src="./images/osteopenia.jpg"
      alt=""
    >
    `;

    ResultContainer.insertAdjacentHTML("beforeend", html);
  }

  //if score is lower than -2.5
  if (input < -2.5) {
    const html = `
    <p class="fs-paragraph">
      According to the entered T-score of (${input}) the diagnosis is: <span class="text-darkRed fw-bold">Osteoporosis</span>
    </p>
    <img
     class="diagnosis__img"
      src="./images/osteoporosis.jpg"
      alt=""
      /> 
    `;

    ResultContainer.insertAdjacentHTML("beforeend", html);
  }
};
