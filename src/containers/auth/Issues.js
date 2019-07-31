import { connect } from 'react-redux';
import { chooseIssues } from '../../actions/issuesActions';
import IssuesForm from '../../components/login-signup/IssuesForm';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(issues) {
    dispatch(chooseIssues(issues));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(IssuesForm);
