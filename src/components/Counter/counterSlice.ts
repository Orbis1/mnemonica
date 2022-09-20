import { createSlice } from '@reduxjs/toolkit';

interface State {
  counter: {
    value: number;
  };
}

type Action = (state: State) => void;

type Dispatch = (payload: any, type?: string) => void;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: State) => state.counter.value;

export default counterSlice.reducer;
