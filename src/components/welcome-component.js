import React from "react";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.state = {
      questions: 'nothing'
    }
  }
  fetchQuestions(){
    fetch('http://localhost:4000/load', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(json => 
      this.setState({questions:json})
    )
  }
  componentDidMount(){
    this.fetchQuestions();
  }
  render() {
    if(this.state !== 'nothing'){
      const { loadQuestions } = this.props;
      loadQuestions(this.state.questions);
      console.log(this.props);
      
    }
    return (
      <div>
        <h1>Üdvözöllek a UNICEF Magyarorszag Ébresztőóra honlapján!</h1>
        <h3>Kíváncsiak vagyunk a véleményedre!</h3>
        <div>Kérdések indítása!</div>
      </div>
    );
  }
}

export default WelcomePage;
