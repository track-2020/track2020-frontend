import React, { PureComponent } from 'react';
import CandidateModal from '../components/modals/CandidateModal';
import PropTypes from 'prop-types';

export default class Tracking extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  }


    state = {
      show: false,
      score: 0
    }

    handleModalClose() {
      const { score } = this.state;
      this.props.onClose(score);
      this.setState({
        score: 0
      });
    }

    showModal = () => {
      this.setState({
        show: true
      });
    }

    hideModal = () => {
      this.setState({
        show: false
      });
      this.handleModalClose();
    }

    handlePlusClick = () => {
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
            </>
      );
    }

}
