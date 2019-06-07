import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';
import Loading from '../loading/Loading';
import { connect } from 'react-redux';
import { fetchCandidates } from '../../actions/candidateActions';
import { getCandidates, sortByIssueScore } from '../../selectors/candidate-selectors';
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
    userId: PropTypes.number.isRequired,
    issues: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }

  fetchCandidates = (userId) => {
    this.props.fetch(userId);
  }

  componentDidMount() {
    this.fetchCandidates(this.props.userId);
  }

  handleSortByIssue1 = () => {
    console.log('sorting by issue 1');
  }


  handleSortByIssue2 = () => {
    console.log('sorting by issue 2');
  }


  handleSortByIssue3 = () => {
    console.log('sorting by issue 3');
  }


  handleSortByIssue4 = () => {
    console.log('sorting by issue 4');
  }


  handleSortByIssue5 = () => {
    console.log('sorting by issue 5');
  }


  handleSortByTotalScore = () => {
    console.log('sorting by total score');
  }

  render() {
    const { candidates, loading, error, issues } = this.props;
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
      <Sorting sortByIssue1={this.handleSortByIssue1} sortByIssue2={this.handleSortByIssue2} sortByIssue3={this.handleSortByIssue3} sortByIssue4={this.handleSortByIssue4} sortByIssue5={this.handleSortByIssue5} sortByTotalScore={this.sortByTotalScore} issue1={issues[0]} issue2={issues[1]} issue3={issues[2]} issue4={issues[3]} issue5={issues[4]} />
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
