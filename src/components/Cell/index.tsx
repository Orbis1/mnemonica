import React from 'react';
import './styles.css';

interface CellProps {
  value: number;
  selected?: boolean;
  onClick?: (i: number) => void;
}

const Cell = ({ value, selected = false, onClick }: CellProps) => {
  const classSelected = selected ? " selected" : "";
  return (
    <div className = { "cell" + classSelected } data-testid="cell" onClick = {onClick}>{value}</div>
  );
}

export { Cell };