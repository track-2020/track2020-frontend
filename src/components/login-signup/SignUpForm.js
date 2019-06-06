import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends PureComponent {
    static propTypes = {
      onClick: PropTypes.func.isRequired,
      history: PropTypes.object.isRequired
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
      this.props.history.push('/signup/issues');
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
            <input type="text" name="email" placeholder="Email Address" onChange={this.handleChange}></input>
            <button onClick={this.handleClick}>Sign-Up</button>
          </form>
          <h3>Already have an account? Return to login:</h3>
          <Link to="/" ><button>Login</button></Link>
        </>
      );
    }
}

export default withRouter(SignUpForm);
