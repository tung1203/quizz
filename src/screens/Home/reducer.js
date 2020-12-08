import * as types from './types';

const initalState = {
  listCategories: [],
  loading: true,
  error: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case types.GET_LIST_CATEGORIES: {
      return { ...state, loading: action.payload };
    }
    case types.GET_LIST_CATEGORIES_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.GET_LIST_CATEGORIES_SUCCESS: {
      return { ...state, listCategories: action.payload };
    }
    default:
      return state;
  }
};
