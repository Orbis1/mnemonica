import React from 'react';
import { Cell } from '../Cell';
import './styles.css';

interface GridProps {
  size: number,
  style?: object
}

const Grid = ({ size = 3}) => {
  let body = [];
  let gridStyle: object = { gridTemplateColumns: `repeat(${size}, max-content)` };
  for (let i = 0; i < size * size; i++) {
    body.push(<Cell key={`cell-${i}`}/>)
  }
  return (
    <div className="grid-wrapper" style={gridStyle} data-testid="grid-test">
      {body}
    </div>
  )
}

export { Grid };