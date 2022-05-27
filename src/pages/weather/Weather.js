import React, {useState} from "react";
import CurrentData from "../../components/CurrentWeather";
import DailliForecast from "../../components/DailliForecast";
import TimeForecast from "../../components/TimeForecast";
import './styless.css'



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