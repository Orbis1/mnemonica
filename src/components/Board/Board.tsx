import React, { CSSProperties } from 'react';
import { Cell } from '../Cell';
import './Board.css';

interface BoardProps {
  cells: number[],
  onClick: (i: number) => void,
  style?: object
}

const Board = ({ cells, onClick }: BoardProps) => {
  const size = Math.sqrt(cells.length)
  let style: CSSProperties = { gridTemplateColumns: `repeat(${size}, max-content)` };

  return (
    <div className="board-wrapper" style={style} data-testid="board-test">
      {cells.map((cell, i) => <Cell key = {i} value = {cell} selected = {cell===1} onClick={() => onClick(i)}/>)}
    </div>
  )
}

export { Board };