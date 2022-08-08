import React, { FC } from 'react';
import './cell.css';

interface CellProps {
  selected?: boolean,
  onClick?: () => void
}

const Cell = ({ selected = false, onClick }: CellProps) => {
  const classSelected = selected ? " selected" : "";
  return (
    <div className = { "cell" + classSelected } data-testid="cell" onClick = { onClick }></div>
  );
}

export { Cell };