import { connect } from 'react-redux';
import Score from '../../components/score';

const mapStateToProps = (state) => {
  const { shape } = state;
  return { shape };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score);
