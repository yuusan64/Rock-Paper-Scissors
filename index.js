
let computerScore=0;
let playerScore=0;
let resultText=" "
let finalWinner=" "
let run=false;



const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const scissors=document.getElementById("scissors")


const buttons=document.querySelectorAll('input')


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
    var styleButton = "align-self: center; background-color: rgba(245,244,240,255);font-size:40px;border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;border-bottom-left-radius: 15px 255px;border-bottom-right-radius: 225px 15px;border-top-left-radius: 255px 15px;border-top-right-radius: 15px 225px;cursor: pointer;border-width: 2px;font-family: 'Caveat', cursive;font-family: 'Shadows Into Light', cursive;;line-height: 23px;padding: 12px 28px;";
    res.setAttribute('style', styleButton);

    res.addEventListener('click', function(){
      window.location.reload(false);
    });
    playerScore=0;
    computerScore=0;
    
    
}
function disableButtons(){
  buttons.forEach(obj => {
    obj.disabled = true
})
console.log("disabled")
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
    resultMessage.textContent=res

    if(!run){
    restart()
    }
  }   
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
        
        if(playerScore===5||computerScore===5){
        disableButtons()
        if(playerScore>computerScore){
          finalWinner= "Woohooo you won!!!"
        }
        else {
          finalWinner= "Oops......you lost!!"
        }
      }
        scorecard(resultText, playerScore, computerScore, finalWinner)
    }