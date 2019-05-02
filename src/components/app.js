import React, { Component } from 'react';
import { Provider } from 'react-redux';
import WelcomePage from '../components/welcome-component'
import store from '../store/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WelcomePage />
      </Provider>
    );
  }
}
