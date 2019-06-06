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


    render() {
      return (
            <>
                <form onSubmit={this.handleSubmit}>
                  <input type="checkbox" id="lgbt" name="lgbt" /> 
                  <label htmlFor="lgbt">LGBTQIA+</label>

                  <input type="checkbox" id="climate" name="climate" /> 
                  <label htmlFor="climate">Climate Change</label>

                  <input type="checkbox" id="economy" name="economy" /> 
                  <label htmlFor="economy">Economy</label>

                  <input type="checkbox" id="reproductive-health" name="reproductive-health" /> 
                  <label htmlFor="reproductive-health">Reproductive Health</label>

                  <input type="checkbox" id="immigration" name="immigration" /> 
                  <label htmlFor="immigration">Immigration</label>

                  <input type="checkbox" id="foreign-policy" name="foreign-policy" /> 
                  <label htmlFor="foreign-policy">Foreign Policy</label>

                  <input type="checkbox" id="healthcare" name="healthcare" /> 
                  <label htmlFor="healthcare">Healthcare</label>

                  <input type="checkbox" id="gun-violence" name="gun-violence" /> 
                  <label htmlFor="gun-violence">Gun Violence</label>

                  <input type="checkbox" id="criminal-justice-reform" name="criminal-justice-reform" /> 
                  <label htmlFor="criminal-justice-reform">Criminal Justice Reform</label>

                  <input type="checkbox" id="voting" name="voting" /> 
                  <label htmlFor="voting">Voting Rights</label>

                  <input type="checkbox" id="tax" name="tax" /> 
                  <label htmlFor="tax">Tax Fairness</label>

                  <input type="checkbox" id="gender" name="gender" /> 
                  <label htmlFor="gender">Gender Equality</label>

                  <input type="checkbox" id="education" name="education" /> 
                  <label htmlFor="education">Education</label>
                  
                  <input type="checkbox" id="racial-justice" name="racial-justice" /> 
                  <label htmlFor="racial-justice">Racial Justice</label>

                  <button>Continue</button>
                </form>
            </>
      );
    }


}
