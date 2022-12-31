// Your Code Here
let userName = window.prompt('Please enter your name:')
let userScore = 0
let playAgain = true

function playGame() {
    for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer) {
        userScore = userScore + 10
        window.alert('🎉')
    }
    else{
        window.alert('🤔')
    }
    
}
window.alert('You are this smart --> '+userScore)
}
while (playAgain === true) {
    playGame ()
    let userChoice = window.prompt('Would you like to try that again? Y or N')
    if(userChoice === 'y') {
         playAgian = true
         window.alert ("Let's goooo!!! 🤗")
    } else {
        playAgain = false
        window.alert (userName + ' is a loser 🙄')
    }
}
