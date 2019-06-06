import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SignUpForm extends PureComponent {
    static propTypes = {
      onClick: PropTypes.func.isRequired
    }

    state = {
      username: '',
      password: '',
      email: '',
      issues: []
    }

    handleClick = event => {
      event.preventDefault();
      const { username, password, email, issues } = this.state;
      this.props.onClick(username, password, email, issues);
      this.setState({ username: '', password: '', email: '', issues: [] });
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
      console.log('change', this.state);
    }

    render() {
      return (
        <>
          <form>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
            <input type="text" name="password" placeholder="Password" onChange={this.handleChange}></input>
            <input type="text" name="email" placeholder="Email Address" onChange={this.handleChange}></input>
            <button onClick={this.handleClick}><Link to="/signup/issues">Sign-Up</Link></button>
          </form>
          <h3>Already have an account? Return to login:</h3>
          <Link to="/" ><button>Login</button></Link>
        </>
      );
    }
}
