import React from "react";
import { DayliForecastComponent } from "../DayliForecastComponent/DayliForecastComponent";
import '../../../pages/weather/styless.css'



function DayliForecastContainer (props) {


const {day} = props


const renderDayliForecastComponent = () => {

    return day.map((item, index) => {
      if (index > 5) return null
      return (
        <DayliForecastComponent 
          key={item.dt_txt}
          data={item.dt_txt}
          temperature={item.main.temp.toFixed()}
          temperatureNight={item.sys=='n' && item.main.temp}
          humidity={item.main.humidity}
          wind={item.wind.speed.toFixed(1)}
          pressure={item.main.pressure}
          />
          
      )
    })
  }

  


    return (
        <div className="conteiner_2">
          {renderDayliForecastComponent()}
        </div>
    )
}


export default DayliForecastContainer