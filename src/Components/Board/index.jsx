import React from 'react';
import './styles.css';
import { Box } from '../Box';

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((item, idx) => (
        <Box
          Key={idx}
          value={item}
          onClick={() => item === null && onClick(idx)}
        />
      ))}
    </div>
  );
};
