import { connect } from 'react-redux';
import Shapes from '../../components/shapes';
import { onUserSelection } from '../../actions/shapes';

const mapStateToProps = (state) => {
  const { userSelection } = state.shape;
  return {
    userSelection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShapeSelection: (shape) => {
      dispatch(onUserSelection(shape))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shapes);
