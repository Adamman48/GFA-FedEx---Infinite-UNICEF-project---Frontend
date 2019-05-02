import React from 'react';
import QuestionJSX from './questionJSX'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      question: 'wassup',
      render: false,
      answers: ['not much', 'sod off', 'fine thx'],
      responses: []
    };
    this.setAnswerId = this.setAnswerId.bind(this);
  }
  setAnswerId = (qid) => {
   /*  this.setState({ responses = responses.push(qid) }, () => {
      console.log(this.state.responses);
    }) */
  }

  onSubmit = () => {
    //prevent default
    //fetch {}
    //send to backend
    //update state from store
    //
    //render comp with new state values 
  }

  render() {
    const {counter, question, render, answers, responses} = this.state;
    return (
      <QuestionJSX question={question} answers={answers} setAnswerId={this.setAnswerId} counter = {counter}/>
    )
  }
}
// exports to
export default Question