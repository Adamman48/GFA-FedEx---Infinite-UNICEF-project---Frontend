import React from 'react';
import QuestionJSX from './questionJSX'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
    };
    this.setAnswerId = this.setAnswerId.bind(this);
  }
  setAnswerId = () => {
    this.setState({answer:'checked'},()=>{
      console.log(this.state.answer);
    })
  }

  render() {
    return (
      <QuestionJSX question={'wassup?'} answers={['not much', 'sod off', 'fine thx']} setAnswerId={this.setAnswerId} />
    )
  }
}
// exports to
export default Question