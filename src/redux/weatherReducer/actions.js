

export const GET_CURRENT_WEATHER = 'get_current_weather'
export const GET_CURRENT_WEATHER_SUCCESS = 'get_current_weather_success'
export const GET_CURRENT_WEATHER_FAIL = 'get_current_weather_fail'

export const GET_TIME_WEATHER = 'get_time_weather'
export const GET_TIME_WEATHER_SUCCESS = 'get_time_weather_success'
export const GET_TIME_WEATHER_FAIL = 'get_time_weather_fail'

export const GET_DAILY_WEATHER = 'get_daily_weather'
export const GET_DAILY_WEATHER_SUCCESS = 'get_daily_weather_success'
export const GET_DAILY_WEATHER_FAIL = 'get_daily_weather_fail'


export const getCurrentWeather = (cityName) => (dispatch, getState) => {
    dispatch({ type: GET_CURRENT_WEATHER })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0d50db68069481570334a5336c3918a2&units=metric&wind=metric&lang=ru`, { method: 'GET' })
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: GET_CURRENT_WEATHER_SUCCESS, data: data})
      })
      .catch((err) => {
        dispatch({ type: GET_CURRENT_WEATHER_FAIL })
      })
 
}

export const getTimeWeather = (cityName) => async (dispatch, getState) => {
  dispatch({ type: GET_TIME_WEATHER })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0d50db68069481570334a5336c3918a2&lang=ru&wind=metric&units=metric`, { method: 'GET' })
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: GET_TIME_WEATHER_SUCCESS, data: data})
      })
      .catch((err) => {
        dispatch({ type: GET_TIME_WEATHER_FAIL })
      })
}
export const getDailyWeather = (cityName) => async (dispatch, getState) => {
  dispatch({ type: GET_DAILY_WEATHER })
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0d50db68069481570334a5336c3918a2&lang=ru&wind=metric&units=metric`, { method: 'GET' })
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: GET_DAILY_WEATHER_SUCCESS, data: data})
      })
      .catch((err) => {
        dispatch({ type: GET_DAILY_WEATHER_FAIL })
      })  
}
