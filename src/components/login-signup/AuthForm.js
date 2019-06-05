import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AuthForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Username"></input>
          <input type="text" name="email" placeholder="Email Address"></input>
          <button value="login">Login</button>
          <button value="signup">Sign-Up</button>
        </form>
      );
    }
}
