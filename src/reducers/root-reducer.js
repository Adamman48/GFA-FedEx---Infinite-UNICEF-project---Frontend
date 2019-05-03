import { combineReducers } from 'redux';
import questionReducer from './question-reducer'
import counter from './question-counter';

const rootReducer = combineReducers({
  questionReducer,
  counter
});

export default rootReducer;
