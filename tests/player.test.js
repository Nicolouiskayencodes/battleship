import Player from "../src/player";

describe('Testing Player', () => {
  let player = Player('real');
  test('Board', ()=>
    expect(player.board.getBoard()).not.toBeUndefined());
})