import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/Game';
import { randomize } from './utils';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.querySelector('body') as HTMLElement);

const initialLevel = 0;
const cells = Array((initialLevel + 2) ** 2).fill(0);
const goal = randomize(cells);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Game
        goal={goal}
        initialLevel={initialLevel}
        onFinish={() => console.log('the end')}
      />
    </React.StrictMode>
  </Provider>
);
