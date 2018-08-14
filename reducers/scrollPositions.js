import { SCROLL_POSITION } from "../actions/scrollPositions";

const initialState = {
  // States will be here
};

export default (state=initialState, action) => {
  switch(action.type) {
    case SCROLL_POSITION:
      return state;
    default:
      return state;
  }
};
