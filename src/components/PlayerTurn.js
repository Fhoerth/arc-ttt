import React from 'react';

import { players } from '../constants';

function Cell({ player }) {
  if (player === players.player1) {
    return <span className="cell">Turn: Player 1</span>
  }

  return <span className="cell">Turn: Player 2</span>
}

export default Cell;