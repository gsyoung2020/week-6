//maybe place the game play loop in one thing
// change all X and Y letters swap them !!!!!!!
const battleship = () => {
  alert(`Your about to playing 4x4 battleship! Your ships will be randomly placed, the prompts given and remeber this game is ZERO-based that means the board actually starts at 0x0, which means hitting things in the first postition needs to be at zero `)

  let player1 = {
    name: prompt (`Player 1 Submit To Me Your NAME`),
    player1Lives: 4, //supposed to be 4??
    gameBoard: [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]],        
    p1Guess: []
  }
  getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  for( let i=0; i<player1.player1Lives; i++){
      let randomX = getRandomNumber(4);
      let randomY = getRandomNumber(4);
      if (player1.gameBoard[randomY][randomX] == 0){
         player1.gameBoard[randomY][randomX] =1;        
      }
      //if (randomX == gameBoard[randomX][i] && randomY == gameBoard[i][randomX]){}
      console.log(`X: ${randomX} Y: ${randomY}`)
      //console.log(player1.gameBoard[randomX][randomY])
      //console.log(player1.assignShips)
  }
  console.log(player1.gameBoard) 

  let player2 = {
    name: prompt (`Player 2 Submit To Me Your Name`),
    player2Lives: 4,
    gameBoard: [[0,0,0,0],
               [0,0,0,0],
               [0,0,0,0],
               [0,0,0,0]],       
    p2Guess: []
  }
  getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  for( let i=0; i<player2.player2Lives; i++){
      let randomX = getRandomNumber(4);
      let randomY = getRandomNumber(4);
//look into while loops
  if (player2.gameBoard[randomY][randomX] == 0){
     player2.gameBoard[randomY][randomX] = 1;
  };
  console.log(`X: ${randomX} Y: ${randomY}`)
   //console.log(player2.gameBoard[randomY][randomX])
   //console.log(player1.assignShips)
  }
  console.log(player2.gameBoard) 

  p1game()

  /*
  function lifeCheck () {
    if (player1.player1Lives == 0) {
      alert(`HEY ${player2.name} YOUR A WINNER !!!!`) 
    }
    if (player2.player2Lives == 0 ) {
      alert(`HEY ${player1.name} YOUR A WINNER !!!!`) 
    }
  }
  */

  function p1game () {
    alert(`${player1.name} 's Turn insert a number between 0-3`)
    var posX = parseInt(prompt(`give me X`))
    let posY = parseInt(prompt(`give me Y`))
console.log(player2.gameBoard[posY][posX])
 /*
 if (player2.player2Lives == 0 ) {
   alert(`HEY ${player1.name} YOUR A WINNER !!!!`)
   player2.gameBoard[posX][posY] = 0
 }
 */
if (player2.gameBoard[posY][posX] == 1){
   alert(`${player1.name} YOU GOTTA HIT`)
   player1.p1Guess.push(`Pos-X ${posX}, Pos-Y ${posY}`)
   alert(`$ Your Guesses are/were ${player1.p1Guess}`)
   player2.player2Lives--;
   player2.gameBoard[posY][posX] = 0
   console.log(`these are ${player2.name}'s  ${player2.player2Lives} lives`)
if (player1.player1Lives == 0) {
   alert(`HEY ${player2.name} YOUR A WINNER !!!!`) 
 } else if (player2.player2Lives == 0   ) {
   alert(`HEY ${player1.name} YOUR A WINNER !!!!`) 
} else {
    p2game()
    }
  } else if (player2.gameBoard[posY][posX] !== 1) {
  alert(`${player1.name} sorry but you didn't hit...`)
  player1.p1Guess.push(`Pos-X ${posX}, Pos-Y ${posY}`)
  alert(`Your Guesses are/were ${player1.p1Guess}`)
  p2game()
  }
}

function p2game () {
  alert(`${player2.name} 's Turn insert a number between 0-3` )
  var posX = parseInt(prompt(`give me X`))
  let posY = parseInt(prompt(`give me Y`))
console.log(player1.gameBoard[posY][posX])
 /*
 if (player1.player1Lives ==0) {
   alert(`HEY ${player2.name} YOUR A WINNER !!!!`)
   player1.gameBoard[posY][posX] = 0
 }
 */
if (player1.gameBoard[posY][posX] == 1){
  alert(`${player2.name} YOU GOTTA HIT`)
  player2.p2Guess.push(`Pos-X ${posX}, Pos-Y ${posY}`)
  alert(`Your Guesses are/were ${player2.p2Guess}`)
  player1.player1Lives--;
  player1.gameBoard[posY][posX] = 0
  console.log(`these are ${player1.name}'s  ${player1.player1Lives} lives`)
  if (player1.player1Lives == 0) {
   alert(`HEY ${player2.name} YOUR A WINNER !!!!`) 
 }
  else if (player2.player2Lives == 0   ) {
   alert(`HEY ${player1.name} YOUR A WINNER !!!!`) 
} else {
    p1game()
    }
  } else if (player1.gameBoard[posY][posX] !== 1) {
  alert(`${player2.name} sorry but you didn't hit...`)
  player2.p2Guess.push(`Pos-X ${posX}, Pos-Y ${posY}`)
  alert(`$ Your Guesses are/were ${player2.p2Guess}`)
  p1game()
  }


}
console.log('The winner is...?')
}

const gameResult = battleship()



const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
