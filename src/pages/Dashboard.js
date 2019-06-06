import React from 'react';
import Issues from '../components/issues/Issues';
import store from '../Store';

export default function Dashboard() {
  const issues = store.getState().issues;
  return (
        <>
            <h2>Your Issues:</h2>
            <Issues issues={issues} />
        </>
  );
}
