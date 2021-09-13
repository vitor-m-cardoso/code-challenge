import {
  FIRST_WALL_HEIGHT_AND_WIDTH,
  SECOND_WALL_HEIGHT_AND_WIDTH,
  THIRD_WALL_HEIGHT_AND_WIDTH,
  FOURTH_WALL_HEIGHT_AND_WIDTH,
} from '../actions/wallHeightAndWidthActions';

const INITIAL_STATE = {
  firstWall: 0,
  secondWall: 0,
  thirdWall: 0,
  fourthWall: 0,
};

function wallsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FIRST_WALL_HEIGHT_AND_WIDTH:
    return {
      ...state,
      firstWall: (action.firstWallHeight * action.firstWallWidth).toFixed(2),
    };
  case SECOND_WALL_HEIGHT_AND_WIDTH:
    return {
      ...state,
      secondWall: (action.secondWallHeight * action.secondWallWidth).toFixed(2),
    };
  case THIRD_WALL_HEIGHT_AND_WIDTH:
    return {
      ...state,
      thirdWall: (action.thirdWallHeight * action.thirdWallWidth).toFixed(2),
    };
  case FOURTH_WALL_HEIGHT_AND_WIDTH:
    return {
      ...state,
      fourthWall: (action.fourthWallHeight * action.fourthWallWidth).toFixed(2),
    };
  default:
    return state;
  };
};

export default wallsReducer;
