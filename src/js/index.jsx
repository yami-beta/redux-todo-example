import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
