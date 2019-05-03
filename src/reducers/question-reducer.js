function questionReducer(
  state = {},
  action,
) {
  switch (action.type) {
    case 'LOAD_QUESTIONS': {
      return {
        ...state,
        questions: action.questions,
        answers: action.answers
      };
    }
    default:
      return state;
  }
}

export default questionReducer;
