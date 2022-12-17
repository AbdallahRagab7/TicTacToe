
// msh htfr2 trteb el const el mohm yb2a 2bl el addEventListner
// u can add addEventListner to elements not only buttons and links (backdropElement)
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
      name: '',
      symbol: 'X'
    },
    {
      name: '',
      symbol: 'O'
    },
  ];

//2D Array : Array of Arrays
  const gameData = [ 
  [0, 0, 0], 
  [0, 0, 0], 
  [0, 0, 0],];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const gameOverElement = document.getElementById('game-over');
const nonEnteredData = document.getElementById('nonEntered-data')


// buttons const
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');

 const gameFieldElements = document.querySelectorAll('#game-board li'); // return array of elements 
 const gameBoardElement = document.getElementById('game-board');
 const activePlayerNameElement = document.getElementById('active-player-name');



//addEventListners
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);


cancelConfigBtnElement.addEventListener('click' , closePlayerConfig);
backdropElement.addEventListener('click' , closePlayerConfig); 

// default of browser when u click submit : send http request to a server and the page reload 
formElement.addEventListener('submit',savePlayerConfig); 

startNewGameBtnElement.addEventListener('click', startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//    gameFieldElement.addEventListener('click', selectGameField);
//  }

 gameBoardElement.addEventListener('click', selectGameField);