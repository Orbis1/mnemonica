import React from "react";
import { Board } from '../Board';
import equal from 'fast-deep-equal';
import './Game.css';

interface GameProps {
  initialLevel: number;
  onFinish: (level: number) => void;
}

interface GameState {
  level: number;
  size: number;
  cells: number[];
  target: number[];
  stage: string;
}

export class Game extends React.Component<GameProps, GameState> {

  constructor(props: GameProps) {
    console.log('Game.constructor');
    super(props);
    const cells = Array((props.initialLevel + 2)**2).fill(0);
    const target = this.randomize(cells);
    this.state = {
      level: props.initialLevel,
      size: props.initialLevel + 2,
      cells: target,
      target,
      stage: 'remember'
    };
  }

  handleClick(i: number): void {
    const { target, cells, stage } = this.state;
    const win = equal(target, cells) && stage === 'guess';
    if (win) return;
    const newCells = this.state.cells.slice();
    newCells[i] = newCells[i] === 1 ? 0 : 1;
    this.setState({...this.state, cells: newCells});
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  randomize(arr: number[]) {
    const newArr = arr.slice();
    const replaces = this.getRandomInt(1, arr.length + 1);
    for (let i = 0; i < replaces; i++) {
      const index = this.getRandomInt(0, arr.length);
      newArr[index] = newArr[index] === 0 ? 1 : 0; 
    }
    return newArr;
  }

  cleanBoard() {
    const { target, cells } = this.state;
    const newCells = cells.slice().fill(0);
    this.setState({
      ...this.state,
      target: target,
      cells: newCells,
      stage: 'guess'
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.cleanBoard()
    }, 5000);
  }

  render() {
    const { target, cells, stage } = this.state;
    const win = equal(target, cells) && stage === 'guess';
    console.log({ stage, data: `[${target.join(',')}] = [${cells.join(',')}]` })
    return (
      <div className = 'game' data-testid = 'game-test-id'>
        <Board cells = {cells} onClick={(i:number) => this.handleClick(i)}/>
      </div>
    );
  }
}
