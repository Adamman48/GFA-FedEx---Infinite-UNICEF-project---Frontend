import React from 'react';
import QuestionJSX from './questionJSX'


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionID: "this.props.questions[0]._id",
      questionText: "this.props.questions[0].questionText",
      answerIDs: [1, 2, 3],
      answersText: ['not much', 'sod off', 'fine thx'],
      response: "",
      render: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  sendAnswers(){
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({ answerId: this.props.questions[counter]._id,
        questionId: response
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => this.setState((prevState) => ({counter: prevState.counter+1})))
    .catch(error => console.error('Error:', error));
  }
  onClick = (event) => {
    event.preventDefault();
    this.setState({response: event.target.getAttribute('dataid')}); 
  }
  fetchQuestions() {
    fetch('http://localhost:4000/load', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json =>
        this.setState({ questions: json })
      )
  }
  render() {
    console.log(this.props);
    const { questionText,  answersText, answerIDs } = this.state;
    return (
      <QuestionJSX questionText={questionText} answersText={answersText} onClick={this.onClick} answerIDs={answerIDs} />
    )
  }
}

export default Question