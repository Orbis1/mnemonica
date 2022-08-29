import React, { useState, useEffect } from "react";
import equal from 'fast-deep-equal';
import { Board } from '../Board';
import { Stage } from '../Stage';
import { Status } from '../Status';
import './Game.css';

enum gameStage {
  REMEMBER = 'remember',
  GUESS = 'guess',
  WIN = 'win',
  GAME_OVER = 'game over'
}

interface GameProps {
  initialLevel: number;
  onFinish: (level: number) => void;
  goal: number[];
}

interface GameState {
  level: number;
  size: number;
  cells: number[];
  target: number[];
  stage: gameStage;
  rotation: string;
  count?: number;
}

const Game: React.FC<GameProps> = ({ initialLevel, goal}): JSX.Element => {

  const initialState: GameState = {
    level: initialLevel,
    size: initialLevel + 2,
    target: goal,
    cells: goal,
    stage: gameStage.REMEMBER,
    rotation: '',
  }
  
  const [gameState, setGameState] = useState(initialState);
  const { cells, target, stage, rotation} = gameState;

  const handleClick = (state: GameState, i: number): void => {
    const { target, cells, stage } = state;
    const lose = target[i] !== 1 && stage === gameStage.GUESS;

    if ([gameStage.WIN, gameStage.GAME_OVER, gameStage.REMEMBER].includes(stage)) return;

    const newCells = cells.slice();
    if (newCells[i] !== 0) return;
    if (lose) {
      newCells[i] = 3;
      setGameState({...gameState, cells: newCells, stage: gameStage.GAME_OVER,});
    } else {
      newCells[i] = 1;
      const win = equal(target, newCells);

      if (win) {
        const winCells = newCells.map(i => i === 0 ? 0 : 2)
        setGameState({...gameState, cells: winCells, stage: gameStage.WIN});
      } else {
        setGameState({...gameState, cells: newCells});
      }
    }
    console.log(gameState);
  }

  const handle = handleClick.bind(null, gameState);

  const cleanBoard = (state: GameState) => {
    const { target } = state;
    console.log({target});
    const newCells = target.slice().fill(0);
    const rotation = ['left', 'right'][Math.floor(Math.random()*2)];
    setGameState({
      ...gameState,
      target: target,
      cells: newCells,
      stage: gameStage.GUESS,
      rotation
    })
  }

  useEffect(() => {
    console.log('game did mount')
    setTimeout(() => {
      cleanBoard(gameState)
    }, 2000);
    return () => console.log('game will unmount');
  }, [])

  const rotate = stage !== gameStage.REMEMBER;
  const rotateClass = `rotated-${rotation}`;

  return (
    <div className = 'game' data-testid='game-test-id'>
      <Stage value={stage}/>
      <Board cells={cells} onClick={handle} rotateClass={rotateClass} rotate={rotate}/>
      <Status target={target} cells={cells} stage={stage}/>
    </div>
  )
}

export { Game };
