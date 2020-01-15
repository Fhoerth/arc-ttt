import React from 'react';

import { players, X, O } from '../constants';

function Cell({ playedBy }) {
  if (!playedBy) {
    return (<span>Empty</span>);
  }

  if (playedBy === players.player1) {
    return <span className="cell">{X}</span>
  }

  return <span className="cell">{O}</span>
}

export default Cell;