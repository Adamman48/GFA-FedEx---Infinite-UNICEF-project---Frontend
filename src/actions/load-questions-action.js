const loadQuestions = (questions, answers) => {
  return ({
    type: 'LOAD_QUESTIONS',
    questions: questions,
    answers: answers
  })
};

export default loadQuestions;
