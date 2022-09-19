import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

function Counter() {
  // State: a counter value
  // const [counter, setCounter] = useState(0);
  // const { value: counter } = store.getState();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  // Action: code that causes an update to the state when something happens
  // const increment = () => {
  // setCounter(prevCounter => prevCounter + 1);
  // store.dispatch({ type: 'counter/increment' });
  // };

  // View: the UI definition
  return (
    <div>
      Value: {count}{' '}
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export { Counter };
