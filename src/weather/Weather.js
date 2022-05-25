import React, {useState} from "react";
import './weather.css'



function Weather () {






    return (
        <div>

            <div className="search">
                <input placeholder="Search sity"></input>
            </div>

            <div className="container">
                
                <div>
                    <div className="city_name">
                        <p>Minsk</p>
                    </div>
                    <div className="date">
                        <p>24.05.2022</p>
                    </div>  
                </div> 

                <div className="info">
                    <div className="icon"></div>
                    <div className="temperature">
                        <p>+15˚C</p>
                    </div>
                    <div>
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
                </div>
                <div>  
                    <div className="feels_like">
                        <p>Ощущается как 14,5˚C</p>
                    </div>
                </div>
            </div>

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

            <div className="conteiner_3">
                <div className="next_time">
                    <div className="time">
                        <p>12.00</p>
                    </div>
                    <div className="icon"></div>
                    <div className="temperature">
                        <p>14˚C</p>
                    </div>
                </div>
                <div className="next_time">
                    <div className="time">
                        <p>15.00</p>
                    </div>
                    <div className="icon"></div>
                    <div className="temperature">
                        <p>14˚C</p>
                    </div>
                </div>
                <div className="next_time">
                    <div className="time">
                        <p>18.00</p>
                    </div>
                    <div className="icon"></div>
                    <div className="temperature">
                        <p>14˚C</p>
                    </div>
                </div>
                <div className="next_time">
                    <div className="time">
                        <p>21.00</p>
                    </div>
                    <div className="icon"></div>
                    <div className="temperature">
                        <p>14˚C</p>
                    </div>
                </div>
                <div className="next_time">
                    <div className="time">
                        <p>00.00</p>
                    </div>
                    <div className="icon"></div>
                    <div className="temperature">
                        <p>14˚C</p>
                    </div>
                </div>
                <div className="next_time">
                    <div className="time">
                        <p>03.00</p>
                    </div>
                    <div className="icon"></div>
                    <div className="temperature">
                        <p>14˚C</p>
                    </div>
                </div>

            </div>
        </div>
    )
}




export default Weather