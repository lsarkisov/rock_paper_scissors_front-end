const before = (action, next) => {

};

const after = () => {};

const eventsMiddleware = ({ getState }) => next => (action) => {
    before(action, next);
    after(getState);
    return next(action);
};

export default eventsMiddleware;
  