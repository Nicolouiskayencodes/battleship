import Ship from "../src/ship";

describe('Testing Ship',()=>{
  let ship = Ship(3);
  test('Not sunk', ()=>{
    expect(ship.isSunk()).toBe(false);
  })
  test('Sunk', ()=>{
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  })
})
