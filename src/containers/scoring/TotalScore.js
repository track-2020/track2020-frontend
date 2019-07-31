import { connect } from 'react-redux';
import Tracking from '../../pages/Tracking';
import { updateScores } from '../../actions/scoringActions';

const mapDispatchToProps = (dispatch) => ({
  onClose(score) {
    dispatch(updateScores(score));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Tracking);
