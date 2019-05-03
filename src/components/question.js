import React from "react";
import QuestionJSX from "./questionJSX";
import { Redirect } from 'react-router-dom';

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
    console.log(this.props.render);
    event.preventDefault();
    this.setState({ response: event.target.getAttribute("dataid") });
    this.incremCounter();
    this.sendAnswers();
  };
  render() {
    if (this.props.render === true) {
      return <Redirect to="/thankyou" />;
    }
    let counter = this.props.answerCounter.counter;
    let question = this.props.questions[counter].questionText;
    let answers = [];
    let answersId = [];
    for (let i = 0; i < this.props.answers[counter+5].length; i++) {
      answers.push(this.props.answers[counter+5][i].answerText);
      answersId.push(this.props.answers[counter+5][i]._id);
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
