import React from "react";
import '../../pages/weather/styless.css'
import {TimeForecastComponent} from "../timeForecastComponent/timeForecastComponent";



function TimeForecastContainer (props) {

  const { data } = props;

  const renderTimeForecastComponent = () => {
    return data.map((item, index) => {
      if (index > 5) return null
      return (
        <TimeForecastComponent time={item.dt_txt} icon={''} temperature={item.main.temp} />
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

