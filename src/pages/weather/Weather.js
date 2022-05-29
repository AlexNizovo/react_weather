import React, {useState} from "react";
import CurrentData from "../../components/currentWeather/CurrentWeather";
import DailliForecast from "../../components/dailliForecast/DailliForecast";
import TimeForecastContainer from "../../components/timeForecastContainer/TimeForecast";
import '../weather/styless.css'
import TimeWeatherMOCK from '../../MOCKS/timeForecast.json'

function Weather () {





    return (
        <div>

            <div className="search">
                <input placeholder="Search sity"></input>
            </div>
           
            <CurrentData />
           
                 <DailliForecast /> 
            
           
            <TimeForecastContainer data={TimeWeatherMOCK.list} />
        </div>
    )
}




export default Weather