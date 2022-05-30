import React from "react";
import TimeForecastContainer from "../../components/TimeForecastContainer/TimeForecastContainer";
import DayliForecastContainer from "../../components/dayliForecast/DayliForecastContainer/DayliForecastContainer";
import TimeWeatherMOCK from '../../MOCKS/timeForecast.json';
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import CurrentWeatherMOCK  from '../../MOCKS/currentWeather.json'
import '../weather/styless.css'

function Weather () {


    const current = CurrentWeatherMOCK
 



    return (
        <div>

            <div className="search">
                <input placeholder="Search sity"></input>
            </div>

            <CurrentWeather key={current.name} 
                name={current.name} 
                icon={current.weather.icon} 
                temperature={current.main.temp.toFixed()}
                humidity={current.main.humidity}
                pressure={(current.main.pressure / 1.33322).toFixed()}
                description={current.weather.description}
                wind={current.wind.speed.toFixed(1)}
                feels_like={current.main.feels_like.toFixed()}
            />
            <DayliForecastContainer day={TimeWeatherMOCK.list}/> 

            <TimeForecastContainer data={TimeWeatherMOCK.list} />
        </div>
    )
}




export default Weather 