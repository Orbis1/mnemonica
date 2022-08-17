import React from 'react';
import cn from 'clsx';
import './Cell.css';

interface CellProps {
  value: number;
  selected?: boolean;
  onClick?: () => void;
}

const Cell = ({ value, selected = false, onClick }: CellProps) => {
  const style = [null, "selected", "win", "wrong"];
  return (
    <div className = {cn("cell", style[value])} data-testid="cell" onClick = {onClick}>{}</div>
  );
}

export { Cell };