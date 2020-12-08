import * as types from './types';
import axios from '../../utils/axiosInstance';

export const getListCategoryStarted = () => ({
  type: types.GET_LIST_CATEGORIES,
  payload: true,
});

export const getListCategoryError = value => ({
  type: types.GET_LIST_CATEGORIES_FAILURE,
  payload: value,
});

export const getListCategoryFinished = value => ({
  type: types.GET_LIST_CATEGORIES_SUCCESS,
  payload: value,
});

export const getListCategory = () => {
  return async dispatch => {
    dispatch(getListCategoryStarted());
    const { data } = await axios.get('/categories');
    dispatch(getListCategoryFinished(data));
  };
};
