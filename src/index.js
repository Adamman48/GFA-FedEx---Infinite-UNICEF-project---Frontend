import React from 'react';
import store from './store/store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  , document.querySelector('.container'));
