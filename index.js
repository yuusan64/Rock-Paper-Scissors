
let computerScore=0;
let playerScore=0;
let resultText=" "
let finalWinner=" "
let run=false;


const rock=document.getElementById("rock")
const paper=document.querySelector('paper')
const scissors=document.querySelector('scissors')

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}
function restart(){
    run=true;
    let prompt=document.getElementById('restart')
    const res=document.createElement("button")
    res.innerText="Restart"
    prompt.appendChild(res)
    console.log(rock)
    res.addEventListener('click', function(){
      window.location.reload(false);
    });
    
}
function scorecard(descText, pScore, cScore, finaldesc){
  let computerPoints=document.getElementById('computerScore')
  let playerPoints=document.getElementById('playerScore')
  let resultMessage=document.getElementById('resultMessage')
  let finalResult=document.getElementById('desc')
  let retry=document.getElementById('restart')
  let cPoint=cScore
  let pPoint=pScore
  let res=finaldesc

  resultMessage.textContent=descText;
  computerPoints.textContent=`Computer: ${cPoint}`
  playerPoints.textContent=`Player: ${pPoint}`
  if (res!=" "){
    finalResult.textContent=res
    
    if(!run){
    restart()
    }
    };

  } 

function result(id){

  let button= document.getElementById(id)
  let text=button.getAttribute("title")
  let player=text.toUpperCase();
  let computer=getComputerChoice();
    

    if(player===computer){
      resultText="Its a tie!"
    }
    else if((player==="ROCK"&&computer==="SCISSORS") || (player==="SCISSORS"&& computer==="PAPER") || (player==="PAPER" && computer==="ROCK")){
      resultText="You win!"
        playerScore++;
      }
    else{
      resultText="You lose!"
          computerScore++;
        }
        console.log(player)
        console.log(computer)
        
        if(playerScore+computerScore==5){
        if(playerScore>computerScore){
          finalWinner= "Congrats you won"
        }
        else {
          finalWinner= "You lost!"
        }
      }
        scorecard(resultText, playerScore, computerScore, finalWinner)

    }