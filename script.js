let userScore = 0;
let compScore = 0;
const msg=document.querySelector('#msg');

const userScorePara=document.querySelector('#user-score')
const compScorePara=document.querySelector('#comp-score')

const choices = document.querySelectorAll(".choice")

choices.forEach((choice) => {
    //console.log(choice)
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
     //console.log("choice was clicked",userChoice)
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const drawGame = () => {
   // console.log("game was drawn");
    msg.innerText='game Was Draw,Play Again'
    msg.style.backgroundColor='#081b31';
}

//show winner
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        //console.log('you win');
        msg.innerText=`User choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='green';
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
    //console.log('you lose');
        msg.innerText=`${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor='red';
    }
}

const playGame = (userChoice) => {
    //console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    //console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            //paper,scissor
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper') {
            //rock , scissor
            userWin = compChoice === 'scissors' ? false : true;
        }
        else {//user has scissor
            //comp have now rock,paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};