import React from 'react';
import equal from 'fast-deep-equal';
import './Status.css';

interface StatusProps {
  target: number[];
  cells: number[];
  stage: string;
}

const Status = ({ target, cells, stage }: StatusProps) => {
  const win = equal(target, cells) && stage === 'guess';
  const data = `[${target.join(',')}] = [${cells.join(',')}]`;
  return (
    // <div className="status">{win ? 'You are win!' : data}</div>
    <div className="status">{ data}</div>
  );
}

export { Status };