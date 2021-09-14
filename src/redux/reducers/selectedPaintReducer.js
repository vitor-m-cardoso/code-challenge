import { 
  SELECTED_PAINT 
} from "../actions/selectedPaintAction";

const INITIAL_STATE = {
  selectedPaint: '',
};

function selectedPaintReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECTED_PAINT: {
    return {
      selectedPaint: action.selectedPaint,
    }
  }
  default:
    return state;
  }
}

export default selectedPaintReducer;
