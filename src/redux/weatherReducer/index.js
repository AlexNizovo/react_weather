import CurrentWeatherMOCK from '../../MOCKS/currentWeather.json';
import DayliForecastMOCK from '../../MOCKS/dayliForecast.json'
import TimeForecastMOCK from '../../MOCKS/timeForecast.json'
const initialState = {
    dayliReducer: {
      day: DayliForecastMOCK
    },
    timeReducer: {
      time: TimeForecastMOCK
    },
    currentReducer: {
      current: CurrentWeatherMOCK
    }
  }
  
  

  export const CHANGE_CURRENT_WEATHER = 'change_current_weather';
  export const CHANGE_DAYLI_WEATHER = 'change_dayli_weather';
  export const CHANGE_TIME_WEATHER = 'change_time_weather';
  
  export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_CURRENT_WEATHER: {
        return {
          ...state, currentReducer: action.data.currentReducer
        }
      } 
      case CHANGE_TIME_WEATHER: {
        return {
          ...state, timeReducer: action.data.timeReducer
        }
      }
      case CHANGE_DAYLI_WEATHER : {
        return {
          ...state, dayliReducer: action.data.dayliReducer
        }
      }
    }
    return state;
  }