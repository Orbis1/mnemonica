import React from 'react';
import './Stage.css';

interface StageProps {
  value: string;
}

const Stage = ({ value }: StageProps) => {
  return (
    <div className="stage"> {value} </div>
  );
}

export { Stage };