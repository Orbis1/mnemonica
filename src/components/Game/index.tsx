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
    const cells = Array((props.initialLevel + 2)**2).fill(0);
    this.state = {
      level: props.initialLevel,
      size: props.initialLevel + 2,
      cells
    };
  }

  handleClick(i: number): void {
    const newCells = this.state.cells.slice();
    newCells[i] = newCells[i] === 1 ? 0 : 1;
    this.setState({...this.state, cells: newCells});
  }

  render() {
    return (
      <div className = 'game' data-testid = 'game-test-id'>
        <Board cells = {this.state.cells} onClick={(i:number) => this.handleClick(i)}/>
      </div>
    );
  }
}
