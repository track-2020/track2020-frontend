import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';
import Loading from '../loading/Loading';
import { connect } from 'react-redux';
import { fetchCandidates } from '../../actions/candidateActions';
import { getCandidates, getCandidatesLoading, getCandidatesError, sortByTotalScore, sortByIssueScore } from '../../selectors/candidate-selectors';
import SortByIssueButtons from '../SortByIssueButtons';

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
    userId: PropTypes.number.isRequired,
    issues: PropTypes.arrayOf(PropTypes.shape({
      issue: PropTypes.string.isRequired,
      issueId: PropTypes.number.isRequired
    })).isRequired
  }

  fetchCandidates = (userId) => {
    this.props.fetch(userId);
  }

  renderCandidateList() {
    const candidateList = this.props.candidates.map(candidate => {
      return <li key={candidate._id}>
        <Candidate image={candidate.image} name={candidate.name} score={candidate.score} bio={candidate.bio} />
      </li>;
    });
    return candidateList;
  }

  componentDidMount() {
    this.fetchCandidates(this.props.userId);
  }

  handleCandidateSortByTotal() {
    const totalSortedCandidates = sortByTotalScore(this.props.candidates);
    this.setState({
      candidates: totalSortedCandidates
    });
  }

  handleCandidateSortByIssue = (issueId) => {
    const issueSortedArray = sortByIssueScore(this.props.candidates, issueId);
    this.setState({
      candidates: issueSortedArray
    });
  }

  componentDidUpdate() {
    this.renderCandidateList();
  }

  render() {
    const { loading, error, issues } = this.props;
    const candidateList = this.renderCandidateList();
    if(loading) return <Loading />;
    else if(error) throw error;
    return (
      <>
      <p>Sort candidates by your top issues:</p>
      <SortByIssueButtons issues={issues} sortByIssue={this.handleCandidateSortByIssue} />
      <p>Sort candidates by total score:</p>
      <button onClick={this.handleCandidateSortByTotal}>Total Score</button>
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
