import { combineReducers } from 'redux';
import login from './loginReducer';
import signup from './signUpReducer';
import issues from './issuesReducer';
import candidates from './candidateReducer';
import scores from './scoringReducer';

export default combineReducers({
  login,
  signup,
  issues,
  candidates,
  scores
});
