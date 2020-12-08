import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../screens/Home/reducer';
import topicReducer from '../screens/Topic/reducer';
import questionReducer from '../screens/Question/reducer';

const reducer = combineReducers({ homeReducer, topicReducer, questionReducer });
export default createStore(reducer, applyMiddleware(thunk));
