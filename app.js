let userScore = 0;
let computerScore = 0;


// to update user's and computer's score
const userScorePara = document.querySelector("#user-score"); 
const computerScorePara = document.querySelector("#computer-score"); 


// to add event listener to all the three choices
const choices = document.querySelectorAll(".choice");

// to display loosing or winning message
const msg = document.querySelector("#msg");


const generateComputerChoice = () => {
    const options = ["rock","paper","scissor"];

    // generates a random number between 0 and 3 (0,1,2)
    const randIndex = Math.floor(Math.random()*3);           
    return options[randIndex];
} 

const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "Game was a draw";
}

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin===true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Your ${userChoice} beats computer's ${computerChoice}`;
        
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `Computer's ${computerChoice} beats your ${userChoice}`;

    }
}

const playGame =(userChoice) => {
    console.log(`user choice = ${userChoice}`);

    //generating computer's choice
    const computerChoice = generateComputerChoice();
    console.log(`Computer's choice : ${computerChoice}`);

    if(userChoice == computerChoice){
        // Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // computer choice will be papers or scissor
            userWin = computerChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            // computer choice will be rock or scissor
            userWin = computerChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor"){
            // computer choice will be rock or paper 
            userWin = computerChoice === "rock"? false : true;
        }
   
        showWinner(userWin,userChoice,computerChoice);
    }



};

// console.log(choices);
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(`${userChoice} was clicked`);
        playGame(userChoice);
    });
});
