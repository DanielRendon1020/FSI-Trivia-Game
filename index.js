// Your Code Here
let userName = window.prompt('What do people call you?')
let userReady = true
let userScore = 0
let playAgain = true

function playGame() {
    let userProceed = window.prompt('Alright ' + userName + ', are you ready? y or n')
    if(userProceed === 'y') {
        userReady = true
        window.alert("We'll see about that 😑")

    } else {
        userReady = true
        window.alert('Well too bad! 😝')
    }
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
    let userChoice = window.prompt('Would you like to try that again? y or n')
    if(userChoice === 'y') {
         playAgian = true
         userScore = 0
         window.alert ("Let's goooo!!! 🤗")
    } else {
        playAgain = false
        window.alert (userName + ' is a loser 🙄')
    }
}
