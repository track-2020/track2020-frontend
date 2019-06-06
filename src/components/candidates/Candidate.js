import React from 'react';
import PropTypes from 'prop-types';

function Candidate({ image, name, score, bio }) {
  const quote = `"${bio}"`;
  return (
    <section className="candidate">
      <img src={image} />
      <p>Name: {name}</p>
      <p>Score: {score}</p>
      <p>{quote}</p>
    </section>
  );
}

Candidate.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired
};

export default Candidate;
