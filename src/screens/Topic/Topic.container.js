import { connect } from 'react-redux';
import TopicScreen from './Topic';
import { getListTopic } from './actions';

export default connect(
  ({ topicReducer }) => {
    return {
      listTopics: topicReducer.listTopics,
      loading: topicReducer.loading,
      error: topicReducer.error,
    };
  },
  dispatch => {
    return {
      getListTopic(categoryId) {
        dispatch(getListTopic(categoryId));
      },
    };
  }
)(TopicScreen);
