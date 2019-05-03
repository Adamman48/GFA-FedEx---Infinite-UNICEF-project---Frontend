import loadQuestions from '../actions/load-questions-action';
import { connect } from 'react-redux';
import WelcomePage from '../components/welcome-component';

function mapDispatchToProps(dispatch) {
  return {
    loadQuestions: (payload, payload2) => {
      dispatch(loadQuestions(payload, payload2));
    },
  };
}

const WelcomePageContainer = connect(
  null,
  mapDispatchToProps
)(WelcomePage);
export default WelcomePageContainer;