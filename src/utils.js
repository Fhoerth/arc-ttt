import { winningMoves, defaultCell } from './constants';

const createColumns = () => ([
  defaultCell,
  defaultCell,
  defaultCell,
]);

export const createBoard = () => ([
  createColumns(),
  createColumns(),
  createColumns(),
]);

export const isWinningMove = (board, player, rowIdx, colIdx) => {
  const columnWin = winningMoves.columns[colIdx];
  const rowWin = winningMoves.rows[rowIdx];

  const winningReducer = (win, [x, y]) => {
    return win && board[x][y].playedBy === player; 
  };

  const isColumnWin = columnWin.reduce(winningReducer, true);
  const isRowWin = rowWin.reduce(winningReducer, true);
  const isDiagonal1Win = winningMoves.diagonals[0].reduce(winningReducer, true); 
  const isDiagonal2Win = winningMoves.diagonals[1].reduce(winningReducer, true); 

  return isRowWin || isColumnWin || isDiagonal1Win || isDiagonal2Win;

}