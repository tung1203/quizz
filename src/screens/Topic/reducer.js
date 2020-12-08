import * as types from './types';

const initalState = {
  listTopics: [],
  loading: true,
  error: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case types.GET_LIST_TOPICS: {
      return { ...state, loading: action.payload };
    }
    case types.GET_LIST_TOPICS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.GET_LIST_TOPICS_SUCCESS: {
      return { ...state, listTopics: action.payload };
    }
    default:
      return state;
  }
};
