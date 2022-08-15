import React from 'react';
import cn from 'clsx';
import './Cell.css';

interface CellProps {
  value: number;
  selected?: boolean;
  onClick?: () => void;
}

const Cell = ({ value, selected = false, onClick }: CellProps) => {
  console.log(cn("cell", selected && "selected"), value);
  return (
    <div className = {cn("cell", selected && "selected")} data-testid="cell" onClick = {onClick}>{}</div>
  );
}

export { Cell };