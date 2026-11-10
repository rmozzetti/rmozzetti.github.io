document.querySelector("button").addEventListener("click", gradeQuiz);

displayQ4Choices();
displayQ8Choices();

let score = 0;

let attempts = localStorage.getItem("total_attempts");

if (attempts === null) {
  attempts = 0;
} else {
  attempts = Number(attempts);
}

function isFormValid() {
  let isValid = true;
  let q1Response = document.querySelector("#q1").value;
  let validationFdbk = document.querySelector("#validationFdbk");

  if (q1Response === "") {
    isValid = false;
    validationFdbk.textContent = "Question 1 was not answered";
  }

  return isValid;
}

function gradeQuiz() {
  document.querySelector("#validationFdbk").textContent = "";

  if (!isFormValid()) {
    return;
  }

  score = 0;
  let q1Response = document.querySelector("#q1").value.toLowerCase();
  let q2Response = document.querySelector("#q2").value;

  if (q1Response === "sacramento") {
    rightAnswer(1);
  } else {
    wrongAnswer(1);
  }

  if (q2Response === "mo") {
    rightAnswer(2);
  } else {
    wrongAnswer(2);
  }

  if (document.querySelector("#Jefferson").checked &&
    document.querySelector("#Roosevelt").checked &&
    !document.querySelector("#Jackson").checked &&
    !document.querySelector("#Franklin").checked) {
    rightAnswer(3);
  } else {
    wrongAnswer(3);
  }

  let selectedQ4 = document.querySelector("input[name=q4]:checked");

  if (selectedQ4 !== null && selectedQ4.value === "Rhode Island") {
    rightAnswer(4);
  } else {
    wrongAnswer(4);
  }

  let q5Response = document.querySelector("#q5").value.toLowerCase();
  if (q5Response === "6" || q5Response === "six") {
    rightAnswer(5);
  } else {
    wrongAnswer(5);
  }

  let q6Response = document.querySelector("#q6").value;
  if (q6Response === "tba") {
    rightAnswer(6);
  } else {
    wrongAnswer(6);
  }

  if (!document.querySelector("#ri").checked &&
    document.querySelector("#hi").checked &&
    document.querySelector("#ak").checked &&
    !document.querySelector("#fl").checked) {
    rightAnswer(7);
  } else {
    wrongAnswer(7);
  }

  let selectedQ8 = document.querySelector("input[name=q8]:checked");

  if (selectedQ8 !== null && selectedQ8.value === "Golden Gate Bridge") {
    rightAnswer(8);
  } else {
    wrongAnswer(8);
  }

  let q9Response = document.querySelector("#q9").value.toLowerCase();
  if (q9Response === "california") {
    rightAnswer(9);
  } else {
    wrongAnswer(9);
  }

  let q10Response = document.querySelector("#q10").value;
  if (q10Response === "ls") {
    rightAnswer(10);
  } else {
    wrongAnswer(10);
  }

  document.querySelector("#totalScore").textContent = `Total Score: ${score}`;

  if (score > 80) {
    totalScore.className = "green";
  } else {
    totalScore.className = "red";
  }

  let congratsMessage = document.querySelector("#congratsMessage");

  if (score > 80) {
    congratsMessage.textContent = "Congrats, you scored over 80 points!";
    congratsMessage.className = "green";
  }

  attempts++;
  document.querySelector("#totalAttempts").textContent = `Total Attempts: ${attempts}`;
  localStorage.setItem("total_attempts", attempts);
}

function setMarkImage(index, imageName, altText) {
  let markContainer = document.querySelector(`#markImg${index}`);
  markContainer.textContent = "";

  let img = document.createElement("img");
  img.src = `img/${imageName}`;
  img.alt = altText;
  markContainer.appendChild(img);
}

function rightAnswer(index) {
  let feedback = document.querySelector(`#q${index}Feedback`);
  feedback.textContent = "Correct!";
  feedback.className = "bg-success text-white";
  setMarkImage(index, "checkmark.jpg", "Checkmark");
  score += 10;
}

function wrongAnswer(index) {
  let feedback = document.querySelector(`#q${index}Feedback`);
  feedback.textContent = "Incorrect!";
  feedback.className = "bg-warning text-white";
  setMarkImage(index, "xmark.jpg", "X mark");
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function displayQ4Choices() {
  let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
  shuffleArray(q4ChoicesArray);

  let choicesContainer = document.querySelector("#q4Choices");
  choicesContainer.textContent = "";

  for (let choice of q4ChoicesArray) {
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "q4";
    input.id = choice;
    input.value = choice;

    let label = document.createElement("label");
    label.htmlFor = choice;
    label.textContent = choice;

    choicesContainer.appendChild(input);
    choicesContainer.appendChild(label);
    choicesContainer.appendChild(document.createTextNode(" "));
  }
}

function displayQ8Choices() {
  let q8ChoicesArray = ["Golden Gate Bridge", "Bay Bridge", "Brooklyn Bridge", "George Washington Bridge"];
  shuffleArray(q8ChoicesArray);

  let choicesContainer = document.querySelector("#q8Choices");
  choicesContainer.textContent = "";

  for (let choice of q8ChoicesArray) {
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "q8";
    input.id = choice;
    input.value = choice;

    let label = document.createElement("label");
    label.htmlFor = choice;
    label.textContent = choice;

    choicesContainer.appendChild(input);
    choicesContainer.appendChild(label);
    choicesContainer.appendChild(document.createTextNode(" "));
  }
}
