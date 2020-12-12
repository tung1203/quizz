import * as types from './types';

const initalState = {
  questions: [],
  loading: true,
  error: null,
  answer: [],
  correctAnswersNumber: 0,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case types.GET_LIST_QUESTIONS: {
      return initalState;
    }
    case types.GET_LIST_QUESTIONS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.GET_LIST_QUESTIONS_SUCCESS: {
      return { ...state, questions: action.payload };
    }
    case types.ANSWER_QUESTION: {
      return {
        ...state,
        answer: [...state.answer, action.payload],
      };
    }
    case types.SUBMIT_QUESTION: {
      return {
        ...state,
        correctAnswersNumber: action.payload,
      };
    }
    default:
      return state;
  }
};
