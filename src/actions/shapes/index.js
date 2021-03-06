import {
    ON_USER_SELECTION,
    ON_COMPUTER_SELECTION
} from '../../const';

export const onUserSelection = (shape) => {
  return {
    type: ON_USER_SELECTION,
    shape
  };
};

export const onComputerSelection = (response) => {
  const { user, computer, win } = response;
  return {
    type: ON_COMPUTER_SELECTION,
    user, computer, win
  };
};
