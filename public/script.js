const question = document.querySelector('#question')
const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')

function fillQuestionElements(data) {
    question.innerText = data.question;
    
}

function showNextQuestion() {
    fetch('/question ', {
        method: 'GET',
    })
        .then(r => r.json())
        .then(data => {
            fillQuestionElements(data)
        })
}

showNextQuestion();