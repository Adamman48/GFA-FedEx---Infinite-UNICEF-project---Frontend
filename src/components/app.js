import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "../components/welcome-component";
import Question from "../components/question";
import { Provider } from 'react-redux';
import store from '../store/store';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/questions" component={Question} />
        </Switch>
      </Provider>
    );
  }
}
