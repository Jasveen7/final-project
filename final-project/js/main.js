const start = document.querySelector(".fa-solid");
const landing = document.querySelector(".landing-page");
const one = document.querySelector(".question.one");
const two = document.querySelector(".question.two");
const three = document.querySelector(".question.three");
const four = document.querySelector(".question.four");
const five = document.querySelector(".question.five");
const six = document.querySelector(".question.six");
const seven = document.querySelector(".question.seven");
const eight = document.querySelector(".question.eight");
const lastPage = document.querySelector(".final-score");
let score = 0;

start.addEventListener("click", startQuiz);

function startQuiz() {
    if (landing.style.display !== "none") {
        landing.style.display = "none";
        one.style.display = "block"
    }
    else {
        landing.style.display = "block";
    }
}

// Quiz Functions to iterate through questions.

const question1Answers = document.querySelectorAll(".q-one");
const question2Answers = document.querySelectorAll(".q-two");
const question3Answers = document.querySelectorAll(".q-three");
const question4Answers = document.querySelectorAll(".q-four");
const question5Answers = document.querySelectorAll(".q-five");
const question6Answers = document.querySelectorAll(".q-six");
const question7Answers = document.querySelectorAll(".q-seven");
const question8Answers = document.querySelectorAll(".q-eight");

question1Answers.forEach(function (answer) {
  answer.addEventListener("click", checkQOne);
});

question2Answers.forEach(function (answer) {
  answer.addEventListener("click", checkQTwo);
});

question3Answers.forEach(function (answer) {
    answer.addEventListener("click", checkQThree);
  });

question4Answers.forEach(function (answer) {
    answer.addEventListener("click", checkQFour);
  });

question5Answers.forEach(function (answer) {
    answer.addEventListener("click", checkQFive);
  });

question6Answers.forEach(function (answer) {
    answer.addEventListener("click", checkQSix);
  });

question7Answers.forEach(function (answer) {
    answer.addEventListener("click", checkQSeven);
  });

question8Answers.forEach(function (answer) {
    answer.addEventListener("click", checkQEight);
  });
  

function checkQOne(event) {
  console.log(event);
  if (event.path[0].className === "qone-answer-one answer") {
    checkAnswer(".qone-answer-one", "incorrect", one, two);
    console.log(score);
  } else if (event.path[0].className === "qone-answer-two answer") {
    checkAnswer(".qone-answer-two", "correct", one, two);
    score++;
    console.log(score);
  } else {
    checkAnswer(".qone-answer-three", "incorrect", one, two);
    console.log(score);
  }
}

function checkQTwo(event) {
  console.log(event);
  if (event.path[0].className === "qtwo-answer-one answer") {
    checkAnswer(".qtwo-answer-one", "incorrect", two, three);
    console.log(score);
  } else if (event.path[0].className === "qtwo-answer-two answer") {
    checkAnswer(".qtwo-answer-two", "incorrect", two, three);
    console.log(score);
  } else {
    checkAnswer(".qtwo-answer-three", "correct", two, three);
    score++;
    console.log(score);
  }
}

function checkQThree(event) {
    console.log(event);
    if (event.path[0].className === "qthree-answer-one answer") {
    checkAnswer(".qthree-answer-one", "correct", three, four);
    score++;
    console.log(score);
    } else if (event.path[0].className === "qthree-answer-two answer") {
    checkAnswer(".qthree-answer-two", "incorrect", three, four);
    console.log(score);
    } else {
    checkAnswer(".qthree-answer-three", "incorrect", three, four);
    console.log(score);
    }
}

function checkQFour(event) {
    console.log(event);
    if (event.path[0].className === "qfour-answer-one answer") {
    checkAnswer(".qfour-answer-one", "correct", four, five);
    score++;
    console.log(score);
    } else if (event.path[0].className === "qfour-answer-two answer") {
    checkAnswer(".qfour-answer-two", "incorrect", four, five);
    console.log(score);
    } else {
    checkAnswer(".qfour-answer-three", "incorrect", four, five);
    console.log(score);
    }
}

function checkQFive(event) {
    console.log(event);
    if (event.path[0].className === "qfive-answer-one answer") {
    checkAnswer(".qfive-answer-one", "correct", five, six);
    score++;
    console.log(score);
    } else if (event.path[0].className === "qfive-answer-two answer") {
    checkAnswer(".qfive-answer-two", "incorrect", five, six);
    console.log(score);
    } else {
    checkAnswer(".qfive-answer-three", "incorrect", five, six);
    console.log(score);
    }
}

function checkQSix(event) {
    console.log(event);
    if (event.path[0].className === "qsix-answer-one answer") {
    checkAnswer(".qsix-answer-one", "incorrect", six, seven);
    console.log(score);
    } else if (event.path[0].className === "qsix-answer-two answer") {
    checkAnswer(".qsix-answer-two", "incorrect", six, seven);
    console.log(score);
    } else {
    checkAnswer(".qsix-answer-three", "correct", six, seven);
    score++;
    console.log(score);
    }
}

function checkQSeven(event) {
    console.log(event);
    if (event.path[0].className === "qseven-answer-one answer") {
    checkAnswer(".qseven-answer-one", "incorrect", seven, eight);
    console.log(score);
    } else if (event.path[0].className === "qseven-answer-two answer") {
    checkAnswer(".qseven-answer-two", "correct", seven, eight);
    score++;
    console.log(score);
    } else {
    checkAnswer(".qseven-answer-three", "incorrect", seven, eight);
    console.log(score);
    }
}

function checkQEight(event) {
    console.log(event);
    if (event.path[0].className === "qeight-answer-one answer") {
    checkAnswer(".qeight-answer-one", "incorrect", eight, lastPage);
    console.log(score);
    } else {
    checkAnswer(".qeight-answer-two", "correct", eight, lastPage);
    score++;
    console.log(score);
    }
}

// The reusable function to check an answer inside conditions for each question function above.
function checkAnswer(question, answer, currentQ, nextQ) {
  document.querySelector(question).classList.add(answer);
  document.querySelector(question).classList.remove("answer");
  setTimeout(function () {
    currentQ.style.display = "none";
    nextQ.style.display = "block";
  }, 2000);
  if (nextQ === lastPage) {
    document.querySelector(".final-score").innerText = `You scored ${score} out of 8!`;
}
  }