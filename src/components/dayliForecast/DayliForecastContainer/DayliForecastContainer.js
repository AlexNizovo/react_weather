import React from "react";
import { DayliForecastComponent } from "../DayliForecastComponent/DayliForecastComponent";
import '../../../pages/weather/styless.css'




function DayliForecastContainer (props) {


const {day} = props


let date = new Date()
let hours = date.getHours()
console.log(hours)
let periods = (8 - Math.floor(hours/3))
console.log(periods)
console.log(day[periods+5])

const renderDayliForecastComponent = () => {

    return day.map((item, index) => {
      if (index > 5) return null
      return (
        <DayliForecastComponent 
          key={item.dt}
          data={item.dt_txt}
          icon ={item.weather[0].icon}
          temperature={item.main.temp.toFixed()}
          humidity={item.main.humidity}
          wind={item.wind.speed.toFixed(1)}
          pressure={item.main.pressure}
          description={item.weather[0].description}
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