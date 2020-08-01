export const PLANETS_REQUEST = 'app/planets/PLANETS_REQUEST';
export const PLANETS_SUCCESS = 'app/planets/PLANETS_SUCCESS';
export const VEHICLE_REQUEST = 'app/planets/VEHICLE_REQUEST';
export const VEHICLE_SUCCESS = 'app/planets/VEHICLE_SUCCESS';
export const SPACE_POD_TOTAL = 'app/planets/SPACE_POD_TOTAL';
export const SPACE_ROCKET_TOTAL = 'app/planets/SPACE_ROCKET_TOTAL';
export const SPACE_SHUTTLE_TOTAL = 'app/planets/SPACE_SHUTTLE_TOTAL';
export const SPACE_SHIP_TOTAL = 'app/planets/SPACE_SHIP_TOTAL';
export const SPACE_POD_INCREASE = 'app/planets/SPACE_POD_INCREASE';
export const SPACE_ROCKET_INCREASE = 'app/planets/SPACE_ROCKET_INCREASE';
export const CHANGE_LOADER_TRUE = 'app/planets/CHANGE_LOADER_TRUE';
export const SPACE_SHUTTLE_INCREASE = 'app/planets/SPACE_SHUTTLE_INCREASE';
export const SPACE_SHIP_INCREASE = 'app/planets/SPACE_SHIP_INCREASE';
export const TOKEN_REQUEST = 'app/planets/TOKEN_REQUEST';
export const TOKEN_SUCCESS = 'app/planets/TOKEN_SUCCESS';
export const FIND_FALCONE_REQUEST = 'app/planets/FIND_FALCONE_REQUEST';
export const FIND_FALCONE_SUCCESS = 'app/planets/FIND_FALCONE_SUCCESS';

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

export const spacePodTally = () => {
  return {
    type: SPACE_POD_TOTAL
  };
};

export const spaceRocketTally = () => {
  return {
    type: SPACE_ROCKET_TOTAL
  };
};

export const spaceShuttleTally = () => {
  return {
    type: SPACE_SHUTTLE_TOTAL
  };
};

export const spaceShipTally = () => {
  return {
    type: SPACE_SHIP_TOTAL
  };
};

export const spacePodIncrease = () => {
  return {
    type: SPACE_POD_INCREASE
  };
};

export const spaceRocketIncrease = () => {
  return {
    type: SPACE_ROCKET_INCREASE
  };
};

export const spaceShuttleIncrease = () => {
  return {
    type: SPACE_SHUTTLE_INCREASE
  };
};

export const spaceShipIncrease = () => {
  return {
    type: SPACE_SHIP_INCREASE
  };
};

export const getTokenRequest = () => {
  return {
    type: TOKEN_REQUEST
  };
}

export const getTokenSuccess = data => {
  return {
    type: TOKEN_SUCCESS,
    data
  };
}

export const findFalconeRequest = (data, resolve, reject) => {
  return {
    type: FIND_FALCONE_REQUEST,
    data,
    resolve,
    reject
  };
}

export const getFalconeResponse = data => {
  return {
    type: FIND_FALCONE_SUCCESS,
    data
  };
}

