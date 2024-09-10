let container = document.querySelector('.container');
let gridSize = 500;
let squareSize = gridSize / 16;

for (let i=1; i <= 16; i++) {
    rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (let j=1; j <= 16; j++) {
        boxDiv = document.createElement('div');
        boxDiv.classList.add('square');
        boxDiv.style.cssText = `box-sizing: border-box; border: 1px solid black; height: ${squareSize}px; width: ${squareSize}px;`;
        boxDiv.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = "black";
        });
        rowDiv.appendChild(boxDiv);
    }
    container.appendChild(rowDiv);
}

let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetGrid);
document.body.appendChild(resetButton);

function resetGrid() {
    let boxes = document.querySelectorAll('.square');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    });
}