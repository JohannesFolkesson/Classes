import { Question } from "./question.js"

export class Quiz {

    constructor() {
        this.countries = [];
        this.currentQuestion = null;
    }

    async loadCountries() {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            if (!res.ok) throw new Error("API error");
            const data = await res.json();
            // Filtrera bort länder utan huvudstad
            this.countries = data.filter(c => c.capital && c.capital[0]);
        } catch (error) {
            console.error("Kunde inte ladda länder:", error);
        }
    }

    generateQuestion() {
        // slumpa land
        const country = this.countries[Math.floor(Math.random() * this.countries.length)];

        const correct = country.capital?.[0] || "Ingen huvudstad";

        // slumpa felaktiga svar
        const wrong = this.countries
            .filter(c => c.capital && c.capital[0] !== correct)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(c => c.capital[0]);

        const options = [...wrong, correct].sort(() => 0.5 - Math.random());

        this.currentQuestion = new Question(country, correct, options);

        return this.currentQuestion;
    }

    checkAnswer(answer) {
        return answer === this.currentQuestion.correctAnswer;
    }

}