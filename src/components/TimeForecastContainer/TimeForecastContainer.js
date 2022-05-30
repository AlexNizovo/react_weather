import React from "react";
import '../../pages/weather/styless.css'
import { TimeForecastComponent } from "../timeForecastComponent/TimeForecastComponent";





function TimeForecastContainer (props) {

  const { data } = props;

  const renderTimeForecastComponent = () => {
    return data.map((item, index) => {
      if (index > 5) return null
      return (
        <TimeForecastComponent key={item.dt_txt} time={item.dt_txt} icon={item.weather.icon} temperature={item.main.temp.toFixed()} />
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

