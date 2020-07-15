export const PLANETS_REQUEST = 'app/planets/PLANETS_REQUEST';
export const PLANETS_SUCCESS = 'app/planets/PLANETS_SUCCESS';
export const VEHICLE_REQUEST = 'app/planets/VEHICLE_REQUEST';
export const VEHICLE_SUCCESS = 'app/planets/VEHICLE_SUCCESS';

export const planetListRequest = () => {
    return {
      type: PLANETS_REQUEST
    };
};

export const planetListSuccess = data => {
    return {
      type: PLANETS_SUCCESS,
      data
    };
};

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