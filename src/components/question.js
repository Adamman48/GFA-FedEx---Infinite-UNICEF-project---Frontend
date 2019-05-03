import React from "react";
import QuestionJSX from "./questionJSX";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      response: "",
      render: false
    };
    this.onClick = this.onClick.bind(this);
    this.incremCounter = this.incremCounter.bind(this);
  }
  sendAnswers() {
    fetch(url, {
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
      .then(response =>
        this.setState(prevState => ({ counter: prevState.counter + 1 }))
      )
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
  };
  render() {
    console.log(this.props.questions.questionText);
    let question = this.props.questions.questionText;
    let answers = [];
    let answersId = [];
    for (let i = 0; i < this.props.answers.length; i++) {
      answers.push(this.props.answers[i].answerText);
      answersId.push(this.props.answers[i]._id);
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
