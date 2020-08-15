export const TOKEN_REQUEST = 'app/planets/TOKEN_REQUEST';
export const TOKEN_SUCCESS = 'app/planets/TOKEN_SUCCESS';

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