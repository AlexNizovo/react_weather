import React, {useEffect} from "react";
import TimeForecastContainer from "../../components/TimeForecastContainer/TimeForecastContainer";
import DayliForecastContainer from "../../components/dayliForecast/DayliForecastContainer/DayliForecastContainer";
import TimeWeatherMOCK from '../../MOCKS/timeForecast.json';
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import CurrentWeatherMOCK  from '../../MOCKS/currentWeather.json'
import DayliForecastMOCK from '../../MOCKS/dayliForecast.json'
import '../weather/styless.css'
import {useSelector, useDispatch} from "react-redux";
import {CHANGE_CURRENT_LOCATION, settingReducer} from "../../redux/settingReducer";
import { CHANGE_CURRENT_WEATHER, CHANGE_DAYLI_WEATHER, CHANGE_TIME_WEATHER, currentReducer, dayiliReducer, timeReducer, weatherReducer } from "../../redux/weatherReducer";

/*
  Задача:
  1. Создать редюсер для погоды
  2. Создать все необходимые экшены для изменения данных в этом редюсере
  3. Перенести все данные из моков в редюсер и делать это при загрузке приложения (с помощью useEffect)
 */

function Weather () {


    const dispatch = useDispatch()

    useEffect(() => {
      // Вставь диспатч экшенов сюда
      dispatch({
        type: CHANGE_CURRENT_WEATHER,
        data: {
          currentReducer: CurrentWeatherMOCK
        }
      })
      dispatch({
        type: CHANGE_DAYLI_WEATHER,
        data: {
          dayliReducer: DayliForecastMOCK
        }
      })
      dispatch({
        type: CHANGE_TIME_WEATHER,
          data: {
            timeReducer: TimeWeatherMOCK
          }
      })
    }, [])

    const currentLocation = useSelector((state) => state.settingReducer.currentLocation)
    const currentWeather = useSelector((state) => state.weatherReducer.currentReducer)
    const dayWeather = useSelector((state) => state.weatherReducer.dayliReducer)

const timeWeather = useSelector((state) => state.weatherReducer.timeReducer)
//       console.log(timeWeather)
    return (
        <div>

            <div className="search">
                <input
                  placeholder="Search sity"
                  value={currentLocation}
                  onChange={(event) => {
                    dispatch({
                      type: CHANGE_CURRENT_LOCATION,
                      data: {
                        currentLocation: event.target.value,
                      }
                    })
                  }}
                />
            </div>
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
            />) : null
                }
            { 
            dayWeather.isLoaded ? (
              <DayliForecastContainer /> 
            ) : null
            }
            { timeWeather.isLoaded ? (
              <TimeForecastContainer  />) : null
            } 
        </div>
    )
}




export default Weather
