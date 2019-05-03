import React from "react";
import QuestionJSX from "./questionJSX";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      render: false
    };
    this.onClick = this.onClick.bind(this);
    this.incremCounter = this.incremCounter.bind(this);
  }
  sendAnswers() {
    fetch('http://localhost:4000/update', {
      method: "PUT",
      body: JSON.stringify({
        answerId: this.props.questions._id,
        questionId: response
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => response)
      .catch(error => console.error("Error:", error));
  }
  incremCounter = () => {
    return new Promise((resolve, reject) => {
      resolve(this.props.counter());
    });
  };
  onClick = event => {
    event.preventDefault();
    this.setState({ response: event.target.getAttribute("dataid") });
    this.incremCounter();
    this.sendAnswers();
  };
  render(){
    let counter = this.props.answerCounter.counter;
    let question = this.props.questions[counter].questionText;
    let answers = [];
    let answersId = [];
    for (let i = 0; i < this.props.answers[counter+3].length; i++) {
      answers.push(this.props.answers[counter+3][i].answerText);
      answersId.push(this.props.answers[counter+3][i]._id);
    }
    return (
      <QuestionJSX
        questionText={question}
        answersText={answers}
        onClick={this.onClick}
        answerIDs={answersId}
      />
    );
  }
}

export default Question;
