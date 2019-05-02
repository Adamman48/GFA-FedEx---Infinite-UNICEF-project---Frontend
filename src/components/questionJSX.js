import React from 'react';

const QuestionsJSX = (props) => {

  const { question, answers, setAnswerId, counter } = props
  const renderAnswer = answer => (
    <div className="oneAnswer">
      <label htmlFor="answer">
        <input type="checkbox" id="answer" name={answer} onChange={setAnswerId(counter)}/>
        {answer}
      </label>
    </div>
  )

  return (
    <div>
      <div className="question">
        <h3>{question}</h3>
      </div>
      <form>
        {answers.map(elem => renderAnswer(elem))}
      </form>
    </div>
  );
}
export default QuestionsJSX;