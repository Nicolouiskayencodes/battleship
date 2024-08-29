import Player from "./player";
import render from "./render-board";

let human = Player('human');
let computer = Player('computer');
human.board.placeShip([0,0], 'right', 5);
human.board.placeShip([1,1], 'down', 4);
human.board.placeShip([3,1], 'right', 3);
human.board.placeShip([3,6], 'right', 3);
human.board.placeShip([6,1], 'right', 3);

computer.board.placeShip([0,0], 'right', 5);
computer.board.placeShip([1,1], 'down', 4);
computer.board.placeShip([3,1], 'right', 3);
computer.board.placeShip([3,6], 'right', 3);
computer.board.placeShip([6,1], 'right', 3);

render(human, computer)