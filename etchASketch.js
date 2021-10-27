const kGrid = document.querySelector('.grid')
const kResetBtn = document.querySelector('.reset-btn')
const kLineBtn = document.querySelector('.line-btn')
const kDefaultGridSize = 16



// Function:    createGrid()
// Description: creates a grid an equal sized grid based on the
//              parameter passed in
// Parameters:  gridSize: the size of the grid to be created
// Return:      N/A
const createGrid = (gridSize = kDefaultGridSize) => {
  kGrid.innerHTML = ""

  // sets the row and column size for the grid
  kGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  kGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

  // loop to fill grid with grid squares
  for (i = 0; i < gridSize ** 2; i++) {
    kGrid.appendChild(document.createElement('div'))
  }
}



// Function:    draw()
// Description: called upon whenever the mouse hovers over the grid and will
//              change the background color of the grid tile the mouse hovers over
// Parameters:  e: additional info about the event that called this function
// Return:      N/A
const draw = (e) => {
  if (e.target !== kGrid) {
    e.target.style.backgroundColor = '#000000'
  }
}



// Function:    promptForGridSize()
// Description: 
// Parameters:  
// Return:      
const promptForGridSize = () => {
  let newGridSize = prompt("Please enter the new grid size from 1 - 100:")

  if (!/^[1-9][0-9]?$|^100$/.test(newGridSize)) {
    alert("Entered grid size invalid, setting grid size to 16")
    return kDefaultGridSize
  }

  return newGridSize
}



// Function:    reset()
// Description: resets the current grid and prompts for a new grid size
// Parameters:  e: additional info about the event that called this function
// Return:      N/A
const reset = () => {
  createGrid(promptForGridSize())
}


// Function:    toggleBorder()
// Description: adds borders to grid squares or removes borders if already present
// Parameters:  N/A
// Return:      N/A
const toggleBorder = () => {
  kGrid.childNodes.forEach(node => {
    node.classList.toggle('border')
  })
}


kGrid.addEventListener('mouseover', draw)
kResetBtn.addEventListener('click', reset)
kLineBtn.addEventListener('click', toggleBorder)

createGrid(kDefaultGridSize)
