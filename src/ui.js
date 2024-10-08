import Player from "./player";
import render from "./render-board";

export default function makeGame() {
  let players = document.querySelector("#players");
  players.showModal();
  let onePlayer = document.querySelector("#one-player");
  let twoPlayer = document.querySelector("#two-player");
  let newgame = document.querySelector("#newgame");
  let gameover = document.querySelector("#gameover");

  let player1 = Player("human");
  let player2 = undefined;
  onePlayer.addEventListener("click", () => {
    player2 = Player("computer");
    placeShips(player1);
    placeCPUShips(player2);
    document.querySelector(".game").textContent = "";
    render(player1, player2);
    players.close();
  });
  twoPlayer.addEventListener("click", () => {
    player2 = Player("human");
    placeShips2(player2);
    placeShips(player1);
    document.querySelector(".game").textContent = "";
    render(player1, player2);
    players.close();
  });

  const handles = document.querySelectorAll(".handle");
  let placed = 0;
  let placed2 = 0;
  function placeShips(player) {
    const ships = document.querySelectorAll(".ship");
    document.querySelector("#player1ships").showModal();
    let grid = document.querySelector(".placegame");
    let board = player.board;
    let draggable = null;
    grid.textContent = "";
    board.getBoard().forEach((element) => {
      let row = document.createElement("div");
      row.classList.add("placerow");
      element.forEach((square) => {
        let cell = document.createElement("div");
        cell.classList.add("placecell");
        if (square.target !== null) {
          cell.classList.add("occupied");
        }
        cell.addEventListener("dragover", (event) => {
          event.preventDefault();
          cell.classList.add('over');
        });
        cell.addEventListener("dragleave", (event)=>{
          event.preventDefault();
          cell.classList.remove('over');
        })
        cell.addEventListener("drop", (event) => {
          event.preventDefault();
          cell.classList.remove('over');
          let value = draggable.textContent.split(",");
          let x = parseInt(value[1]);
          let y = value[0].replaceAll("'", "");
          let place = board.placeShip(
            [board.getBoard().indexOf(element), element.indexOf(square)],
            y,
            x
          );
          if (place === undefined) {
            if (draggable.classList.contains("l5")) {
              document.querySelectorAll(".l5").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            if (draggable.classList.contains("l4")) {
              document.querySelectorAll(".l4").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            if (draggable.classList.contains("l31")) {
              document.querySelectorAll(".l31").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            if (draggable.classList.contains("l32")) {
              document.querySelectorAll(".l32").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            if (draggable.classList.contains("l33")) {
              document.querySelectorAll(".l33").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            placed++;
            if (placed === 5) {
              document.querySelectorAll(".hidden").forEach((element) => {
                element.classList.remove("hidden");
              });
              document.querySelector("#player1ships").close();
            } else {
              placeShips(player);
            }
          }
        });
        row.appendChild(cell);
      });
      grid.appendChild(row);
    });
    handles.forEach((handle) => {
      handle.addEventListener("mousedown", (event) => {
        event.target.parentNode.setAttribute("draggable", "true");
      });
      handle.addEventListener("mouseup", (event) => {
        event.target.parentNode.setAttribute("draggable", "false");
      });
    });
    ships.forEach((ship) => {
      ship.addEventListener("dragstart", (event) => {
        draggable = event.target;
        draggable.classList.add("dragging");
      });
      ship.addEventListener("dragend", () => {
        draggable = null;
        ship.classList.remove("dragging");
        ship.setAttribute("draggable", "false");
      });
    });
  }
  function placeShips2(player) {
    const ships = document.querySelectorAll(".ship2");
    document.querySelector("#player2ships").showModal();
    let grid = document.querySelector(".placegame2");
    let board = player.board;
    let draggable = null;
    grid.textContent = "";
    board.getBoard().forEach((element) => {
      let row = document.createElement("div");
      row.classList.add("placerow2");
      element.forEach((square) => {
        let cell = document.createElement("div");
        cell.classList.add("placecell2");
        if (square.target !== null) {
          cell.classList.add("occupied");
        }
        cell.addEventListener("dragover", (event) => {
          event.preventDefault();
          cell.classList.add('over');
        });
        cell.addEventListener("dragleave", (event)=>{
          event.preventDefault();
          cell.classList.remove('over');
        })
        cell.addEventListener("drop", (event) => {
          event.preventDefault();
          cell.classList.remove('over');
          let value = draggable.textContent.split(",");
          let x = parseInt(value[1]);
          let y = value[0].replaceAll("'", "");
          let place = board.placeShip(
            [board.getBoard().indexOf(element), element.indexOf(square)],
            y,
            x
          );
          if (place === undefined) {
            if (draggable.classList.contains("l5")) {
              document.querySelectorAll(".l5").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            if (draggable.classList.contains("l4")) {
              document.querySelectorAll(".l4").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            if (draggable.classList.contains("l31")) {
              document.querySelectorAll(".l31").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            if (draggable.classList.contains("l32")) {
              document.querySelectorAll(".l32").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            if (draggable.classList.contains("l33")) {
              document.querySelectorAll(".l33").forEach((element) => {
                element.classList.add("hidden");
              });
            }
            placed2++;
            if (placed2 === 5) {
              document.querySelectorAll(".hidden").forEach((element) => {
                element.classList.remove("hidden");
              });
              document.querySelector("#player2ships").close();
              placed2 = 0;
            } else {
              placeShips2(player);
            }
          }
        });
        row.appendChild(cell);
      });
      grid.appendChild(row);
    });
    handles.forEach((handle) => {
      handle.addEventListener("mousedown", (event) => {
        event.target.parentNode.setAttribute("draggable", "true");
      });
      handle.addEventListener("mouseup", (event) => {
        event.target.parentNode.setAttribute("draggable", "false");
      });
    });
    ships.forEach((ship) => {
      ship.addEventListener("dragstart", (event) => {
        draggable = event.target;
        draggable.classList.add("dragging");
      });
      ship.addEventListener("dragend", () => {
        draggable = null;
        ship.classList.remove("dragging");
        ship.setAttribute("draggable", "false");
      });
    });
  }
  function placeCPUShips(player) {
    function generate() {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let z = Math.floor(Math.random() * 2);
      return [[x, y], z];
    }
    function place5() {
      let x = generate();
      let direction = "right";
      if (x[1] === 1) {
        direction = "down";
      }
      let place = player.board.placeShip(x[0], direction, 5);
      if (place !== undefined) {
        place5();
      }
    }
    function place4() {
      let x = generate();
      let direction = "right";
      if (x[1] === 1) {
        direction = "down";
      }
      let place = player.board.placeShip(x[0], direction, 4);
      if (place !== undefined) {
        place4();
      }
    }
    function place31() {
      let x = generate();
      let direction = "right";
      if (x[1] === 1) {
        direction = "down";
      }
      let place = player.board.placeShip(x[0], direction, 3);
      if (place !== undefined) {
        place31();
      }
    }
    function place32() {
      let x = generate();
      let direction = "right";
      if (x[1] === 1) {
        direction = "down";
      }
      let place = player.board.placeShip(x[0], direction, 3);
      if (place !== undefined) {
        place32();
      }
    }
    function place33() {
      let x = generate();
      let direction = "right";
      if (x[1] === 1) {
        direction = "down";
      }
      let place = player.board.placeShip(x[0], direction, 3);
      if (place !== undefined) {
        place33();
      }
    }
    place5();
    place4();
    place31();
    place32();
    place33();
  }
  newgame.addEventListener("click", () => {
    document.querySelector(".game").textContent = "";
    gameover.close();
    makeGame();
  });
}
