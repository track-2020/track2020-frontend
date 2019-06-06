import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import LoginForm from '../../components/login-signup/LoginForm';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(username, password) {
    dispatch(login(username, password));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
