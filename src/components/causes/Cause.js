import React from 'react';
import PropTypes from 'prop-types';

function Cause({ image, name }) {
  return (
    <section className="cause">
      <h3></h3>
    </section>
  );
}

Cause.propType = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Cause;
