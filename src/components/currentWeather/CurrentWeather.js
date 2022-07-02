import React from "react";
import '../../pages/weather/styless.css'
import {getWeatherIcon} from "../../images/icon";


function CurrentWeather (props) {

    const { name, icon, temperature, humidity, wind, pressure, description, feels_like} = props;

    let date = new Date();
    
    return (
            <div className="container">
                
                <div>
                    <div className="city_name" >
                        <p>{name}</p>
                    </div>
                    <div className="date">
                        <p>{date.toLocaleString('ru').slice(0, 17)}</p>
                    </div>  
                </div> 

                <div className="info">
                    <div className="icon"><img src={getWeatherIcon(icon)}/></div>
                    <div className="temperature">
                        <p>{temperature} ˚C</p> 
                        <p className="description">{description}</p>
                    </div>
                    
                    <div>
                        <div className="pressure">
                            <p>Давление {pressure} мм</p>
                        </div>
                        <div className="humidity">
                            <p>Влажность {humidity}%</p>
                        </div>
                        <div className="wind">
                            <p>Ветер {wind} m/c</p>
                        </div>
                    </div>
                </div>
                <div>  
                    <div className="feels_like">
                        <p>Ощущается как {feels_like}˚C</p>
                    </div>
                </div>
            </div>
    )
}

export default CurrentWeather