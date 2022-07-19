import React, {useEffect,useState} from "react";
import Select from 'react-select'
import TimeForecastContainer from "../../components/TimeForecastContainer/TimeForecastContainer";
import DayliForecastContainer from "../../components/dayliForecast/DayliForecastContainer/DayliForecastContainer";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import '../weather/styless.css'
import {useSelector, useDispatch} from "react-redux";
import {CHANGE_CURRENT_LOCATION} from "../../redux/settingReducer";
import { getCurrentWeather, getTimeWeather, getDailyWeather } from "../../redux/weatherReducer/actions";
import {GET_CURRENT_LOCATION} from '../../redux/select/index'

/*
  Задача:
  1. Сделать реальный запрос в экшене на погоду
  2. Сделать все тоже самое для daily и time weather
 */

function Weather () {
    const [selectedOption, setSelectedOption] = useState('');
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const currentLocation = useSelector((state) => state.settingReducer.currentLocation)
    const currentWeather = useSelector((state) => state.weatherReducer.currentReducer)
    const dayWeather = useSelector((state) => state.weatherReducer.dailyReducer)
    const timeWeather = useSelector((state) => state.weatherReducer.timeReducer)
    const searchCity = useSelector((state) => state.searchCity.getCity)
    
    useEffect(() => {
      if (selectedOption === '') {
          return undefined
      } else {
      dispatch(getCurrentWeather(selectedOption.value))
      dispatch(getDailyWeather(selectedOption.value))
      dispatch(getTimeWeather(selectedOption.value)) }
    }, [selectedOption.value, dispatch])



    useEffect(() => {
      if (currentWeather.haveError || dayWeather.haveError || timeWeather.haveError) {
        // alert('Что-то пошло не так')
      }
    }, [currentWeather.haveError, dayWeather.haveError, timeWeather.haveError])


      console.log(searchCity)
    

    // function SubmitHendler(event) {
    //   event.preventDefault()
    //   setValue('')
    //   }


    function SubmitLocation(selectedOption) {
        
        dispatch({
          type: GET_CURRENT_LOCATION,
          data: {
            searchCity: selectedOption,
          }
        }) 
    }

      console.log(selectedOption)
      console.log(currentLocation)
    return (
        <div>
         
          <div className="search"> 
            <div className="select">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={searchCity}
                  placeholder='Введите город или выберите из списка'
                  // inputValue={value}
                  // onInputChange={setValue}
                />
            </div>
            {/* <form onSubmit={SubmitHendler}>
              <input 
                type='text' 
                placeholder="Search sity" 
                value={value} 
                onChange={ event => setValue(event.target.value) } 
                />
              <button 
                type='submit' 
                onClick={SubmitLocation} 
                />
            </form>  */}
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

