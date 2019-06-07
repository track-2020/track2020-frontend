import { ADD_SCORES } from '../actions/scoringActions';

export default function addScoresReducer(state = {}, action) {
  switch(action.type) {
    case ADD_SCORES:
      return {
        ...state,
        score: score + action.payload
      };
  }
}
