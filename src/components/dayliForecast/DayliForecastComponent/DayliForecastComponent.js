import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import '../../../pages/weather/styless.css'
import {getWeatherIcon} from '../../../images/icon'

export function DayliForecastComponent (props) {


    const { data, icon, temperature, pressure, humidity, wind, description } = props;

   
    
    return (
        <div className="next_day">
            <div className="date_2">
                <p>{data}</p>
            </div>
            <div className="icon"><img src={getWeatherIcon(icon)}/></div>
            <div className="temperature">
                <p>{temperature}˚C</p> 
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="pressure">
                <p>Давление {(pressure/ 1.33322).toFixed()} мм</p>
            </div>
            <div className="humidity">
                <p>Влажность {humidity}%</p>
            </div>
            <div className="wind">
                <p>Ветер {wind} m/c</p>
            </div>
        </div>
    )
}
