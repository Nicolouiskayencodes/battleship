import Player from "./player";
import render from "./render-board";

export default function makeGame(){
  let players = document.querySelector('#players');
  players.showModal();
  let onePlayer = document.querySelector('#one-player');
  let twoPlayer = document.querySelector('#two-player');
  let newgame = document.querySelector('#newgame');
  let gameover = document.querySelector('#gameover');

let player1 = Player('human');
let player2 = undefined;
onePlayer.addEventListener('click', ()=>{
  player2 = Player('computer');
  placeShips();
  document.querySelector('.game').textContent = '';
  render(player1, player2);
  players.close();
})
twoPlayer.addEventListener('click', ()=>{
  player2 = Player('human');
  placeShips();
  document.querySelector('.game').textContent = '';
  render(player1, player2);
  players.close();
})

function placeShips(){
player1.board.placeShip([0,0], 'right', 5);
player1.board.placeShip([1,1], 'down', 4);
player1.board.placeShip([3,1], 'right', 3);
player1.board.placeShip([3,6], 'right', 3);
player1.board.placeShip([6,1], 'right', 3);

player2.board.placeShip([0,0], 'right', 5);
player2.board.placeShip([1,1], 'down', 4);
player2.board.placeShip([3,1], 'right', 3);
player2.board.placeShip([3,6], 'right', 3);
player2.board.placeShip([6,1], 'right', 3);
}
newgame.addEventListener('click', () => {
  document.querySelector('.game').textContent = ''
  gameover.close()
  makeGame()
})
}