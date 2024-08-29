export default function render(player, player2, activePlayer = 1) {
  if (player2.type === "human") {
    let array = player2.board;
    let game = document.querySelector(".game");
    let board = document.createElement("div");
    let dialog = document.querySelector("#sunk");
    board.classList.add("gameboard");
    array.getBoard().forEach((element) => {
      let row = document.createElement("div");
      row.classList.add("row");
      element.forEach((cell) => {
        let space = document.createElement("div");
        space.classList.add("space");
        space.addEventListener("click", () => {
          if (activePlayer === 1) {
            let attack = array.receiveAttack([
              array.getBoard().indexOf(element),
              element.indexOf(cell),
            ]);
            game.textContent = "";
            if (attack !== "Already shot") {
              render(player, player2, 2);
            } else if (attack === "Already shot") {
              render(player, player2, 1);
            }
            if (attack === "sunk") {
              dialog.textContent = "Player 2's ship sunk!";
              let button = document.createElement("button");
              button.textContent = "Continue";
              button.addEventListener("click", () => {
                dialog.close();
              });
              dialog.appendChild(button);
              dialog.showModal();
            }
            if (attack === true) {
              document.querySelector("#gameover").showModal();
            }
          }
        });
        if (cell.shot === true && cell.target !== null) {
          space.classList.add("hit");
        } else if (cell.shot === true && cell.target === null) {
          space.classList.add("miss");
        }
        row.appendChild(space);
      });
      board.appendChild(row);
    });
    game.appendChild(board);
    let array2 = player.board;
    let board2 = document.createElement("div");
    board2.classList.add("gameboard");
    array2.getBoard().forEach((element) => {
      let row = document.createElement("div");
      row.classList.add("row");
      element.forEach((cell) => {
        let space = document.createElement("div");
        space.classList.add("space");
        space.addEventListener("click", () => {
          if (activePlayer === 2) {
            let attack = array2.receiveAttack([
              array2.getBoard().indexOf(element),
              element.indexOf(cell),
            ]);
            game.textContent = "";
            if (attack !== "Already shot") {
              render(player, player2, 1);
            } else if (attack === "Already shot") {
              render(player, player2, 2);
            }
            if (attack === "sunk") {
              dialog.textContent = "Player 1's ship sunk!";
              let button = document.createElement("button");
              button.textContent = "Continue";
              button.addEventListener("click", () => {
                dialog.close();
              });
              dialog.appendChild(button);
              dialog.showModal();
            }
            if (attack === true) {
              document.querySelector("#gameover").showModal();
            }
          }
        });
        if (cell.shot === true && cell.target !== null) {
          space.classList.add("hit");
        } else if (cell.shot === true && cell.target === null) {
          space.classList.add("miss");
        }
        row.appendChild(space);
      });
      board2.appendChild(row);
    });
    game.appendChild(board2);
  } else if (player2.type === "computer") {
    let array = player2.board;
    let game = document.querySelector(".game");
    let board = document.createElement("div");
    let dialog = document.querySelector("#sunk");
    board.classList.add("gameboard");
    array.getBoard().forEach((element) => {
      let row = document.createElement("div");
      row.classList.add("row");
      element.forEach((cell) => {
        let space = document.createElement("div");
        space.classList.add("space");
        space.addEventListener("click", () => {
          let attack = array.receiveAttack([
            array.getBoard().indexOf(element),
            element.indexOf(cell),
          ]);
          game.textContent = "";
          if (attack !== "Already shot") {
            function computerAttack() {
              let x = Math.floor(Math.random() * 10);
              let y = Math.floor(Math.random() * 10);
              let board = player.board.getBoard();
              function followUp() {
                for (let i = 0; i < 10; i++) {
                  for (let j = 0; j < 10; j++) {
                    if (board[i][j].target !== null) {
                      if (
                        board[i][j].shot === true &&
                        board[i][j].target.isSunk() === false
                      ) {
                        if (i + 1 <= 9) {
                          if (board[i + 1][j].shot === true && board[i + 1][j].target ==! null) {
                            if (i - 1 >= 0) {
                              if (board[i - 1][j].shot !== true) {
                                x = i - 1;
                                y = j;
                                return;
                              }
                            } 
                          }
                        } 
                        if (j + 1 <= 9) {
                          if (board[i][j + 1].shot === true && board[i][j+1].target!==null) {
                            if (j - 1 >= 0) {
                              if (board[i][j - 1].shot !== true) {
                                x = i;
                                y = j - 1;
                                return;
                              }
                            }
                          }
                        } 
                        if (i - 1 >= 0) {
                          if (board[i - 1][j].shot === true && board[i - 1][j].target !== null) {
                            if (i + 1 <= 9) {
                              if (board[i + 1][j].shot !== true) {
                                x = i + 1;
                                y = j;
                                return;
                              }
                            } 
                          }
                        } 
                        if (j - 1 >= 0) {
                          if (board[i][j - 1].shot === true && board[i][j - 1].target !== null) {
                            if (j + 1 <= 9) {
                              if (board[i][j + 1].shot !== true) {
                                x = i;
                                y = j + 1;
                                return;
                              }
                            } 
                          }
                        }
                      // break
                        if (i + 1 <= 9) {
                          if (board[i + 1][j].shot !== true) {
                            x = i + 1;
                            y = j;
                            return;
                          }
                        } 
                        if (j + 1 <= 9) {
                          if (board[i][j + 1].shot !== true) {
                            x = i;
                            y = j + 1;
                            return;
                          }
                        } 
                        if (i - 1 >= 0) {
                          if (board[i - 1][j].shot !== true) {
                            x = i - 1;
                            y = j;
                            return;
                          }
                        } 
                        if (j - 1 >= 0) {
                          if (board[i][j - 1].shot !== true) {
                            x = i;
                            y = j - 1;
                            return;
                          }
                        }
                      }
                    }
                  }
                }
              }
              followUp();

              let cpuAttack = player.board.receiveAttack([x, y]);
              if (cpuAttack === "Already shot") {
                computerAttack();
              }
              if (cpuAttack === "sunk") {
                dialog.textContent = "Player 1's ship sunk!";
                let button = document.createElement("button");
                button.textContent = "Continue";
                button.addEventListener("click", () => {
                  dialog.close();
                });
                dialog.appendChild(button);
                dialog.showModal();
              }
              if (cpuAttack === true) {
                document.querySelector("#gameover").showModal();
              }
            }
            let isHit = computerAttack();
            render(player, player2, 1, isHit);
          } else if (attack === "Already shot") {
            render(player, player2, 1);
          }
          if (attack === "sunk") {
            dialog.textContent = "Player 2's ship sunk!";
            let button = document.createElement("button");
            button.textContent = "Continue";
            button.addEventListener("click", () => {
              dialog.close();
            });
            dialog.appendChild(button);
            dialog.showModal();
          }
          if (attack === true) {
            document.querySelector("#gameover").showModal();
          }
        });
        if (cell.shot === true && cell.target !== null) {
          space.classList.add("hit");
        } else if (cell.shot === true && cell.target === null) {
          space.classList.add("miss");
        }
        row.appendChild(space);
      });
      board.appendChild(row);
    });
    game.appendChild(board);
    let array2 = player.board;
    let board2 = document.createElement("div");
    board2.classList.add("gameboard");
    array2.getBoard().forEach((element) => {
      let row = document.createElement("div");
      row.classList.add("row");
      element.forEach((cell) => {
        let space = document.createElement("div");
        space.classList.add("space");
        if (cell.shot === true && cell.target !== null) {
          space.classList.add("hit");
        } else if (cell.shot === true && cell.target === null) {
          space.classList.add("miss");
        }
        row.appendChild(space);
      });
      board2.appendChild(row);
    });
    game.appendChild(board2);
  }
}
