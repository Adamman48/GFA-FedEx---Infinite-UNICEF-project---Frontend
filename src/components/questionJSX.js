import React from 'react';

const QuestionsJSX = (props) => {

  const { questionText, answersText, onSubmit, answerIDs } = props
  const renderAnswer = (answer, id) => (
    <div className="oneAnswer">
      <label htmlFor="answer">
        <input type="checkbox" id="answer" name={answer} data-id={id} />
        {answer}
      </label>
    </div>
  )

  return (
    <div>
      <div className="questionText">
        <h3>{questionText}</h3>
      </div>
      <form onSubmit={onSubmit}>
        {answersText.map((elem, index) => renderAnswer(elem, answerIDs[index]))}
        <input type="submit" />
      </form>
    </div>
  );
}
export default QuestionsJSX;