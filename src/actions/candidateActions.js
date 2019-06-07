import { getCandidates } from '../services/track2020Api';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchCandidates,
  FETCH_CANDIDATES,
  FETCH_CANDIDATES_LOADING,
  _,
  FETCH_POKEMON_ERROR
] = createAction('FETCH_CANDIDATES', getCandidates);
