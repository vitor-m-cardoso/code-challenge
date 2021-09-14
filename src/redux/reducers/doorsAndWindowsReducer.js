import {
  FIRST_DOOR_AND_WINDOW_AREA,
  SECOND_DOOR_AND_WINDOW_AREA,
  THIRD_DOOR_AND_WINDOW_AREA,
  FOURTH_DOOR_AND_WINDOW_AREA,
} from "../actions/doorsAndWindowsActions";

const INITIAL_STATE = {
  firstWall: {
    areaDoor: 0,
    areaWindow: 0,
  },
  secondWall: {
    areaDoor: 0,
    areaWindow: 0,
  },
  thirdWall: {
    areaDoor: 0,
    areaWindow: 0,
  },
  fourthWall: {
    areaDoor: 0,
    areaWindow: 0,
  },
};

function doorsAndWindowsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FIRST_DOOR_AND_WINDOW_AREA:
    return {
      ...state,
      firstWall: {
        areaDoor: (parseFloat(action.firstAreaDoor) * 1.52).toFixed(2),
        areaWindow: (parseFloat(action.firstAreaWindow) * 2.40).toFixed(2),
      },
    };
  case SECOND_DOOR_AND_WINDOW_AREA:
    return {
      ...state,
      secondWall: {
        areaDoor: (parseFloat(action.secondAreaDoor) * 1.52).toFixed(2),
        areaWindow: (parseFloat(action.secondAreaWindow) * 2.40).toFixed(2),
      },
    };
  case THIRD_DOOR_AND_WINDOW_AREA:
    return {
      ...state,
      thirdWall: {
        areaDoor: (parseFloat(action.thirdAreaDoor) * 1.52).toFixed(2),
        areaWindow: (parseFloat(action.thirdAreaWindow) * 2.40).toFixed(2),
      },
    };
  case FOURTH_DOOR_AND_WINDOW_AREA:
  return {
    ...state,
    fourthWall: {
      areaDoor: (parseFloat(action.fourthAreaDoor) * 1.52).toFixed(2),
      areaWindow: (parseFloat(action.fourthAreaWindow) * 2.40).toFixed(2),
    },
  };
  default:
    return state;
  }
}

export default doorsAndWindowsReducer;
