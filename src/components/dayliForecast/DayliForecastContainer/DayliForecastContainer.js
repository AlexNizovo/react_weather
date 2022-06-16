import React from "react";
import { DayliForecastComponent } from "../DayliForecastComponent/DayliForecastComponent";
import '../../../pages/weather/styless.css'




function DayliForecastContainer (props) {


const {day} = props


let date = new Date()
let hours = date.getHours()
console.log(hours)
let periods = (8 - Math.floor(hours/3))
let n =[]

console.log(periods)

for( let i = 1; i< 5; i++){
  switch(periods) {
  case 0: n.push(day[periods+4]); break;
  case 1: n.push(day[periods+5]); break;
  case 2: n.push(day[periods+6]); break;
  case 3: n.push(day[periods+7]); break;
  case 4: n.push(day[periods+8]); break;
  case 5: n.push(day[periods+9]); break;
  case 6: n.push(day[periods+10]); break;
  case 7: n.push(day[periods+11]); break;
  case 8: n.push(day[periods+12]); break; 
}
  periods+=10
  n.push(day[periods])
}
console.log(n)
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