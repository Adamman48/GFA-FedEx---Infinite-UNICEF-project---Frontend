const counter = (state = {
  counter: 0,
}, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  return state;
};
// to root-reducer
export default counter;