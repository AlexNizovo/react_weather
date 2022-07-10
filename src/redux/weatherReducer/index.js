import CurrentWeatherMOCK from '../../MOCKS/currentWeather.json';
import DayliForecastMOCK from '../../MOCKS/dayliForecast.json'
import TimeForecastMOCK from '../../MOCKS/timeForecast.json'
import {
  CHANGE_DAYLI_WEATHER,
  CHANGE_TIME_WEATHER,
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_FAIL,
  GET_CURRENT_WEATHER_SUCCESS
} from "./actions";

const initialState = {
    dayliReducer: {
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
            haveError: true,
          }
        }
      }
      case CHANGE_TIME_WEATHER: {
        return {
          ...state,
          timeReducer: {
            data: action.data.timeReducer,
            isLoaded: true
          }
        }
      }
      case CHANGE_DAYLI_WEATHER : {
        return {
          ...state,
          dayliReducer: {
            data: action.data.dayliReducer,
            isLoaded: true
          }
        }
      }
    }
    return state;
  }
