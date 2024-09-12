const gridSize = 500;
let resetButton, numSquares;

function createGrid(numSquares) {
  // Remove the existing container
  let container = document.querySelector(".container");
  container.remove();

  // Create a new container
  container = document.createElement("div");
  container.classList.add("container");

  let squareSize = gridSize / numSquares;

  for (let i = 1; i <= numSquares; i++) {
    rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 1; j <= numSquares; j++) {
      boxDiv = document.createElement("div");
      boxDiv.classList.add("square");
      boxDiv.style.cssText = `box-sizing: border-box; border: 1px solid black; height: ${squareSize}px; width: ${squareSize}px;`;
      boxDiv.addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "black";
      });
      rowDiv.appendChild(boxDiv);
    }
    container.appendChild(rowDiv);
  }

  document.body.appendChild(container);
}

function resetGrid() {
  let boxes = document.querySelectorAll(".square");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
}

createGrid(16);

resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", resetGrid);
document.body.appendChild(resetButton);
