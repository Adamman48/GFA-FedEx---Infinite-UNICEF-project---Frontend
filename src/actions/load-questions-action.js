const loadQuestions = () => {
  fetch('http://localhost:4000/loadFeedback', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(json => {
      return ({
        type: 'LOAD_QUESTIONS',
        questions: json
      })
    })
  };

export default loadQuestions;
