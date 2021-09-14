import { 
  FIRST_DOOR_IS_VALID,
  SECOND_DOOR_IS_VALID,
  THIRD_DOOR_IS_VALID,
  FOURTH_DOOR_IS_VALID,
  FIRST_WINDOW_IS_VALID,
  SECOND_WINDOW_IS_VALID,
  THIRD_WINDOW_IS_VALID,
  FOURTH_WINDOW_IS_VALID,
} from "../actions/isValidAreaActions";

const INITIAL_STATE = {
  doors: {
    first: true,
    second: true,
    third: true,
    fourth: true,
  },
  windows: {
    first: true,
    second: true,
    third: true,
    fourth: true,
  },
};

function isValidAreaReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FIRST_DOOR_IS_VALID: {
    return {
      ...state,
      doors: { ...state.doors, first: action.firstDoorIsValid },
    }
  }
  case SECOND_DOOR_IS_VALID: {
    return {
      ...state,
      doors: { ...state.doors, second: action.secondDoorIsValid },
    }
  }
  case THIRD_DOOR_IS_VALID: {
    return {
      ...state,
      doors: { ...state.doors, third: action.thirdDoorIsValid },
    }
  }
  case FOURTH_DOOR_IS_VALID: {
    return {
      ...state,
      doors: { ...state.doors, fourth: action.fourthDoorIsValid },
    }
  }
  case FIRST_WINDOW_IS_VALID: {
    return {
      ...state,
      windows: { ...state.windows, first: action.firstWindowIsValid },
    }
  }
  case SECOND_WINDOW_IS_VALID: {
    return {
      ...state,
      windows: { ...state.windows, second: action.secondWindowIsValid },
    }
  }
  case THIRD_WINDOW_IS_VALID: {
    return {
      ...state,
      windows: { ...state.windows, third: action.thirdWindowIsValid },
    }
  }
  case FOURTH_WINDOW_IS_VALID: {
    return {
      ...state,
      windows: { ...state.windows, fourth: action.fourthWindowIsValid },
    }
  }
  default:
    return state;
  }
}

export default isValidAreaReducer;
