import React from 'react';
import { Cell } from '../Cell';
import './styles.css';

interface BoardProps {
  size: number,
  style?: object
}

const Board = ({ size = 3}) => {
  let body = [];
  let BoardStyle: object = { BoardTemplateColumns: `repeat(${size}, max-content)` };
  for (let i = 0; i < size * size; i++) {
    body.push(<Cell key={`cell-${i}`}/>)
  }
  return (
    <div className="Board-wrapper" style={BoardStyle} data-testid="Board-test">
      {body}
    </div>
  )
}

export { Board };