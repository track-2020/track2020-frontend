import { UPDATE_SCORES } from '../actions/scoringActions';

export default function scoreReducer(state = {}, action) {
  switch(action.type) {
    case UPDATE_SCORES:
      return { ...state, totalScore: action.payload };
    default:
      return state;
  }
}
