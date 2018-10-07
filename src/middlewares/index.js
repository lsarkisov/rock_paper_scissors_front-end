import {
    ON_USER_SELECTION,
} from '../const';
import { onShapeSelection } from './shapes';

const before = (action, next) => {
    switch (action.type) {
    case ON_USER_SELECTION:
        onShapeSelection(action, next);
        break;
    default:
        return {};
    }
  };

const after = () => {};

const eventsMiddleware = ({ getState }) => next => (action) => {
    before(action, next);
    after(getState);
    return next(action);
};

export default eventsMiddleware;
  