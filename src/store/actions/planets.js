export const PLANETS_REQUEST = 'app/planets/PLANETS_REQUEST';
export const PLANETS_SUCCESS = 'app/planets/PLANETS_SUCCESS';

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