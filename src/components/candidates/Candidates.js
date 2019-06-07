import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';

export default class Candidates extends PureComponent {
  static propTypes = {
    candidates: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      issue0Score: PropTypes.shape({
        issue: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
      }).isRequired,
      issue1Score: PropTypes.shape({
        issue: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
      }).isRequired,
      issue2Score: PropTypes.shape({
        issue: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
      }).isRequired,
      issue3Score: PropTypes.shape({
        issue: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
      }).isRequired,
      issue4Score: PropTypes.shape({
        issue: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
      }).isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.func.isRequired,
    error: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired
  }

  fetchCandidates = (userId) => {
    this.props.fetch(userId);
  }

  componentDidMount() {
    this.fetchCandidates(this.props.userId);
  }

  render() {
    const candidateList = this.props.candidates.map((candidate) => {
      return <li key={candidate.userId}>
        <Candidate image={candidate.image} name={candidate.name} score={candidate.score} bio={candidate.bio} />
      </li>;
    });

    return (
      <ul>
        {candidateList}
      </ul>
    );
  }
}

