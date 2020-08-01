import produce from 'immer';
import { PLANETS_SUCCESS , VEHICLE_SUCCESS , SPACE_POD_TOTAL , SPACE_ROCKET_TOTAL, SPACE_SHUTTLE_TOTAL, SPACE_SHIP_TOTAL , TOKEN_SUCCESS , FIND_FALCONE_SUCCESS , SPACE_POD_INCREASE, SPACE_ROCKET_INCREASE, SPACE_SHUTTLE_INCREASE, SPACE_SHIP_INCREASE } from '../actions/planets.js';
// Initial State
const initialState = {
  planetList: [],
  vehicleList: [],
  spacePodTotal: 0,
  spacePodSpeed: 0,
  spaceRocketSpeed: 0,
  spaceShuttleSpeed: 0,
  spaceShipSpeed: 0,
  spaceRocketTotal: 0,
  token: {},
  searchResult: {},
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

      case SPACE_POD_TOTAL:
        draft.spacePodTotal = draft.spacePodTotal-1 ;
        break;
        
      case SPACE_ROCKET_TOTAL:
        draft.spaceRocketTotal = draft.spaceRocketTotal-1 ;
        break;
          
      case SPACE_SHUTTLE_TOTAL:
        draft.spaceShuttleTotal = draft.spaceShuttleTotal-1 ;
        break;

      case SPACE_SHIP_TOTAL:
        draft.spaceShipTotal = draft.spaceShipTotal-1 ;
        break;

      case SPACE_POD_INCREASE:
        draft.spacePodTotal = draft.spacePodTotal+1 ;
        break;
        
      case SPACE_ROCKET_INCREASE:
        draft.spaceRocketTotal = draft.spaceRocketTotal+1 ;
        break;
          
      case SPACE_SHUTTLE_INCREASE:
        draft.spaceShuttleTotal = draft.spaceShuttleTotal+1 ;
        break;

      case SPACE_SHIP_INCREASE:
        draft.spaceShipTotal = draft.spaceShipTotal+1 ;
        break;  
      
      case TOKEN_SUCCESS:
        draft.token = action.data ;
        break;

      case VEHICLE_SUCCESS:
        draft.vehicleList = action.data;
        draft.spacePodTotal = action.data[0].total_no;
        draft.spaceRocketTotal = action.data[1].total_no;
        draft.spaceShuttleTotal = action.data[2].total_no;
        draft.spaceShipTotal = action.data[3].total_no;
        draft.spacePodSpeed = action.data[0].speed;
        draft.spaceRocketSpeed = action.data[1].speed;
        draft.spaceShuttleSpeed = action.data[2].speed;
        draft.spaceShipSpeed = action.data[3].speed;
        break;  
      
      case FIND_FALCONE_SUCCESS:
        draft.searchResult = action.data;
        break
          
      default: {
        return draft;
      }
    }
  });
// Exports
export default planetListReducer;
