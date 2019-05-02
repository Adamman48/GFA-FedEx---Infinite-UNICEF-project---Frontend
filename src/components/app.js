import React, { Component } from 'react';
import Question from '../components/question';
import { Provider } from 'react-redux';
import store from '../store/store';
import WelcomePageContainer from '../containers/welcome-page-container';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <WelcomePageContainer/>
          <Question />
        </div>
      </Provider>
    );
  }
}
