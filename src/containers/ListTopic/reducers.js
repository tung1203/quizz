import * as types from './types';
const initialState = {
  topics: [],
  loading: false,
  error: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TOPIC:
      return {...state, loading: {...action.payload}};
    case types.GET_TOPIC_SUCCESS:
      return {...state, topics: {...action.payload}};
    case types.GET_TOPIC_FAILD:
      return {...state, error: {...action.payload}};
    default:
      return state;
  }
};

export default reducer;
