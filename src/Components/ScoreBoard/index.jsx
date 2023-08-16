import React from 'react';
import './styles.css';

export const ScoreBoard = ({ xScore, oScore, tie, playing }) => {
  return (
    <div className="score-board">
      <span className={`x-score ${playing == true ? 'xPlay' : ''}`}>
        X - {xScore}
      </span>
      <span className={`o-score ${playing == false ? 'oPlay' : ''}`}>
        O - {oScore}
      </span>
      <span className="tie">Tie - {tie}</span>
    </div>
  );
};
