import options from "./options";



const initialState = {
    getCity: options
}


export const GET_CURRENT_LOCATION = 'get_current_location';

export const searchCity = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION: {
      return {
        ...state,
        getCity: action.data.getCity,
      }
    }
  }
  return state;
}