import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';
import QuestionContainer from './containers/question-container';
import WelcomePageContainer from './containers/welcome-page-container';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={WelcomePageContainer} />
        <Route exact path="/feedback" component={QuestionContainer} />
      </Switch>
    </Provider>
  </Router>
  , document.querySelector('.container'));
