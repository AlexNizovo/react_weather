import React from "react";
import '..//../pages/weather/styless.css'



function TimeForecast () {


let time = []
for (let i = 0; i<5; i++) {
    time.push(
        <div className="next_time">
            <div className="time">
                <p>12.00</p>
            </div>
            <div className="icon"></div>
            <div className="temperature">
                <p>14˚C</p>
            </div>
        </div>
    )
}


    return(
        <div className="conteiner_3">
            {time}
        </div>
    )
}


export default TimeForecast

