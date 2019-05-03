import { connect } from 'react-redux';
import Questions from '../components/question';
import incrCounter from '../actions/question-counter'

const mapDispatchToProps = dispatch => ({
  counter: () => {
    dispatch(incrCounter())
  },
});

const mapStateToProps = state => {
  let counter = state.counter.counter;
  if (counter === state.questionReducer.questions.length) {
    return ({
      render: true,
    })
  }
  return ({
    render: false,
    questions: state.questionReducer.questions,
    answers: state.questionReducer.answers,
    answerCounter: state.counter
  })
};

const QuestionContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Questions);
export default QuestionContainer;