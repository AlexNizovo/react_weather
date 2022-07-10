import CurrentWeatherMOCK from '../../MOCKS/currentWeather.json';
import DayliForecastMOCK from '../../MOCKS/dayliForecast.json'
import TimeForecastMOCK from '../../MOCKS/timeForecast.json'

const initialState = {
    dayliReducer: {
      data: {}, isLoaded: false
    },
    timeReducer: {
      data: {}, isLoaded: false
    },
    currentReducer: {
      data: {}, isLoaded: false
    }
  }
  
  

  export const CHANGE_CURRENT_WEATHER = 'change_current_weather';
  export const CHANGE_DAYLI_WEATHER = 'change_dayli_weather';
  export const CHANGE_TIME_WEATHER = 'change_time_weather';
  
  export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_CURRENT_WEATHER: {
        return {
          ...state,
          currentReducer: {
            data: action.data.currentReducer,
            isLoaded: true
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