const loadQuestions = (questions) => {
  return ({
    type: 'LOAD_QUESTIONS',
    questions: questions
  })
};

export default loadQuestions;
