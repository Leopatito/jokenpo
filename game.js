var computerPoints = 0;
var humanPoints = 0;
var result;

const human = document.querySelector(".scoreHuman");
const computer = document.querySelector(".scoreComputer");
const whoWin = document.querySelector(".whoWin");

human.textContent = computerPoints;
computer.textContent = humanPoints;


function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(a,b){
    if(humanPoints !== 5 && computerPoints !== 5){
        if(a === 0 && b === 0){
            console.log("Tie");
            whoWin.textContent = "Rock vs Rock.Tie";
        }
        if(a === 0 && b === 1){
            console.log("Computer wins");
        
            computerPoints = computerPoints + 1;
            computer.textContent = computerPoints;
            whoWin.textContent = "Rock vs Paper.You lost!";
        }
        if(a === 0 && b === 2){
            console.log("Human wins");
            humanPoints = humanPoints +1;
            human.textContent = humanPoints;
            whoWin.textContent = "Rock vs Scissor.You Won!";
        }
        if(a === 2 && b === 0){
            console.log("Computer wins");
            
            computerPoints = computerPoints + 1;
            computer.textContent = computerPoints;
            whoWin.textContent = "Scissor vs Rock.You lost!";
        }
        if(a === 2 && b === 1){
            console.log("Human wins");
            humanPoints = humanPoints +1;
            human.textContent = humanPoints;
            whoWin.textContent = "Scissor vs Paper.You won!";
            
        }
        if(a === 2 && b === 2){
            console.log("TIE");
            whoWin.textContent = "Scissor vs Scissor.Tie";
            
        }
        if(a === 1 && b === 0){
            console.log("Computer wins")
            computerPoints = computerPoints + 1;
            computer.textContent = computerPoints;
            whoWin.textContent = "Paper vs Scissor.You lost";
        }
        if (a === 1 && b === 1) {
            console.log("Tie");
            whoWin.textContent = "Paper vs Paper.Tie";
            
        }
        if(a === 1 && b === 2){
            console.log("Human wins");
            humanPoints = humanPoints +1;
            human.textContent = humanPoints;
            whoWin.textContent = "Paper vs Rock.You Won";
            
            
        }
    }
    else{
        if(humanPoints === 5){
            whoWin.textContent = "Human won";
            
        }
        else{
            whoWin.textContent = "Computer won";
        }
            
    }
    
    
}
    


        
        