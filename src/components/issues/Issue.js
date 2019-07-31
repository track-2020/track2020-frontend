import React from 'react';
import PropTypes from 'prop-types';

function Issue({ name }) {
  return (
    <section className="issue">
      <h3>{name}</h3>
    </section>
  );
}

Issue.propTypes = {
  // image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Issue;
