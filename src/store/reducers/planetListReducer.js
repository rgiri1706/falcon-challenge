import produce from 'immer';
import { PLANETS_SUCCESS } from '../actions/planets.js';
// Initial State
const initialState = {
  planetList: []
};

// Redux:
const planetListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PLANETS_SUCCESS:
        draft.planetList = action.data;
        break;
      
      default: {
        return draft;
      }
    }
  });
// Exports
export default planetListReducer;
