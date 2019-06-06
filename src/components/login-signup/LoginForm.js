import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class LoginForm extends PureComponent {
    static propTypes = {
      onLogin: PropTypes.func.isRequired
    }

    state = {
      username: '',
      password: ''
    }


    handleLogin = event => {
      event.preventDefault();
      const { username, password } = this.state;
      this.props.onLogin(username, password);
      this.setState({ username: '', password: '' });
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      return (
        <>
          <form>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
            <input type="text" name="password" placeholder="Password" onChange={this.handleChange}></input>
            <button onClick={this.handleLogin}>Login</button>
          </form>
          <h3>New to Track 2020? Sign up to begin!</h3>
          <Link to="/signup" ><button>Sign-Up</button></Link>
        </>
      );
    }
}
