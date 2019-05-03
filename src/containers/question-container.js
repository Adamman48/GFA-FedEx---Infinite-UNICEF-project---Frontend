import { connect } from 'react-redux';
import Questions from '../components/question';

const mapStateToProps = state => ({
  questions: state,
  answers: state.questionReducer.answers
});

const QuestionContainer = connect(
  mapStateToProps
)(Questions);
export default QuestionContainer;