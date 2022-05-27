import React from "react";
import '../pages/weather/styless.css'



function DailliForecast () {




    return (
        <div className="conteiner_2">
            <div className="next_day">
                <div className="date_2">
                    <p>25.04.2022</p>
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
                    <p>Ветер3 m/c</p>
                </div>
            </div>      
        </div>
    )
}


export default DailliForecast