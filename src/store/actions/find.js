export const FIND_FALCONE_REQUEST = 'app/planets/FIND_FALCONE_REQUEST';
export const FIND_FALCONE_SUCCESS = 'app/planets/FIND_FALCONE_SUCCESS';

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