import GameBoard from "../src/gameboard";

describe('Testing Board',()=>{
  let board = GameBoard();
  test('Columns', ()=>
    expect(board.getBoard().length).toBe(10));
  test('Rows', ()=>
    expect(board.getBoard()[3].length).toBe(10));
  test('cell', ()=>
    expect(board.getBoard()[7][2]).toEqual({target: null, shot: false}));
  describe('ship testing', ()=> {
    beforeAll(()=>board.placeShip([4,5], 'right', 4));
    beforeAll(()=>board.placeShip([7,7], 'down', 3));
    test('Start Space', ()=>
      expect(board.getBoard()[4][5].target).not.toBe(null));
    test('Third Space', ()=>
      expect(board.getBoard()[4][7].target).not.toBe(null));
    test('Down Space', ()=>
    expect(board.getBoard()[8][7].target).not.toBe(null));
  })
  describe('Ship errors', () =>{
    beforeAll(()=> board.placeShip([0,0], 'right', 3));
    test('Stacked ship', ()=>
    expect(board.placeShip([0,0], 'down', 3)).toBe('Occupied space'));
    test('Out of bounds', ()=>
    expect(board.placeShip([9,9], 'right', 3)).toBe('Out of bounds'));
  })
})