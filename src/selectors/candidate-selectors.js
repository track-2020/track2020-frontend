export const getCandidates = state => state.candidates.candidates;
export const getCandidatesLoading = state => state.candidates.loading;
export const getCandidatesError = state => state.candidates.error;
export const getCandidateById = (state, _id) => getCandidates(state)[state.candidates.candidates.findIndex(candidate => candidate._id.toString() === _id)];

export const sortByTotalScore = candidates => {
  const newCandidatesArray = candidates.slice();
  return newCandidatesArray.sort((a, b) => {
    if(a.score === b.score) {
      return 0;
    }
    if(a.score > b.score) {
      return -1;
    }
    return 1;
  });
};

export const sortByIssueScore = (candidates, issueId) => {
  const newCandidatesArray = candidates.slice();
  return newCandidatesArray.sort((a, b) => {
    if(a[issueId].score === b[issueId].score) {
      return 0;
    }
    if(a[issueId].score > b[issueId].score) {
      return -1;
    }
    return 1;
  });
};
