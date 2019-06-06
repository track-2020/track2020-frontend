import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SignUpForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired
    }

    state = {
      username: '',
      password: '',
      email: '',
      issues: []
    }

    handleSubmit = event => {
      event.preventDefault();
      const { username, password, email, issues } = this.state;
      this.props.onSubmit(username, password, email, issues);
      this.setState({ username: '', password: '', email: '', issues: [] });
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
      console.log('change', this.state);
    }

    render() {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
            <input type="text" name="password" placeholder="Password" onChange={this.handleChange}></input>
            <input type="text" name="email" placeholder="Email Address" onChange={this.handleChange}></input>
            <Link to="/signup/issues"><button>Sign-Up</button></Link>
          </form>
          <h3>Already have an account? Return to login:</h3>
          <Link to="/" ><button>Login</button></Link>
        </>
      );
    }
}
