export const VEHICLE_REQUEST = 'app/planets/VEHICLE_REQUEST';
export const VEHICLE_SUCCESS = 'app/planets/VEHICLE_SUCCESS';
export const UPDATE_VEHICLE_COUNT = 'app/planets/UPDATE_VEHICLE_COUNT';
export const UPDATE_TOTAL_TIME = 'app/planets/UPDATE_TOTAL_TIME';
export const TOTAL_TIME_INITIAL = 'app/planets/TOTAL_TIME_INITIAL';

export const vehicleListRequest = () => {
    return {
      type: VEHICLE_REQUEST
    };
  };
  
export const vehicleListSuccess = data => {
  return {
    type: VEHICLE_SUCCESS,
    data
  };
};

export const vehicleCountUpdate = (prevData, newData) => {
  return {
    type: UPDATE_VEHICLE_COUNT,
    prevData,
    newData
  };
};

export const totalTimeUpdate = (prevData, newData, selectedPlanet) => {
  return {
    type: UPDATE_TOTAL_TIME,
    prevData,
    newData,
    selectedPlanet
  };
};

export const totalTimeInitial = () => {
  return {
    type: TOTAL_TIME_INITIAL
  };
}