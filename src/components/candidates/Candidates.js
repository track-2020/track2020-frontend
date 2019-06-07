import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';
import Loading from '../loading/Loading';
import { connect } from 'react-redux';
import { fetchCandidates } from '../../actions/candidateActions';
import { getCandidates, getCandidatesLoading, getCandidatesError, sortByTotalScore } from '../../selectors/candidate-selectors';
import Sorting from './Sorting';

class Candidates extends PureComponent {
  static propTypes = {
    candidates: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.number.isRequired,
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
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    userId: PropTypes.number.isRequired
  }

  fetchCandidates = (userId) => {
    this.props.fetch(userId);
  }

  componentDidMount() {
    this.fetchCandidates(this.props.userId);
  }

  render() {
    const { candidates, loading, error } = this.props;
    const sortedCandidates = sortByTotalScore(candidates);
    const candidateList = sortedCandidates.map(candidate => {
      return <li key={candidate._id}>
        <Candidate image={candidate.image} name={candidate.name} score={candidate.score} bio={candidate.bio} />
      </li>;
    });
    if(loading) return <Loading />;
    else if(error) throw error;
    return (
      <>
      <Sorting />
      <ul>
        {candidateList}
      </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: getCandidatesLoading(state),
  candidates: getCandidates(state),
  error: getCandidatesError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(userId) {
    dispatch(fetchCandidates(userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidates);
