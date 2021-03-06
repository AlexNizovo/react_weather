import React from "react";
import '../../pages/weather/styless.css'
import { TimeForecastComponent } from "../timeForecastComponent/TimeForecastComponent";
import { useSelector } from "react-redux";





function TimeForecastContainer () {

  const data  = useSelector((state) => state.weatherReducer.timeReducer)

  const renderTimeForecastComponent = () => {
    return data.data.list.map((item, index) => {
      if (index > 5) return null
      return (
        <TimeForecastComponent 
          key={item.dt_txt} 
          time={item.dt_txt} 
          icon={item.weather[0].icon} 
          temperature={item.main.temp.toFixed()} 
          description={item.weather[0].description}
        />
      )
    })
  }

    return(
        <div className="conteiner_3">
            {renderTimeForecastComponent()}
        </div>
    )
}


export default TimeForecastContainer

