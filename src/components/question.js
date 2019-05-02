import React from 'react';
import QuestionJSX from './questionJSX'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionID: this.props.questions[0]._id,
      questionText: this.props.questions[0].questionText,
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
    })
  }
  sendAnswers(){
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(answerIDs),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => this.setState((prevState) => ({counter: prevState.counter+1})))
    .catch(error => console.error('Error:', error));
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.findChecked();
  }

  render() {
    /* let counter2 = this.state.counter;
    let answerblabla = this.props.questions[1]
    let a = JSON.parse(answerblabla
    console.log(a.questions[0]); */
    let answersText2 = this.props.questions[0].answers;
    console.log(answersText2)
    const { counter, questionText, render, answersText, responses, questionID, answerIDs } = this.state;
    return (
      <QuestionJSX questionText={questionText} answersText={answersText} onSubmit={this.onSubmit} answerIDs={answerIDs} findChecked={this.findChecked} />
    )
  }
}

export default Question