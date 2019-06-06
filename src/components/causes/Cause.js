import React from 'react';
import PropTypes from 'prop-types';

function Cause({ image, name }) {
  return (
    <section className="cause">
      <h3>{name}</h3>
      <img src={image} />
    </section>
  );
}

Cause.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Cause;
