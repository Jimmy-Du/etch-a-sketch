const kGrid = document.querySelector('.grid')
const kDefaultGridSize = 16



// Function:    createGrid()
// Description: creates a grid an equal sized grid based on the
//              parameter passed in
// Parameters:  gridSize: the size of the grid to be created
// Return:      N/A
const createGrid = (gridSize = kDefaultGridSize) => {
  // sets the row and column size for the grid
  kGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  kGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

  // loop to fill grid with grid squares
  for (i = 0; i < gridSize ** 2; i++) {
    kGrid.appendChild(document.createElement('div'))
  }
}



// Function:    draw()
// Description: 
// Parameters:  e: additional info about the event that called this function
// Return:      N/A
const draw = (e) => {
  if (e.target !== kGrid) {
    e.target.style.backgroundColor = '#000000'
  }
}



kGrid.addEventListener('mouseover', draw)
createGrid(kDefaultGridSize)