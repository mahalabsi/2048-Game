let board
let score = 0
let rows = 4
let columns = 4
const boardElement = document.getElementById('board')

const setGame = () => {
  const rows = 4
  const columns = 4
  const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const tile = document.createElement('div')
      tile.id = `${r}-${c}`
      const num = board[r][c]
      updateTile(tile, num)
      boardElement.append(tile)
    }
  }

  // Create two tiles to begin the game
  setTwo()
  setTwo()
}

const updateTile = (tile, num) => {
  tile.innerText = ''
  tile.className = 'tile' // Clear the classList
  if (num > 0) {
    tile.innerText = num.toString()
    tile.classList.add('x' + (num <= 4096 ? num : 8192))
  }
}

// Call the setGame function when the document has finished loading
document.addEventListener('DOMContentLoaded', setGame)

document.addEventListener('keydown', (ev) => {
  if (ev.code == 'ArrowLeft') {
    slideLeft()
    setTwo()
  } else if (ev.code == 'ArrowRight') {
    slideRight()
    setTwo()
  } else if (ev.code == 'ArrowUp') {
    slideUp()
    setTwo()
  } else if (ev.code == 'ArrowDown') {
    slideDown()
    setTwo()
  }
})

// const slideLeft() => {

// }
