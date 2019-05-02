import React from 'react';

const renderAnswer = (answer, id) => (
      <div className="answer" name={answer} dataid={id}>
      {answer}
      </div>
)

const QuestionsJSX = (props) => {

  const { questionText, answersText, onClick, answerIDs } = props;

  return (
    <div>
        <h3>{questionText}</h3>
      <form onClick={onClick}>
        {answersText.map((elem, index) => renderAnswer(elem, answerIDs[index]))}
      </form>
    </div>
  );
}
export default QuestionsJSX;

