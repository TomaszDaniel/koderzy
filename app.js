const express = require('express');
const path = require('path')
const app = express();

app.listen(3000, () => {
    console.log("Serwer nasłuchuje")
});

app.use(express.static(
    path.join(__dirname, 'public')
));

let goodAnswer = 0;
let callToAFriendUsed = false;
let questionToTheCrowdUsed = false;
let halfOnHalfUsed = false;

const questions = [
    {
        question: 'Jaki jeste najlepszy język programowania na świecie według mnie?',
        answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
        correctAnswer: 2,
    },
    {
        question: 'Czy ten kurs jest fajny?',
        answers: ['Nie wiem', 'Oczywiscie, że tak', 'Nie', 'Jest najlepszy'],
        correctAnswer: 3,
    },
    {
        question: 'Czy chcesz zjeść pizze?',
        answers: ['Nawet dwie!', 'Jestem na diecie', 'Nie, dziękuję', 'Wolę brokuły'],
        correctAnswer: 0,
    }
]

app.get('/question', (req, res) => {

    if (goodAnswer === questions.length) {
        res.json({
            winner: true,
        })
    } else {
        const nextQuestion = questions[goodAnswer];
        const { question, answers } = nextQuestion
        res.json({
            question, answers
        })
    }
})