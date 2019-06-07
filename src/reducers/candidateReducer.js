import { FETCH_CANDIDATES, FETCH_CANDIDATES_LOADING, FETCH_CANDIDATES_ERROR } from '../actions/candidateActions';

const initialState = {
  loading: false,
  error: null,
  candidates: []
};

export default function candidateReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CANDIDATES_LOADING:
      return { ...state, loading: true };
    case FETCH_CANDIDATES:
      return { ...state, loading: false, candidates: action.payload };
    case FETCH_CANDIDATES_ERROR:
      return { ...state, loading: false, errory: action.payload.error };
    default:
      return state;
  }
}
