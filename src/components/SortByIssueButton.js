import React from 'react';
import PropTypes from 'prop-types';

function SortByIssueButton({ sortByIssue, issue }) {
  return (
    <button onClick={sortByIssue}>{issue}</button>
  );
}
SortByIssueButton.propTypes = {
  sortByIssue: PropTypes.func.isRequired,
  issue: PropTypes.string.isRequired
};
