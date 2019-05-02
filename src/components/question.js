import React from 'react';
import QuestionJSX from './questionJSX'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionID: 1,
      answerIDs: [1, 2, 3],
      questionText: 'wassup',
      answersText: ['not much', 'sod off', 'fine thx'],
      responses: [],
      render: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    // find checked boxes
    this.setState({
      responses: [...this.state.responses, this.state.questionID]
    }, () => { console.log(this.state.responses) })
    //fetch {}
    //send to backend
    //update state from store
    //
    //render comp with new state values 
  }

  render() {
    const { counter, questionText, render, answersText, responses, questionID, answerIDs } = this.state;
    return (
      <QuestionJSX questionText={questionText} answersText={answersText} onSubmit={this.onSubmit} answerIDs={answerIDs} />
    )
  }
}
// exports to
export default Question