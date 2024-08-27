import Ship from "./ship";

export default function GameBoard(){
  //create 10x10 board
  let board = [];
  for (let i=0; i<10; i++){
    let row = [];
    for (let j=0; j<10; j++) {
      row.push({
        target: null,
        shot: false
    })
    }
    board.push(row)
  }
 
  function getBoard(){
    return board;
  }

  //Make function to place ships on the board
  function placeShip(start, direction, size){
    let ship = Ship(size);
    let spaces = [];
    if (direction === 'right'){
      for (let i=0; i<size; i++){
        let coordinates = [start[0],(start[1]+i)]
        spaces.push(coordinates);
        if(coordinates[0]<0 || coordinates[0]>9 ||coordinates[1]<0 || coordinates[1]>9) {
          return 'Out of bounds'
        } else if (board[coordinates[0]][coordinates[1]].target !== null) {
          return 'Occupied space'
        }
      }
    } else if (direction === 'up'){
      for (let i=0; i<size; i++){
        let coordinates = [(start[0]-i),start[1]]
        spaces.push(coordinates);
        if(coordinates[0]<0 || coordinates[0]>9 ||coordinates[1]<0 || coordinates[1]>9) {
          return 'Out of bounds'
        } else if (board[coordinates[0]][coordinates[1]].target !== null) {
          return 'Occupied space'
        }
      }
    } else if (direction === 'left'){
      for (let i=0; i<size; i++){
        let coordinates = [start[0],(start[1]-i)]
        spaces.push(coordinates);
        if(coordinates[0]<0 || coordinates[0]>9 ||coordinates[1]<0 || coordinates[1]>9) {
          return 'Out of bounds'
        } else if (board[coordinates[0]][coordinates[1]].target !== null) {
          return 'Occupied space'
        }
      }
    } else if (direction === 'down'){
      for (let i=0; i<size; i++){
        let coordinates = [(start[0]+i),start[1]]
        spaces.push(coordinates);
        if(coordinates[0]<0 || coordinates[0]>9 ||coordinates[1]<0 || coordinates[1]>9) {
          return 'Out of bounds'
        } else if (board[coordinates[0]][coordinates[1]].target !== null) {
          return 'Occupied space'
        }
      }
    }
    for (let i=0; i<size; i++){
      let coordinates = spaces[i];
      board[coordinates[0]][coordinates[1]].target = ship;
    }
  }

  return {getBoard, placeShip}
}