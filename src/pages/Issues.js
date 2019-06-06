import React from 'react';
import Issues from '../containers/auth/Issues';

export default function IssuesContainer() {
  return (
        <>
            <h1>Track 2020</h1>
            <p>Please pick five key issues you care about. This will help you track how well candidates perform on these issues.</p>
            <Issues />
        </>
  );
}
