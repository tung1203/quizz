import { connect } from 'react-redux';
import Result from './Result';

export default connect(({ questionReducer }) => {
  return {
    correctAnswersNumber: questionReducer.correctAnswersNumber,
  };
})(Result);
