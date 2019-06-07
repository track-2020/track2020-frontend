import { CREATE_CANDIDATE } from '../actions/candidateActions';

export default function candidateReducer(state = {}, action) {
  switch(action.type) {
    case CREATE_CANDIDATE:
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        totalScore: action.payload.totalScore,
        issueScores: action.payload.issueScores,
        description: action.payload.description
      };
  }
}
