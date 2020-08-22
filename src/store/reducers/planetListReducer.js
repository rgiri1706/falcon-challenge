import produce from 'immer';
import { PLANETS_SUCCESS  } from '../actions/planets.js';
import { VEHICLE_SUCCESS , UPDATE_VEHICLE_COUNT , UPDATE_TOTAL_TIME , TOTAL_TIME_INITIAL } from '../actions/vehicle.js';
import { TOKEN_SUCCESS } from '../actions/token.js';
import { FIND_FALCONE_SUCCESS } from '../actions/find.js';

// Initial State
const initialState = {
  planetList: [],
  vehicleList: [],
  token: {},
  totalTime: 0,
  searchResult: {}
};

const updateVehicleCount= (prevData, newData, vehicleList) => {
  vehicleList.forEach((option)=>{
    if(option.name === prevData){
      option.total_no=option.total_no+1;
    }
    if(option.name === newData){
      option.total_no=option.total_no-1;
    }
  })
}

const updateTotalCount= (prevData, newData, vehicleList, selectedPlanet, totalTime) => {
  let time = totalTime;
  console.log(totalTime);
  vehicleList.forEach((option)=>{
    if(option.name === prevData){
      time = time - ((selectedPlanet.distance)/option.speed);
    }
    if(option.name === newData){
      time = time + ((selectedPlanet.distance)/option.speed);
    }
  })
  return time;
}

// Redux:
const planetListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PLANETS_SUCCESS:
        draft.planetList = action.data;
        break;
      
      case TOKEN_SUCCESS:
        draft.token = action.data ;
        break;

      case VEHICLE_SUCCESS:
        draft.vehicleList = action.data;
        break;  

      case UPDATE_VEHICLE_COUNT:
        updateVehicleCount(action.prevData, action.newData, draft.vehicleList);
        break;  
      
      case UPDATE_TOTAL_TIME:
        draft.totalTime=updateTotalCount(action.prevData, action.newData, draft.vehicleList, action.selectedPlanet, draft.totalTime);
        break;  
          
      case FIND_FALCONE_SUCCESS:
        draft.searchResult = action.data;
        break;

      case TOTAL_TIME_INITIAL:
        draft.totalTime = 0;
        break;  
          
      default: {
        return draft;
      }
    }
  });
// Exports
export default planetListReducer;
