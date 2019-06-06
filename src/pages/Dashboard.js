import React from 'react';
import Issues from '../components/issues/Issues';
import Candidates from '../components/candidates/Candidates';
import store from '../Store';
import candidates from '../assets/data/candidateList';
import { sortByTotalScore } from '../selectors/sortCandidates';
import { Link } from 'react-router-dom';


export default function Dashboard() {
  const sortedCandidates = sortByTotalScore(candidates);
  const issues = store.getState().issues;
  const user = store.getState().login.username || store.getState().signup.username;
  return (
        <>
            <h1>Welcome, {user}!</h1>
            <Link to="/track"><h2>Start Tracking</h2></Link>
            <h2>Your Issues:</h2>
            <Issues issues={issues} />
            <h2>Your Candidate List</h2>
            <Candidates candidates={sortedCandidates} />
        </>
  );
}
