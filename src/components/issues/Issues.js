import React from 'react';
import PropTypes from 'prop-types';
import Issue from './Issue';

function Issues({ issues }) {
  const issueList = issues.map((issue, index) => {
    return <li key={index}><Issue name={issue} /></li>;
  });

  return (
    <ul>
      {issueList}
    </ul>
  );
}
Issues.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Issues;
