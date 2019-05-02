import React from 'react';
import QuestionJSX from './questionJSX'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionID: this.props.questionID,
      questionText: this.props.questionText,
      answerIDs: [1, 2, 3],
      answersText: ['not much', 'sod off', 'fine thx'],
      responses: [],
      render: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.findChecked = this.findChecked.bind(this);
  }

  findChecked = () => {
    let checked = document.querySelectorAll('.answer');
    let dataid = [];

    checked.forEach(element => {
      if (element.checked) {
        dataid.push(element.getAttribute('dataid'));
      }
    })

    this.setState({
      responses: dataid
    }, () => { console.log(this.state.responses) })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.findChecked();
    //fetch {}
    //send to backend
    //update state from store
    //increment counter
    //render comp with new state values 
  }

  render() {
    const { counter, questionText, render, answersText, responses, questionID, answerIDs } = this.state;
    return (
      <QuestionJSX questionText={questionText} answersText={answersText} onSubmit={this.onSubmit} answerIDs={answerIDs} findChecked={this.findChecked} />
    )
  }
}
// exports to
export default Question