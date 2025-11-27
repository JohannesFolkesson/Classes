import { Quiz } from "./quiz.js";
import { QuizUI } from "./quizui.js";

const quiz = new Quiz();
const ui = new QuizUI(quiz);

async function start() {
    await quiz.loadCountries();
    ui.showQuestion();
}

document.getElementById("next-btn").addEventListener("click", () => {
    ui.showQuestion();
});

start();