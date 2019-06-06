export const SIGNUP = 'SIGNUP';

export const signup = (username, password, email, issues) => ({
  type: SIGNUP,
  payload: { username, password, email, issues }
});
