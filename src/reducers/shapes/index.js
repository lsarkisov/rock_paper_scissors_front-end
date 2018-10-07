import {
    ON_USER_SELECTION,
    ON_COMPUTER_SELECTION
} from '../../const';

export const shape = (state = {}, action) => {
    switch (action.type) {
        case ON_USER_SELECTION:
            return Object.assign({}, state, {
                userSelection: action.shape
            });
        
        case ON_COMPUTER_SELECTION:
            return Object.assign({}, state, {
                computerSelection: action.shape
            });
    
        default:
            return Object.assign({}, state);
    }
};