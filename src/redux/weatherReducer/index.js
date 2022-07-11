
import {
  GET_DAILY_WEATHER,
  GET_DAILY_WEATHER_SUCCESS,
  GET_DAILY_WEATHER_FAIL,
  GET_TIME_WEATHER,
  GET_TIME_WEATHER_SUCCESS,
  GET_TIME_WEATHER_FAIL,
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_FAIL,
  GET_CURRENT_WEATHER_SUCCESS,
  
} from "./actions";

const initialState = {
    dailyReducer: {
      data: {},
      isLoaded: false,
      haveError: false,
    },
    timeReducer: {
      data: {},
      isLoaded: false,
      haveError: false,
    },
    currentReducer: {
      data: {},
      isLoaded: false,
      haveError: false,
    }
  }

  export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CURRENT_WEATHER: {
        return {
          ...state,
          currentReducer: {
            ...initialState.currentReducer,
          }
        }
      }
      case GET_CURRENT_WEATHER_SUCCESS: {
        return {
          ...state,
          currentReducer: {
            data: action.data,
            isLoaded: true,
            haveError: false,
          }
        }
      }
      case GET_CURRENT_WEATHER_FAIL: {
        return {
          ...state,
          currentReducer: {
            isLoaded: false,
            haveError: false,
          }
        }
      }
      case GET_TIME_WEATHER: {
        return {
          ...state,
          timeReducer: {
            ...initialState.timeReducer,
          }
        }
      }
      case GET_TIME_WEATHER_SUCCESS: {
        return {
          ...state,
          timeReducer: {
            data: action.data,
            isLoaded: true,
            haveError: false,
          }
        }
      }
      case GET_TIME_WEATHER_FAIL: {
        return {
          ...state,
          timeReducer: {
            isLoaded: false,
            haveError: false,
          }
        }
      }
      case GET_DAILY_WEATHER : {
        return {
          ...state,
          dailyReducer: {
            ...initialState.dailyReducer,
          }
        }
      }
      case GET_DAILY_WEATHER_SUCCESS: {
        return {
          ...state,
          dailyReducer: {
            data: action.data,
            isLoaded: true,
            haveError: false,
          }
        }
      }
      case GET_DAILY_WEATHER_FAIL: {
        return {
          ...state,
          dailyReducer: {
            isLoaded: false,
            haveError: false,
          }
        }
      }
    }
    return state;
  }
