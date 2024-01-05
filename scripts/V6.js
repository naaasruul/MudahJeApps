// console logs for debugging purposes, remove if bloated

// ITERATORS FOR MATH IN showSummary()
let currentStage = 1;
let correctAnswers = 0;
let totalQuestions = 0;

// [MANDATORY] how much stages/levels is in the program
let globalStagesLimit = 2;

// removes the instruction upon clicking the start quiz button
function startQuiz() {
  console.log(`SQ ${currentStage}`);
  document.getElementById(`stage-${currentStage}-inst`).style.display = "none";
  document.getElementById(`quiz-${currentStage}`).style.display = "block";
}

// automatically checks for correct and incorrect answer right after user input
function autoCheckAnswer(questionStage, selectedOption) {
  // used in locking the selection of answers
  const formID = `question${questionStage}Form`;
  disableRadioButtons(formID);

  // gets the correct answer from the data attribute on the question div
  var id = selectedOption.id;
  var correctId = `correct-${currentStage}`;
  var incorrectIds = ["incorrect1", "incorrect2", "incorrect3"].map(function (
    incorrectId
  ) {
    return incorrectId + currentStage;
  });

  // Highlight correct and chosen (even if incorrect) options
  document.getElementById(correctId).parentNode.classList.add("correct");
  if (id !== correctId) {
    selectedOption.parentNode.classList.add("incorrect");
  }

  if (selectedOption.id === `correct-${currentStage}`) {
    correctAnswers++;
  }
  totalQuestions++;
}

// V5.5 CORRECT INCORRECT STYLING ================================
// function autoCheckAnswer(questionStage, selectedOption) {
//     console.log(`aCA ${currentStage}`)
//     const formId = `question${questionStage}Form`;
//     const options = document.querySelectorAll(`#${formId} input[type="radio"]`);

//     options.forEach(option => {
//         option.parentElement.querySelector('span').classList.remove('correct', 'incorrect');
//         if (option.id === 'correct') {
//             option.parentElement.querySelector('span').classList.add('correct');
//         } else {
//             option.parentElement.querySelector('span').classList.add('incorrect');
//         }
//     });

//     // Count correct answers
//     if (selectedOption.id === 'correct') {
//         correctAnswers++;
//     }
//     disableRadioButtons(formId)
//     totalQuestions++;
// }

// disables the raadio buttons right after selection
function disableRadioButtons(formID) {
  console.log(`dRB ${currentStage}`);
  const radioButtons = document.querySelectorAll(
    `#${formID} input[type="radio"]`
  );
  radioButtons.forEach((radioButton) => {
    radioButton.disabled = true;
  });
}

// actually hides the quiz elements instead of proceeding to summary
function proceedToSummary() {
  console.log(`pTS ${currentStage}`);
  document.getElementById(`quiz-${currentStage}`).style.display = "none";
  showSummary();
}

// quiz performance calculator display
function showSummary() {
  console.log(`sS ${currentStage}`);
  document.getElementById(`summary-${currentStage}`).style.display = "block";
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  document.getElementById(`correctAnswers-${currentStage}`).textContent =
    correctAnswers;
  document.getElementById(`totalQuestions-${currentStage}`).textContent =
    totalQuestions;
  document.getElementById(`percentageValue-${currentStage}`).textContent =
    percentage;
  document.getElementById(
    `stageNext-${currentStage}`
  ).textContent = `You've unlocked stage ${currentStage + 1}!`;

  // if condition is met, the next stage button will be disabled and feedback will be given
  if (currentStage == globalStagesLimit) {
    document.getElementById(
      `stageNext-${currentStage}`
    ).textContent = `you've reached the end of all stages!`;
    document.getElementById(`proceed-${currentStage + 1}`).disabled = true;
  }
}

// proceed to next page with another guy doing new hand signs
function proceedToNextStage() {
  console.log(`pTNS ${currentStage}`);
  console.log(
    "currentStage < globalQuestionLimit",
    currentStage < globalStagesLimit
  );
  // this
  if (currentStage < globalStagesLimit) {
    currentStage++;
    console.log(`within cond pTNS ${currentStage}`);
    console.log(
      "within cond: currentStage < globalQuestionLimit",
      currentStage < globalStagesLimit
    );

    document.getElementById(`summary-${currentStage - 1}`).style.display =
      "none";
    document.getElementById(`stage-${currentStage}-inst`).style.display =
      "block";
    totalQuestions = 0;
    correctAnswers = 0;
  }
}

// on load:
window.addEventListener("load", function () {
  // Reset the form elements on page load
  resetForm();
});
function resetForm() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => form.reset());
}
