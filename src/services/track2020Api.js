export const getCandidates = () => {
  return fetch('ec2-13-58-71-42.us-east-2.compute.amazonaws.com/api/v1/candidatesByUsers')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Sorry, having trouble getting your candidates.';
      return json;
    })
    .then(json => json.resuls.map(candidate => ({
      _id: candidate._id,
      name: candidate.name,
      image: candidate.image,
      score: candidate.score,
      issue0Score: {
        issue: candidate.issue0.issue,
        score: candidate.issue0.score
      },
      issue1Score: {
        issue: candidate.issue1.issue,
        score: candidate.issue1.score
      },
      issue2Score: {
        issue: candidate.issue2.issue,
        score: candidate.issue2.score
      },
      issue3Score: {
        issue: candidate.issue3.issue,
        score: candidate.issue3.score
      },
      issue4Score: {
        issue: candidate.issue4.issue,
        score: candidate.issue4.score
      },
    })));
};
