
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


function result(id){

  let button= document.getElementById(id)
  let text=button.innerHTML;
    let player=text.toUpperCase();
    
    let computer=getComputerChoice();
    
  
    if(player===computer){
        alert("Its a tie")
    }
    else if((player==="ROCK"&&computer==="SCISSORS") || (player==="SCISSORS"&& computer==="PAPER") || (player==="PAPER" && computer==="ROCK")){
        alert("You win!")
      }
    else{
          alert("You lose!")
        }
        console.log(player)
        console.log(computer)
    }

 



  
