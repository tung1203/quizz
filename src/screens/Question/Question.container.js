import { connect } from 'react-redux';
import QuestionStack from './QuestionStack';
import { getListQuestion } from './actions';

export default connect(
  ({ questionReducer }) => {
    return {
      questions: questionReducer.questions,
      loading: questionReducer.loading,
      error: questionReducer.error,
    };
  },
  dispatch => {
    return {
      getListQuestion(topicId) {
        dispatch(getListQuestion(topicId));
      },
    };
  }
)(QuestionStack);
