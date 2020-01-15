export const X = 'x';
export const O = 'o';
export const size = 3;
export const defaultCell = { playedBy: null };
export const winningMoves = {
  rows: [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
  ],
  columns: [
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
  ],
  diagonals: [
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ],
};
export const players = {
  player1: 'player1',
  player2: 'player2',
};
