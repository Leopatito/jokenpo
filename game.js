var computerPoints = 0;
var humanPoints = 0;
var result;
function getHumanChoice(){
    let answer = prompt("Please enter the number you would like to FizzBuzz up to: ");
    
    return answer;
}
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
// rock 0 paper 1 scissor 2
function playRound(a,b){
    var c;
    if(a === 'rock' && b === 0){
        console.log("TIE");
        c = 0;
    }
    if(a === 'rock' && b === 1){
        console.log("Computer wins");
        c = 2;
    }
    if(a === 'rock' && b === 2){
        console.log("Human wins");
        c = 1;
    }
    if(a === 'scissor' && b === 0){
        console.log("Computer wins");
        c = 2;
    }
    if(a === 'scissor' && b === 1){
        console.log("Human wins");
        c = 1;
    }
    if(a === 'scissor' && b === 2){
        console.log("TIE");
        c = 0;
    }
    if(a === 'paper' && b === 0){
        console.log("Computer wins")
        c = 2;
    }
    if (a === 'paper' && b === 1) {
        console.log("Tie");
        c = 0;
    }
    if(a === 'paper' && b === 2){
        console.log("Human wins");
        c = 1;
    }
    return c;
}
while(computerPoints != 5 && humanPoints != 5){
    result = playRound(getHumanChoice(),getComputerChoice())
    if (2 === result) {
        computerPoints = computerPoints + 1;
    }
    else{
        if (1 === result) {
            humanPoints = humanPoints + 1;
        }
    }
    console.log(computerPoints);
    console.log(humanPoints);
}
        
        
        