import React, { CSSProperties } from 'react';
import { Cell } from '../Cell';
import './Board.css';
import cn from 'clsx';

interface BoardProps {
  cells: number[],
  onClick: (i: number) => void,
  style?: object,
  rotate: boolean,
  rotateClass: string,
}

const Board = ({ cells, onClick, rotate, rotateClass }: BoardProps) => {
  const size = Math.sqrt(cells.length)
  const style: CSSProperties = { gridTemplateColumns: `repeat(${size}, auto)` };

  return (
    <div className={cn("board-wrapper", rotate && rotateClass, )} style={style} data-testid="board-test">
      {cells.map((cell, i) => <Cell key = {i} value = {cell} selected = {cell===1} onClick={() => onClick(i)}/>)}
    </div>
  )
}

export { Board };