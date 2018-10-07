import { connect } from 'react-redux';
import Scores from '../../components/scores';

const mapStateToProps = (state) => {
  const { user, computer, win } = state.shape;
  return { user, computer, win };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
