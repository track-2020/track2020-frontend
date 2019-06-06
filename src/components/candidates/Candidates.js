import React from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';

function Candidates({ candidates }) {
  const candidateList = candidates.map((candidate, index) => {
    return <li key={index}>
      <Candidate image={candidate.image} name={candidate.name} score={candidate.score} bio={candidate.bio} />
    </li>;
  });

  return (
    <ul>
      {candidateList}
    </ul>
  );
}

Candidates.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    bio: PropTypes.string.isRequired
  })).isRequired
};

export default Candidates;
