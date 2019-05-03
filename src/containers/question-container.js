import { connect } from 'react-redux';
import Questions from '../components/question';

const mapStateToProps = state => ({
  questions: state.questionReducer.questions
});

const QuestionContainer = connect(
  mapStateToProps
)(Questions);
export default QuestionContainer;