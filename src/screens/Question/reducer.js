import * as types from './types';

const initalState = {
  questions: [],
  loading: true,
  error: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case types.GET_LIST_QUESTIONS: {
      return { ...state, loading: action.payload };
    }
    case types.GET_LIST_QUESTIONS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.GET_LIST_QUESTIONS_SUCCESS: {
      return { ...state, questions: action.payload };
    }
    default:
      return state;
  }
};
