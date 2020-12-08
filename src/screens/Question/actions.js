import * as types from './types';
import axios from '../../utils/axiosInstance';

export const getListQuestionStarted = () => ({
  type: types.GET_LIST_QUESTIONS,
  payload: true,
});

export const getListQuestionError = value => ({
  type: types.GET_LIST_QUESTIONS_FAILURE,
  payload: value,
});

export const getListQuestionFinished = value => ({
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
