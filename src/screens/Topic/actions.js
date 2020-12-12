import * as types from './types';
import axios from '../../utils/axiosInstance';

export const getListTopicStarted = () => ({
  type: types.GET_LIST_TOPICS,
  payload: true,
});

export const getListTopicError = value => ({
  type: types.GET_LIST_TOPICS_FAILURE,
  payload: value,
});

export const getListTopicFinished = value => ({
  type: types.GET_LIST_TOPICS_SUCCESS,
  payload: value,
});
const wait = time =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('ok');
    }, time)
  );
export const getListTopic = categoryId => {
  return async dispatch => {
    dispatch(getListTopicStarted());
    const { data } = await axios.get(`/categories/${categoryId}/topics`);
    dispatch(getListTopicFinished(data));
  };
};
