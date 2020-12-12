import { connect } from 'react-redux';
import QuestionStack from './QuestionStack';
import { getListQuestion, answerQuestion, submitQuestion } from './actions';

export default connect(
  ({ questionReducer }) => {
    return {
      questions: questionReducer.questions,
      loading: questionReducer.loading,
      error: questionReducer.error,
      answer: questionReducer.answer,
      correctAnswersNumber: questionReducer.correctAnswersNumber,
    };
  },
  dispatch => {
    return {
      getListQuestion(topicId) {
        dispatch(getListQuestion(topicId));
      },
      answerQuestion(questionId, answerId) {
        dispatch(answerQuestion(questionId, answerId));
      },
      submitQuestion(questionId, answerId) {
        dispatch(submitQuestion(questionId, answerId));
      },
    };
  }
)(QuestionStack);
