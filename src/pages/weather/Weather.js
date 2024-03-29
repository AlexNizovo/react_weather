import React, {useEffect} from "react";
import TimeForecastContainer from "../../components/TimeForecastContainer/TimeForecastContainer";
import DayliForecastContainer from "../../components/dayliForecast/DayliForecastContainer/DayliForecastContainer";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import '../weather/styless.css'
import {useSelector, useDispatch} from "react-redux";
import { getCurrentWeather, getTimeWeather, getDailyWeather } from "../../redux/weatherReducer/actions";
import Select from "../../components/select/index";
/*
  Задача:
  1. Сделать реальный запрос в экшене на погоду
  2. Сделать все тоже самое для daily и time weather
 */
function Weather () {
    const dispatch = useDispatch()
    const currentLocation = useSelector((state) => state.settingReducer.currentLocation)
    const currentWeather = useSelector((state) => state.weatherReducer.currentReducer)
    const dayWeather = useSelector((state) => state.weatherReducer.dailyReducer)
    const timeWeather = useSelector((state) => state.weatherReducer.timeReducer)
    
    useEffect(() => {
      if (currentLocation === '') {
          return undefined
      } else {
      dispatch(getCurrentWeather(currentLocation))
      dispatch(getDailyWeather(currentLocation))
      dispatch(getTimeWeather(currentLocation)) }
    }, [currentLocation, dispatch])
    useEffect(() => {
      if (currentWeather.haveError || dayWeather.haveError || timeWeather.haveError) {
        // alert('Что-то пошло не так')
      }
    }, [currentWeather.haveError, dayWeather.haveError, timeWeather.haveError])

      
     
    return (
        <div>
          <Select 
            currentLocation={currentLocation}
          />
          {
            currentWeather.isLoaded ? (
              <CurrentWeather key={currentWeather.data.name}
                name={currentWeather.data.name}
                icon={currentWeather.data.weather[0].icon}
                temperature={currentWeather.data.main.temp.toFixed()}
                humidity={currentWeather.data.main.humidity}
                pressure={(currentWeather.data.main.pressure / 1.33322).toFixed()}
                description={currentWeather.data.weather[0].description}
                wind={currentWeather.data.wind.speed.toFixed(1)}
                feels_like={currentWeather.data.main.feels_like.toFixed()}
              />
            ) : null
          }
          {
            dayWeather.isLoaded ? (
              <DayliForecastContainer />
            ) : null
          }
          { 
            timeWeather.isLoaded ? (
              <TimeForecastContainer  />
            ) : null
          }
          
        </div>
    )
}
export default Weather