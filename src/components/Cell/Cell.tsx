import React from 'react';
import './Cell.css';

interface CellProps {
  value: number;
  selected?: boolean;
  onClick?: () => void;
}

const Cell = ({ value, selected = false, onClick }: CellProps) => {
  const classSelected = value === 1 ? " selected" : "";
  return (
    <div className = { "cell" + classSelected } data-testid="cell" onClick = {onClick}>{}</div>
  );
}

export { Cell };