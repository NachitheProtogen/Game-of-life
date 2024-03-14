const rows = 32; // Man könnte das feld auch größer machen
const cols = 32; // aber naja

function toggleCell(cellInp) { //Zelle töten oder leben lassen
  let cell = document.getElementById(cellInp);
  if (cell.style.backgroundColor=="white") {
    cell.style.backgroundColor = "black";
  } else {
    cell.style.backgroundColor = "white";
  };
}

function countAliveNeighbors(row, col) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let count = 0;

  directions.forEach(([i, j]) => {
    const newRow = row + i;
    const newCol = col + j;

    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      const neighbor = document.getElementById(`cell-${newRow}-${newCol}`);
      if (neighbor.style.backgroundColor == "black") {
        count++;
      }
    }
  });

  return count;
};

 

function createEmptyGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('button');
        cell.className = "cell"
        cell.style.backgroundColor = "white"
        cell.id = `cell-${i}-${j}`;
        cell.addEventListener("click", () => {
          toggleCell(cell.id);
        }) 
        canvas.appendChild(cell);
    }
    canvas.appendChild(document.createElement('br'));
};};

let timer;

play.addEventListener("click", () => {
  timer = setInterval(() => {
    updateGrid()
  }, 1000);

})

pause.addEventListener("click", () => {
clearInterval(timer);
})

reload.addEventListener("click", () => {
  document.location.reload();
})

createEmptyGrid(rows, cols);