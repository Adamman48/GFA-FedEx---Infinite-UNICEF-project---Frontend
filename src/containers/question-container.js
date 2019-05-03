import { connect } from 'react-redux';
import Questions from '../components/question';

const mapStateToProps = state => ({
  questionID: state.questionReducer.questions[0]._id,
  questionText: state.questionReducer.questions[0].questionText,
});

const QuestionContainer = connect(
  mapStateToProps
)(Questions);
export default QuestionContainer;