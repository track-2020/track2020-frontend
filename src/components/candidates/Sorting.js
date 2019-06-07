import React from 'react';
import PropTypes from 'prop-types';

function Sorting({ sortByIssue1, sortByIssue2, sortByIssue3, sortByIssue4, sortByIssue5, sortByTotalScore, issue1, issue2, issue3, issue4, issue5, totalScore }) {
  return (
        <>
            <p>Sort by:</p>
            <button onClick={sortByTotalScore}>{totalScore}</button>
            <button onClick={sortByIssue1}>{issue1}</button>
            <button onClick={sortByIssue2}>{issue2}</button>
            <button onClick={sortByIssue3}>{issue3}</button>
            <button onClick={sortByIssue4}>{issue4}</button>
            <button onClick={sortByIssue5}>{issue5}</button>
        </>
  );
}

Sorting.propTypes = {
  sortByIssue1: PropTypes.func.isRequired,
  sortByIssue2: PropTypes.func.isRequired,
  sortByIssue3: PropTypes.func.isRequired,
  sortByIssue4: PropTypes.func.isRequired,
  sortByIssue5: PropTypes.func.isRequired,
  sortByTotalScore: PropTypes.func.isRequired,
  issue1: PropTypes.string.isRequired,
  issue2: PropTypes.string.isRequired,
  issue3: PropTypes.string.isRequired,
  issue4: PropTypes.string.isRequired,
  issue5: PropTypes.string.isRequired,
  totalScore
};

export default Sorting;
