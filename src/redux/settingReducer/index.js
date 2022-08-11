
const initialState = {
  currentLocation: '',
}

export const CHANGE_CURRENT_LOCATION = 'change_current_location';

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_LOCATION: {
      return {
        ...state,
        currentLocation: action.data.currentLocation,
      }
    }
  }
  return state;
}
