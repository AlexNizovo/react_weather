import React, {useState} from "react";
import CurrentData from "../../components/currentWeather/CurrentWeather";
import DailliForecast from "../../components/dailliForecast/DailliForecast";
import TimeForecast from "../../components/timeForecast/TimeForecast";
import '../weather/styless.css'



function Weather () {





    return (
        <div>

            <div className="search">
                <input placeholder="Search sity"></input>
            </div>
           
            <CurrentData />
           
                 <DailliForecast /> 
            
           
            <TimeForecast />
        </div>
    )
}




export default Weather