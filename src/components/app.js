import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../components/welcome-component'
import Question from '../components/question';


export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/questions" component={Question} />
      </Switch>
    );
  }
}
