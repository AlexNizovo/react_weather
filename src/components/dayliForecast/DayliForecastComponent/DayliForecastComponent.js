import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import '../../../pages/weather/styless.css'


export function DayliForecastComponent (props) {


    const { data, icon, temperature, pressure, humidity, wind } = props;

   

    
    return (
        <div className="next_day">
            <div className="date_2">
                <p>{data.slice(0,10)}</p>
            </div>
            <div className="icon">{icon}</div>
            <div className="temperature">
                <p>{temperature}˚C</p>
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
