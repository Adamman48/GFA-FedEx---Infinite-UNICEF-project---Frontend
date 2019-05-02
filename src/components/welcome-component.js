import React from "react";
import { Redirect } from 'react-router-dom';


class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.state = {
      questions: 'nothing'
    }
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
  componentDidMount() {
    this.fetchQuestions();
  }
  render() {
    if (this.state !== 'nothing') {
      const { loadQuestions } = this.props;
      loadQuestions(this.state.questions);
    }
    return (
      <div>
        <h1>Üdvözöllek a UNICEF Magyarorszag Ébresztőóra honlapján!</h1>
        <h3>Kíváncsiak vagyunk a véleményedre!</h3>
        <button type="button" onClick={() => {
          return (<Redirect to="/questions" />)
        }}>Kérdések indítása!</button>
      </div>
    );
  }
}

export default WelcomePage;
