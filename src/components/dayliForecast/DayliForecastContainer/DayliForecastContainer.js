import React from "react";
import { DayliForecastComponent } from "../DayliForecastComponent/DayliForecastComponent";
import '../../../pages/weather/styless.css'




function DayliForecastContainer (props) {


const {day} = props


// function averageTemperature () {
  
//   let obj = {};
//   for (let index = 0; index < day.length; index++) {
//     let d = new Date(day[index].dt_txt)
//     let keys = index
//     let values = d.getHours(day[index].dt_txt)
//     if(values == 12)
//     obj[keys] = day[index]
    
//   }
//   console.log(obj)
// }

// averageTemperature()


let days = []
for (let index = 0; index < day.length; index++) {
  let d = new Date(day[index].dt_txt)
  if(d.getHours(day[index].dt_txt) == 12)
  days.push(day[index])
}
console.log(days)



const renderDayliForecastComponent = () => {
  
    return days.map(item => {
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