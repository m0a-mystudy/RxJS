import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {pingReducer, pingEpic} from './epic';
import {createEpicMiddleware} from 'redux-observable';

const epicMiddleware = createEpicMiddleware(pingEpic);
const store = createStore(pingReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
