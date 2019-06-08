import React from 'react';
import PropTypes from 'prop-types';

function SortByIssueButtons({ issues, sortByIssue }) {
  const buttonList = issues.map(issue => {
    return (
      <li key={issue.issueId}>
        <button onClick={() => sortByIssue(issue.issueId)}>{issue.issue}</button>
      </li>
    );
  });
  return (
    <ul>
      {buttonList}
    </ul>
  );
}

SortByIssueButtons.propTypes = {
  sortByIssue: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    issue: PropTypes.string.isRequired,
    issueId: PropTypes.number.isRequired
  }))
};

export default SortByIssueButtons;
