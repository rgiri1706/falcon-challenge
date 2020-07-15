import produce from 'immer';
import { PLANETS_SUCCESS , VEHICLE_SUCCESS } from '../actions/planets.js';
// Initial State
const initialState = {
  planetList: [],
  vehicleList: [],
  spacePodTotal: 0,
  spaceRocketTotal: 0,
  spaceShuttleTotal: 0,
  spaceShipTotal: 0
};

// Redux:
const planetListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PLANETS_SUCCESS:
        draft.planetList = action.data;
        break;

      case VEHICLE_SUCCESS:
        draft.vehicleList = action.data;
        draft.spacePodTotal = action.data[0].total_no;
        draft.spaceRocketTotal = action.data[1].total_no;
        draft.spaceShuttleTotal = action.data[2].total_no;
        draft.spaceShipTotal = action.data[3].total_no;
        break;  
      
      default: {
        return draft;
      }
    }
  });
// Exports
export default planetListReducer;
