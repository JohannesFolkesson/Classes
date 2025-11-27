export class QuizUI {
    constructor(quiz) {
        this.quiz = quiz;
        this.questionEl = document.getElementById("question");
        this.optionsEl = document.getElementById("options");
        this.nextBtn = document.getElementById("next-btn");
    }


    showQuestion() {
        const q = this.quiz.generateQuestion();

        this.questionEl.textContent = `Vad är huvudstaden i ${q.country.name.common}?`;

        this.optionsEl.innerHTML = "";

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("option-btn");

            btn.addEventListener("click", () => this.handleAnswer(btn, option));
            this.optionsEl.appendChild(btn);
        });

        this.nextBtn.style.display = "none";
    }

    handleAnswer(btn, answer) {
        const correct = this.quiz.checkAnswer(answer);

        btn.style.background = correct ? "green" : "red";

        // lås alla knappar
        document.querySelectorAll(".option-btn").forEach(button => {
            button.disabled = true;
        });

        this.nextBtn.style.display = "block";
    }
}
