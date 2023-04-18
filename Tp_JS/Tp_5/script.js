const quizData = [ 
    { 
        question : "Quel est le meilleur langage de programmation en 2023 ?", 
        a : "Java", 
        b : "C", 
        c : "Python", 
        d : "javascript", 
        correct : "d", 
    }, 
    { 
        question : "Quelle est la capitale du Sénégal ?", 
        a : "Saint-Louis", 
        b : "Dakar", 
        c : "Thiès", 
        d : "Mbour", 
        correct : "b", 
    }, 
    { 
        question : "Qui est le meilleur équipe de tout les temps ?", 
        a : "Real Madrid", 
        b : "Barcelone",
        c : "Liverpool", 
        d : "PSG", 
        correct : "a", 
    }, 
    { 
        question : "Quelle année a été lancé JavaScript ?", 
        a : "1996", 
        b : "1995", 
        c : "1994", 
        d : "aucune des réponses ci-dessus", 
        correct : "b", 
    }, 
] ; 
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Vous avez trouvez ${score}/${quizData.length} questions </h2>

           <button onclick="location.reload()">Rejouer</button>
           `
       }
    }
})