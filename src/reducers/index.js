import { combineReducers } from 'redux';
import login from './loginReducer';
import signup from './signUpReducer';
import issues from './issuesReducer';

export default combineReducers({
  login,
  signup,
  issues
});
