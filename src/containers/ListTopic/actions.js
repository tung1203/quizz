import * as types from './types';

export const fetchData = () => {
  return {
    type: types.GET_TOPIC,
    payload: true,
  };
};

export const fetchDataSuccess = (topics) => {
  return {
    type: types.GET_TOPIC,
    payload: topics,
  };
};
export const fetchDataFailed = (error) => {
  return {
    type: types.GET_TOPIC,
    payload: error,
  };
};
