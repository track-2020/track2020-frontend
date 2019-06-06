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
