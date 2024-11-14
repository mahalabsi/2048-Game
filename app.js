var board
var score = 0
var rows = 4
var columns = 4

const setGame = () => {
  const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  console.log(board)
}

// Call the setGame function
window.onload = setGame()
