import { CHOOSE_ISSUES } from '../actions/issuesActions';

export default function issuesReducer(state = {}, action) {
  switch(action.type) {
    case CHOOSE_ISSUES:
      return {
        ...state,
        issues: action.payload
      };
    default:
      return state;
  }
}
