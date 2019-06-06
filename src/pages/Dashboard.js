import React from 'react';
import Issues from '../components/issues/Issues';
import Candidates from '../components/candidates/Candidates';
import store from '../Store';
import candidates from '../assets/data/candidateList';
import { sortByTotalScore } from '../selectors/sortCandidates';


export default function Dashboard() {
  console.log(candidates);
  const sortedCandidates = sortByTotalScore(candidates);
  console.log(sortedCandidates);
  const issues = store.getState().issues;
  return (
        <>
            <h2>Your Issues:</h2>
            <Issues issues={issues} />
            <h2>Your Candidate List</h2>
            <Candidates candidates={sortedCandidates} />
        </>
  );
}
