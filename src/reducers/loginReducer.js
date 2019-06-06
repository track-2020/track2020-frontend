import { LOGIN } from '../actions/loginActions';

export default function loginReducer(state = {}, action) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state, username: action.payload.username, password: action.payload.password
      };
    default:
      return state;
  }
}
