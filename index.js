let gameBoard = ['', '', '', '', '', '', '', '', ''];
const player1 = 'O';
const player2 = 'X';
let player = player1;
const winningBoards = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const squares = document.querySelectorAll('.square');
startGame();

function startGame() {
  document.querySelector('.endgame').style.display = 'none';
  gameBoard = gameBoard.map((square) => {
    return '';
  });
  squares.forEach((square) => {
    square.innerText = '';
    square.style.removeProperty('background-color');
    square.addEventListener('click', squareClicked);
  });
}

function squareClicked(square) {
  const id = square.target.id;
  turn(id);
}

function turn(id) {
  gameBoard[id] = player;
  document.getElementById(id).innerText = player;
  document.getElementById(id).removeEventListener('click', squareClicked);
  checkWin();
  changePlayer();
}

function changePlayer() {
  if (player === player1) {
    player = player2;
  } else {
    player = player1;
  }
}

function checkWin() {
  winningBoards.forEach((array) => {
    if (
      gameBoard[array[0]] === player &&
      gameBoard[array[1]] === player &&
      gameBoard[array[2]] === player
    ) {
      array.forEach((id) => {
        document.getElementById(id).style.backgroundColor = 'lightgrey';
      });
      gameWon(player);
    }
  });
}

function gameWon() {
  let winner;
  player === 'O' ? (winner = 'Noughts') : (winner = 'Crosses');
  document.querySelector('.endgame .text').innerText = `${winner} won!`;
  squares.forEach((square) => {
    square.removeEventListener('click', squareClicked);
    document.querySelector('.endgame').style.display = 'block';
  });
}
