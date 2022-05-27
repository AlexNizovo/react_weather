import React from "react";
import '../pages/weather/styless.css'


function CurrentData () {




    return (
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
    )
}

export default CurrentData