export const CREATE_CANDIDATE = 'CREATE_CANDIDATE';

export const createCandidate = (name, image, totalScore, issueScores, description) => ({
  type: CREATE_CANDIDATE,
  payload: { name, image, totalScore, issueScores, description }
});
