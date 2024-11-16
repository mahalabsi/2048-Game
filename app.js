// // let board = 0
// let score = 0
// let rows = 4
// let columns = 4
// const boardElement = document.getElementById('board')

// const setGame = () => {
//   const rows = 4
//   const columns = 4
//   const board = [
//     [2, 0, 2, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
//   ]

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < columns; c++) {
//       const tile = document.createElement('div')
//       tile.id = `${r}-${c}`
//       const num = board[r][c]
//       updateTile(tile, num)
//       boardElement.appendChild(tile)
//     }
//   }
// }

// const updateTile = (tile, num) => {
//   tile.innerText = ''
//   tile.classList = 'tile'
//   if (num > 0) {
//     tile.innerText = num

//     if (num <= 4096) {
//       tile.classList.add('t' + num)
//     } else {
//       tile.classList.add('t8192')
//     }
//   }
// }

// document.addEventListener('DOMContentLoaded', setGame)

// document.addEventListener('keyup', (ev) => {
//   if (ev.code == 'ArrowLeft') {
//     slideLeft()
//     setTwo()
//   } else if (ev.code == 'ArrowRight') {
//     slideRight()
//     setTwo()
//   } else if (ev.code == 'ArrowUp') {
//     slideUp()
//     setTwo()
//   } else if (ev.code == 'ArrowDown') {
//     slideDown()
//     setTwo()
//   }
// })

// //below this comes the salad :

// const slideLeft = () => {
//   board.forEach((row, r) => {
//     board[r] = slide(row)
//   })

//   updateBoard()
// }

// const slideRight = () => {
//   board.forEach((row, r) => {
//     board[r] = slide(row.slice().reverse()).reverse()
//   })

//   updateBoard()
// }

// const slideUp = () => {
//   for (let c = 0; c < columns; c++) {
//     let column = []
//     for (let r = 0; r < rows; r++) {
//       column.push(board[r][c])
//     }
//     column = slide(column)

//     for (let r = 0; r < rows; r++) {
//       board[r][c] = column[r]
//     }
//   }

//   updateBoard()
// }

// const slideDown = () => {
//   for (let c = 0; c < columns; c++) {
//     let column = []
//     for (let r = rows - 1; r >= 0; r--) {
//       column.push(board[r][c])
//     }
//     column = slide(column)

//     for (let r = rows - 1; r >= 0; r--) {
//       board[r][c] = column[rows - 1 - r]
//     }
//   }

//   updateBoard()
// }

// const updateBoard = () => {
//   board.forEach((row, r) => {
//     row.forEach((tile, c) => {
//       const tileElement = document.getElementById(`${r}-${c}`)
//       updateTile(tileElement, tile)
//     })
//   })
// }
let score = 0
let rows = 4
let columns = 4
const boardElement = document.getElementById('board')
let board = [
  [2, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

const setGame = () => {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const tile = document.createElement('div')
      tile.id = `${r}-${c}`
      const num = board[r][c]
      updateTile(tile, num)
      boardElement.appendChild(tile)
    }
  }
}

const updateTile = (tile, num) => {
  tile.innerText = ''
  tile.classList = 'tile'
  if (num > 0) {
    tile.innerText = num
    if (num <= 4096) {
      tile.classList.add('t' + num)
    } else {
      tile.classList.add('t8192')
    }
  }
}

document.addEventListener('DOMContentLoaded', setGame)

document.addEventListener('keyup', (ev) => {
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

const slideLeft = () => {
  board.forEach((row, r) => {
    board[r] = slide(row)
  })

  updateBoard()
}

const slideRight = () => {
  board.forEach((row, r) => {
    board[r] = slide(row.slice().reverse()).reverse()
  })

  updateBoard()
}

const slideUp = () => {
  for (let c = 0; c < columns; c++) {
    let column = []
    for (let r = 0; r < rows; r++) {
      column.push(board[r][c])
    }
    column = slide(column)

    for (let r = 0; r < rows; r++) {
      board[r][c] = column[r]
    }
  }

  updateBoard()
}

const slideDown = () => {
  for (let c = 0; c < columns; c++) {
    let column = []
    for (let r = rows - 1; r >= 0; r--) {
      column.push(board[r][c])
    }
    column = slide(column)

    for (let r = rows - 1; r >= 0; r--) {
      board[r][c] = column[rows - 1 - r]
    }
  }

  updateBoard()
}

const updateBoard = () => {
  board.forEach((row, r) => {
    row.forEach((tile, c) => {
      const tileElement = document.getElementById(`${r}-${c}`)
      updateTile(tileElement, tile)
    })
  })
}

const slide = (row) => {
  // Remove zeros from the row
  const filteredRow = row.filter((num) => num !== 0)

  // Merge adjacent equal numbers
  const mergedRow = []
  for (let i = 0; i < filteredRow.length; i++) {
    if (filteredRow[i] === filteredRow[i + 1]) {
      mergedRow.push(filteredRow[i] * 2)
      i++ // Skip the next element
    } else {
      mergedRow.push(filteredRow[i])
    }
  }

  // Fill the rest of the row with zeros
  while (mergedRow.length < row.length) {
    mergedRow.push(0)
  }

  return mergedRow
}

const setTwo = () => {
  // Find all empty cells
  const emptyCells = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] === 0) {
        emptyCells.push({ row: r, col: c })
      }
    }
  }

  // If there are empty cells, randomly choose one to set to 2
  if (emptyCells.length > 0) {
    const { row, col } =
      emptyCells[Math.floor(Math.random() * emptyCells.length)]
    board[row][col] = 2
    updateBoard()
  }
}
