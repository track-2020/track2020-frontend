import React, { PureComponent } from 'react';
import CandidateModal from '../components/modals/CandidateModal';
// import PropTypes from 'prop-types';

export default class Tracking extends PureComponent {
//   static propTypes = {

  //   }

    state = {
      show: false,
      score: 0
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

    handlePlusClick = (prevState) => {
      console.log('plus button clicked');
      console.log(this.state.score);
      const stateScore = this.state.score;
      this.setState({
        score: stateScore + 1
      });
      console.log(this.state);
    }
    

    render() {
      return (
            <>
                <h1>Candidates</h1>
                <img src="https://miro.medium.com/fit/c/256/256/1*otydHRTFB1BbHZ4Xu4dLQA.png" onClick={this.showModal} />
                <CandidateModal show={this.state.show} close={this.hideModal} plusClick={this.handlePlusClick}>
                  <p>Testing this thang</p>
                </CandidateModal>
                {/* <p onClick={this.hideModal}>Close Modal</p> */}
            </>
      );
    }

}
