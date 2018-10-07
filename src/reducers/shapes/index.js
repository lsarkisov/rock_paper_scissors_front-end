import {
    ON_USER_SELECTION,
    ON_COMPUTER_SELECTION
} from '../../const';

export const shape = (state = {}, action) => {
    switch (action.type) {
        case ON_USER_SELECTION:
            return {...state,
                userSelection: action.shape
            };
        case ON_COMPUTER_SELECTION:
            const { user, computer, win } = action;
            return {...state,
                user, computer, win
            };
        default:
            return {...state};
    }
};