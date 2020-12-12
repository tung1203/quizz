import * as types from './types';
import axios from '../../utils/axiosInstance';

const getListQuestionStarted = () => ({
  type: types.GET_LIST_QUESTIONS,
  payload: true,
});

const getListQuestionError = value => ({
  type: types.GET_LIST_QUESTIONS_FAILURE,
  payload: value,
});

const getListQuestionFinished = value => ({
  type: types.GET_LIST_QUESTIONS_SUCCESS,
  payload: value,
});

const wait = time =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('ok');
    }, time)
  );

export const getListQuestion = topicId => {
  return async dispatch => {
    dispatch(getListQuestionStarted());

    // await wait(3000);

    const { data } = await axios.get(`/topics/${topicId}/questions/`);
    const { Questions } = data;
    const questions = await Promise.all(
      Questions.map(async questiona => {
        const { data } = await axios.get(`/questions/${questiona.ID}`);
        return data;
      })
    );
    dispatch(getListQuestionFinished(questions));
  };
};

export const answerQuestion = (questionId, answerId) => {
  return async dispatch => {
    dispatch({
      type: types.ANSWER_QUESTION,
      payload: { questionId, answerId },
    });
  };
};
const submitQuestionFinished = value => ({
  type: types.SUBMIT_QUESTION,
  payload: value,
});

export const submitQuestion = (questionId, answerId) => {
  return async (dispatch, getState) => {
    let answers = [
      ...getState().questionReducer.answer,
      { questionId, answerId },
    ];
    answers = answers.map(answer => ({
      ID: answer.answerId,
      questionId: answer.questionId,
    }));
    const { data } = await axios.post('/questions/checkAnswers', answers);

    dispatch(submitQuestionFinished(data));
  };
};
