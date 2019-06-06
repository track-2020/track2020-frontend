import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired
    }

    state = {
      username: '',
      password: ''
    }

    handleSubmit = event => {
      event.preventDefault();
      console.log('event', event.target);
      const { username, password } = this.state;
      this.props.onSubmit(username, password);
      this.setState({ username: '', password: '' });
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
          <input type="text" name="password" placeholder="Password" onChange={this.handleChange}></input>
          <button value="login">Login</button>
          <button value="signup">Sign-Up</button>
        </form>
      );
    }
}
