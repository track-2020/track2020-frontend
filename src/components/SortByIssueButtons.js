import React from 'react';
import PropTypes from 'prop-types';
import SortByIssueButton from './SortByIssueButton';

function SortByIssueButtons({ issues, sortByIssue }) {
  const buttonList = issues.map((issue, sortByIssue) => {
    return (
      <li key={issue.issueId}>
        <SortByIssueButton sortByIssue={sortByIssue} issue={issue.issue} />
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
