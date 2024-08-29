export default function render(player, player2, activePlayer = 1){
  let array = player.board;
  let game = document.querySelector('.game');
  let board = document.createElement('div');
  let dialog = document.querySelector('dialog');
  board.classList.add('gameboard');
  array.getBoard().forEach(element => {
    let row = document.createElement('div');
    row.classList.add('row');
    element.forEach(cell => {
      let space = document.createElement('div');
      space.classList.add('space');
      space.addEventListener('click', ()=>{
        if (activePlayer === 1){
        let attack = array.receiveAttack([array.getBoard().indexOf(element), element.indexOf(cell)]);
        game.textContent = '';
        if (attack !== 'Already shot') {
          render(player, player2, 2);
        } else if (attack === 'Already shot') {
          render(player, player2, 1)
        }
        if (attack === 'sunk'){
          dialog.textContent = 'Ship sunk!'
          let button = document.createElement('button');
          button.textContent = 'Continue';
          button.addEventListener('click', ()=>{
            dialog.close();
          })
          dialog.appendChild(button);
          dialog.showModal();
        }
        if (attack === true){
          dialog.textContent = 'All ships sunk. Game Over!'
          let button = document.createElement('button');
          button.textContent = 'New Game';
          button.addEventListener('click', ()=>{
            //new game
            dialog.close();
          })
          dialog.appendChild(button);
          dialog.showModal();
        }
    }})
      if (cell.shot === true && cell.target !== null) {
        space.classList.add('hit')
      } else if (cell.shot === true && cell.target === null) {
        space.classList.add('miss')
      }
      row.appendChild(space);
    })
    board.appendChild(row);
  });
  game.appendChild(board);
  let array2 = player2.board;
  let board2 = document.createElement('div');
  board2.classList.add('gameboard');
  array2.getBoard().forEach(element => {
    let row = document.createElement('div');
    row.classList.add('row');
    element.forEach(cell => {
      let space = document.createElement('div');
      space.classList.add('space');
      space.addEventListener('click', ()=>{
        if (activePlayer === 2) {
        let attack = array2.receiveAttack([array2.getBoard().indexOf(element), element.indexOf(cell)]);
        game.textContent = '';
        if (attack !== 'Already shot') {
          render(player, player2, 1);
        } else if (attack === 'Already shot'){
          render(player, player2, 2)
        }
        if (attack === 'sunk'){
          dialog.textContent = 'Ship sunk!'
          let button = document.createElement('button');
          button.textContent = 'Continue';
          button.addEventListener('click', ()=>{
            dialog.close();
          })
          dialog.appendChild(button);
          dialog.showModal();
        }
        if (attack === true){
          dialog.textContent = 'All ships sunk. Game Over!'
          let button = document.createElement('button');
          button.textContent = 'New Game';
          button.addEventListener('click', ()=>{
            //new game
            dialog.close();
          })
          dialog.appendChild(button);
          dialog.showModal();
        }
    }})
      if (cell.shot === true && cell.target !== null) {
        space.classList.add('hit')
      } else if (cell.shot === true && cell.target === null) {
        space.classList.add('miss')
      }
      row.appendChild(space);
    })
    board2.appendChild(row);
  });
  game.appendChild(board2);
}