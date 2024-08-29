import GameBoard from "./gameboard";

export default function Player(real){
  let type = real;
  let board = GameBoard();
  return {type, board}
}