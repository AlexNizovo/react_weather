import CurrentWeatherMOCK from "../../MOCKS/currentWeather.json";

export const CHANGE_DAYLI_WEATHER = 'change_dayli_weather';
export const CHANGE_TIME_WEATHER = 'change_time_weather';

export const GET_CURRENT_WEATHER = 'get_current_weather'
export const GET_CURRENT_WEATHER_SUCCESS = 'get_current_weather_success'
export const GET_CURRENT_WEATHER_FAIL = 'get_current_weather_fail'

export const getCurrentWeather = (cityName) => (dispatch, getState) => {
  dispatch({ type: GET_CURRENT_WEATHER })
  fetch('apiUrl', { method: 'GET', data: { cityName} })
    .then(res => res.json())
    .then((data) => {
      // Здесь все калькуляции для сторов
      dispatch({ type: GET_CURRENT_WEATHER_SUCCESS, data: data})
    })
    .catch((err) => {
      dispatch({ type: GET_CURRENT_WEATHER_FAIL })
    })
}

export const getDailyTimeWeather = (cityName) => async (dispatch, getState) => {
  // dispatch что мы начали запрос
  const res = await fetch()
  // Здесь все калькуляции для сторов
  // dispatch success или fail
}
