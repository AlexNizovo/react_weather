import React from "react";
import { DayliForecastComponent } from "../DayliForecastComponent/DayliForecastComponent";
import '../../../pages/weather/styless.css'




function DayliForecastContainer (props) {


const {day} = props


function averageTemperature () {
  let average = 0
  for (let index = 0; index < day.length; index++) {
    average += day[index].main.temp
  }
  average = average / day.length
  console.log(average.toFixed(2))
}

averageTemperature()

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