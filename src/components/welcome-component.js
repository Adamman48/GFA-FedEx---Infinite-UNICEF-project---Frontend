import React from "react";
import { NavLink } from 'react-router-dom';


class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.state = {
      question: 'nothing',
      answers: 'nothing'
    }
  }
  fetchQuestions() {
    fetch('http://localhost:4000/load', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json =>
        this.setState({ question: json.questions[0],
        answers: json.answers[1] })
      )
  }
  componentDidMount() {
    this.fetchQuestions();
  }
  render() {
    if (this.state.question !== 'nothing' && this.state.answers !== 'nothing') {      
      const { loadQuestions } = this.props;
      loadQuestions(this.state.question, this.state.answers);
    }
    console.log(this.state.question, this.state.answers);
    
    return (
      <div>
        <h1>{"Üdvözöllek a UNICEF Magyarország Ébresztőóra honlapján!"}</h1>
          <h3>{"Kíváncsiak vagyunk a véleményedre!"}</h3>
            <NavLink to="/feedback">
              <button>{"Kérdések indítása"}</button>
            </NavLink>
      </div>
    );
  }
}

export default WelcomePage;
