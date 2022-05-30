import React from "react";
import '../../../pages/weather/styless.css'


export function DayliForecastComponent (props) {


    const { data, icon, temperature, pressure, humidity, wind } = props;



    return (
        <div className="next_day">
            <div className="date_2">
                <p>{data}</p>
            </div>
            <div className="icon"></div>
            <div className="temperature">
                <p>14˚C/ 7˚C</p>
            </div>
            <div className="pressure">
                <p>Давление 761 мм</p>
            </div>
            <div className="humidity">
                <p>Влажность 60%</p>
            </div>
            <div className="wind">
                <p>Ветер 3 m/c</p>
            </div>
        </div>
    )
}
