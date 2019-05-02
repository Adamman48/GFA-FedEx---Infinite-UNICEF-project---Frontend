function questionReducer(
  state = {},
  action,
) {
  switch (action.type) {
    case 'LOAD_QUESTIONS': {
      return {
        ...state,
        questions: action.questions
      };
    }
    default:
      return state;
  }
}

export default questionReducer;
