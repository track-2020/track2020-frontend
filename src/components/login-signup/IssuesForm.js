import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                  <input type="checkbox" id="lgbt" name="lgbt">LGBT</input> 
                  <input type="checkbox" id="climate" name="climate">Climate Change</input>
                  <input type="checkbox" id="economy" name="economy">Economy</input>
                  <input type="checkbox" id="reproductive-health" name="reproductive-health">Reproductive Health</input>
                  <input type="checkbox" id="immigration" name="immigration">Immigration</input>
                  <input type="checkbox" id="foreign-policy" name="foreign-policy">Foreign Policy</input>
                  <input type="checkbox" id="healthcare" name="healthcare">Healthcare</input>
                  <input type="checkbox" id="gun-violence" name="gun-violence">Gun Violence</input>
                  <input type="checkbox" id="criminal-justice" name="criminal-justice">Criminal Justice Reform</input>
                  <input type="checkbox" id="voting" name="voting">Voting Rights</input>
                  <input type="checkbox" id="tax" name="tax">Tax Fairness</input>
                  <input type="checkbox" id="gender-equality" name="gender-equality">Gender Equality</input>
                  <input type="checkbox" id="education" name="education">Education</input>
                  <input type="checkbox" id="racial-justice" name="racial-justice">Racial Justice</input>
                  <button>Continue</button>
                </form>
            </>
      );
    }


}
