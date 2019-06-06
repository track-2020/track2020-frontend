import { SIGNUP } from '../actions/signUpActions';

export default function signUpReducer(state = {}, action) {
  switch(action.type) {
    case SIGNUP: 
      return {
        ...state, 
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email, 
        issues: action.payload.issues
      };
    default: 
      return state;
  }
}
