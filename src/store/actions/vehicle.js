export const VEHICLE_REQUEST = 'app/planets/VEHICLE_REQUEST';
export const VEHICLE_SUCCESS = 'app/planets/VEHICLE_SUCCESS';

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