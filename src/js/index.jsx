import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers';
import { addTodo } from './actions';
import App from './components/App';

let store = createStore(todo);
store.dispatch(addTodo('Hello World!'));
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
