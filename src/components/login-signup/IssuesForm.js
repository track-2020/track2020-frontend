import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class IssuesForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired
    }
    
    state = {
      issues: []
    }

    handleSubmit = event => {
      event.preventDefault();
      console.log('submit button clicked');

    }

    handleChange = ({ target }) => {
      console.log('change name', target.name);
      const checkIndexOfIssue = this.state.issues.includes(target.name);
      if(checkIndexOfIssue) {
        console.log('that choice is already in the array');
      }
      else if(target.checked === true) {
        console.log('change event clicked true');
        this.setState({
          issues: [...this.state.issues, target.name]
        });
      }
      console.log(this.state.issues);

    }


    render() {
      return (
            <>
                <form onSubmit={this.handleSubmit}>
                  <input type="checkbox" id="lgbt" name="lgbt" onChange={this.handleChange} /> 
                  <label htmlFor="lgbt">LGBTQIA+</label>

                  <input type="checkbox" id="climate" name="climate" onChange={this.handleChange} /> 
                  <label htmlFor="climate">Climate Change</label>

                  <input type="checkbox" id="economy" name="economy" onChange={this.handleChange} /> 
                  <label htmlFor="economy">Economy</label>

                  <input type="checkbox" id="reproductive-health" name="reproductive-health" onChange={this.handleChange} /> 
                  <label htmlFor="reproductive-health">Reproductive Health</label>

                  <input type="checkbox" id="immigration" name="immigration" onChange={this.handleChange} /> 
                  <label htmlFor="immigration">Immigration</label>

                  <input type="checkbox" id="foreign-policy" name="foreign-policy" onChange={this.handleChange} /> 
                  <label htmlFor="foreign-policy">Foreign Policy</label>

                  <input type="checkbox" id="healthcare" name="healthcare" onChange={this.handleChange} /> 
                  <label htmlFor="healthcare">Healthcare</label>

                  <input type="checkbox" id="gun-violence" name="gun-violence" onChange={this.handleChange} /> 
                  <label htmlFor="gun-violence">Gun Violence</label>

                  <input type="checkbox" id="criminal-justice-reform" name="criminal-justice-reform" onChange={this.handleChange} /> 
                  <label htmlFor="criminal-justice-reform">Criminal Justice Reform</label>

                  <input type="checkbox" id="voting" name="voting" onChange={this.handleChange} /> 
                  <label htmlFor="voting">Voting Rights</label>

                  <input type="checkbox" id="tax" name="tax" onChange={this.handleChange} /> 
                  <label htmlFor="tax">Tax Fairness</label>

                  <input type="checkbox" id="gender" name="gender" onChange={this.handleChange} /> 
                  <label htmlFor="gender">Gender Equality</label>

                  <input type="checkbox" id="education" name="education" onChange={this.handleChange} /> 
                  <label htmlFor="education">Education</label>
                  
                  <input type="checkbox" id="racial-justice" name="racial-justice" onChange={this.handleChange} /> 
                  <label htmlFor="racial-justice">Racial Justice</label>

                  <button>Continue</button>
                </form>
            </>
      );
    }


}
