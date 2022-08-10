import React from 'react';
import { Cell } from '../Cell';
import './styles.css';

interface BoardProps {
  cells: number[],
  onClick: (i: number) => void,
  style?: object
}

const Board = ({ cells, onClick }: BoardProps) => {
  const size = Math.sqrt(cells.length)
  let body = [];
  let BoardStyle: object = { gridTemplateColumns: `repeat(${size}, max-content)` };

  for (let i = 0; i < cells.length; i++) {
    body.push(<Cell key = {`cell-${i}`} value = {cells[i]} onClick={() => onClick(i)}/>)
  }

  return (
    <div className="board-wrapper" style={BoardStyle} data-testid="board-test">
      {body}
    </div>
  )
}

export { Board };