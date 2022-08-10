import React from "react";
import { Board } from '../Board';

interface GameProps {
  initialLevel: number;
  onFinish: (level: number) => void;
}

interface GameState {
  level: number;
  size: number;
  cells: number[];
}

export class Game extends React.Component<GameProps, GameState> {

  constructor(props: GameProps) {
    super(props);
    this.state = {
      level: props.initialLevel,
      size: props.initialLevel + 2,
      cells: Array(this.state.size**2).fill(0), 
    };
  }

  render() {
    return (
      <div className = 'game' data-testid = 'game-test-id'>
        <Board />
      </div>
    );
  }
}
