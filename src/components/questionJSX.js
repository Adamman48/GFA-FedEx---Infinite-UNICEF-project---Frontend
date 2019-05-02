import React from 'react';

const renderAnswer = (answer, id) => (
  <div className="oneAnswer">
    <label htmlFor="answer">
      <input type="checkbox" className="answer" name={answer} dataid={id} />
      {answer}
    </label>
  </div>
)

const QuestionsJSX = (props) => {

  const { questionText, answersText, onSubmit, answerIDs } = props
  return (
    <div>
      <div className="questionText">
        <h3>{questionText}</h3>
      </div>
      <form onSubmit={onSubmit}>
        {answersText.map((elem, index) => renderAnswer(elem, answerIDs[index]))}
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}
export default QuestionsJSX;

