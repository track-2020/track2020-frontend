import { connect } from 'react-redux';
import { signup } from '../../actions/signUpActions';
import SignUpForm from '../../components/login-signup/SignUpForm';

const mapDispatchToProps = (dispatch) => ({
  onClick(username, password, email, issues) {
    dispatch(signup(username, password, email, issues));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
