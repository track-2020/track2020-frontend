import React, { PureComponent } from 'react';
import CandidateModal from '../components/modals/CandidateModal';
// import PropTypes from 'prop-types';

export default class Tracking extends PureComponent {
  // static propTypes = {
  //   candidates: PropTypes.array.isRequired
  // }

    state = {
      show: false
    }

    showModal = () => {
      console.log('this is doing something');
      console.log(this.state.show);
      this.setState({
        show: true
      });
    }

    hideModal = () => {
      this.setState({
        show: false
      });
    }

    render() {
      return (
            <>
                <h1>Candidates</h1>
                <img src="https://miro.medium.com/fit/c/256/256/1*otydHRTFB1BbHZ4Xu4dLQA.png" onClick={this.showModal} />
                <CandidateModal show={this.state.show} close={this.hideModal}>
                  <p>Testing this thang</p>
                </CandidateModal>
                {/* <p onClick={this.hideModal}>Close Modal</p> */}
            </>
      );
    }

}
