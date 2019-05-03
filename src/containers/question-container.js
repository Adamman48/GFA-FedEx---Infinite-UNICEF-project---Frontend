import { connect } from 'react-redux';
import Questions from '../components/question';
import incrCounter from '../actions/question-counter'

const mapDispatchToProps = dispatch => ({
  counter: () => {
    dispatch(incrCounter())
  },
});

const mapStateToProps = state => ({
  questions: state.questionReducer.questions,
  answers: state.questionReducer.answers
});

const QuestionContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Questions);
export default QuestionContainer;