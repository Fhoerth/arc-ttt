import React, { useState } from 'react';

import {
  X,
  O,
  size,
  players,
} from '../constants';
import { createBoard, isWinningMove } from '../utils';

import Cell from './Cell';
import PlayerTurn from './PlayerTurn';

import './styles.css';

function Board() {
  const [player, setPlayer] = useState(players.player1);
  const [board, setBoard] = useState(createBoard());

  const switchPlayer = () => {
    if (player === players.player1) {
      setPlayer(players.player2);
    } else {
      setPlayer(players.player1);
    }
  };

  const play = (rowIdx, colIdx) => () => {
    const isRowPlayed = !!board[rowIdx][colIdx].playedBy;

    if (!isRowPlayed) {
      const newBoard = [...board];

      newBoard[rowIdx][colIdx] = { playedBy: player }; 
      
      console.log(isWinningMove(newBoard, player, rowIdx, colIdx));

      setBoard(newBoard);
      switchPlayer();
    }
  };


  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <PlayerTurn player={player} />

      <table className="board">
        <tbody>
          {board.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map(({ playedBy }, colIdx) => (
                <td key={`${rowIdx}-${colIdx}`} onClick={play(rowIdx, colIdx)}>
                  <Cell playedBy={playedBy} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Board;
