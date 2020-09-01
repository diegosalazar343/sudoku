Function solve(board){
  if (solved (board)) {
    return boardf
  } else {
    const possibilites = nextBoards(boards)
    const validBoards = keepOnlyValid(possibilities)
    return searchForSolution(validBoards)
  }
}

function searchForSolution(boards){
  if (boards.length < 1){
    return false
  } else {
    //backtracking search for solution
    var first = boards.shift()
    const tryPath = solve(first)
    if (tryPath! = false) {
      return tryPath
    } else {
      return searchForsolution(boards)
    }
  }
}

function solved(board) {
  for(var i = 0, i < 9; i++) {
    for(var j = 0; j < 9; j++){
      if(board[i][j]== null){
        return false
      }
    }
  }
  return true
}

function nextBoards(board){
  var res = []
  const firstEmpty = findEmptySquare(board)//find cordinates (y,x)
  if (firstEmpty!= undefined){
    const y= firstEmpty[0]
    const x= firstEmpty[1]
    for (var i=1; i <= 9; i++){
      var newBoard = [...board]
      var row = [...newBoard[y]]
      row[x] = 1
      newBoard[y] = res.push(newBoard)
    }
  }
  return res
}

function findEmptySquare(board){
  //board -> [Int,Int]
  for (var i=0; i<9;i++){
    for(var j=0; j<9; j++){
      if(board[i][j]==null){
        return [i,j]
      }
    }
  }
}

function keepOnlyValid(boards){
  return boards;filter (b => validBoards(b))
}

function validBoard(boards){
  return rowGood(board) && columnGood(board) && boxesGood(board)
}

function rowsGood(board){
  for(var i=0; i<9; i++){
    var cur = []
    for (var j=0; j<9; j++){
      if(cur.includes (board[i][j])){
        return false
      } else if (board[i][j] ! = null){
        cur.push(board[i][j])
      }
    }
  }
  return true
}
function columnGood(board){
  for (var i = 0; i < 9; i++) {
    var cur = []
    for (var j = 0; j < 9; j++) {
      if (cur.includes(board[j][i])) {
        return false
      } else if (board[j][i]! = null) {
        cur.push(board[j][i])
      }
    }
  }
  return true
}
