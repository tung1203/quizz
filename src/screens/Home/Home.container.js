import { connect } from 'react-redux';
import HomeScreen from './Home';
import { getListCategory } from './actions';
export default connect(
  ({ homeReducer }) => {
    return {
      listCategories: homeReducer.listCategories,
      loading: homeReducer.loading,
      error: homeReducer.error,
    };
  },
  dispatch => {
    return {
      getListCategory() {
        dispatch(getListCategory());
      },
    };
  }
)(HomeScreen);
