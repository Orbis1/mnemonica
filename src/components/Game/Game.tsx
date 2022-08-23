import React from "react";
import equal from 'fast-deep-equal';
import { Board } from '../Board';
import { Stage } from '../Stage';
import { Status } from '../Status';
import cn from 'clsx';
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
  rotation: string;
  count?: number;
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
      stage: 'remember',
      rotation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i: number): void {
    const { target, cells, stage } = this.state;
    const filled = cells.slice().map(i => i === 0 ? 0 : 1);
    const lose = target[i] !== 1 && stage === 'guess';

    if (['win','game over', 'remember'].includes(stage)) return;

    const newCells = cells.slice();
    if (newCells[i] !== 0) return;
    if (lose) {
      newCells[i] = 3;
      this.setState({...this.state, cells: newCells, stage: 'game over'});
    } else {
      newCells[i] = 1;
      const win = equal(target, newCells);

      if (win) {
        const winCells = newCells.map(i => i === 0 ? 0 : 2)
        this.setState({...this.state, cells: winCells, stage: 'win'});
      } else {
        this.setState({...this.state, cells: newCells});
      }
    }
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
    const rotation = ['left', 'right'][Math.floor(Math.random()*2)];
    this.setState({
      ...this.state,
      target: target,
      cells: newCells,
      stage: 'guess',
      rotation
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return equal(this.props, nextProps);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.stage !== prevState.stage) {
  //     let count = this.state?.count || 0;
  //     count++;
  //     this.setState({...this.state, count: count})
  //     console.log('componentDidUpdate', count);
  //   }
  //   console.log('componentDidUpdate');
  // }

  onMouseClick(event: MouseEvent) {
    console.log(event);
  }

  componentDidMount() {
    console.log('game did mount', this.state)
    document.addEventListener('click', this.onMouseClick);
    setTimeout(() => {
      this.cleanBoard()
    }, 2000);
  }

  componentWillUnmout() {
    document.removeEventListener('click', this.onMouseClick);
    console.log('game will unmount')
  }

  render() {
    const { target, cells, stage, rotation } = this.state;
    const rotate = stage !== 'remember';
    const rotateClass = `rotated-${rotation}`;
    return (
      <div className = 'game' data-testid='game-test-id'>
        <Stage value={stage}/>
        <Board cells={cells} onClick={this.handleClick} rotateClass={rotateClass} rotate={rotate}/>
        <Status target={target} cells={cells} stage={stage}/>
      </div>
    );
  }
}
