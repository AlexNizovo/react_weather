import React  from "react";
import { useSelector } from "react-redux";
import { DayliForecastComponent } from "../DayliForecastComponent/DayliForecastComponent";
import '../../../pages/weather/styless.css'




function DayliForecastContainer () {

const days = useSelector((state) => state.weatherReducer.dailyReducer.data)

const renderDayliForecastComponent = () => {
  
    return days.map(item => {
      const d2 = new Date(item.dt_txt)
      let month
      switch (d2.getMonth(item.dt_txt)) {
        case 0: month = "января"
        break;
        case 1: month = "февраля"
        break;
        case 2: month ="марта"
        break;
        case 3: month ="апреля"
        break;
        case 4: month ="мая"
        break;
        case 5: month ="июня"
        break;
        case 6: month ="июля"
        break;
        case 7: month ="августа"
        break;
        case 8: month ="сентября"
        break;
        case 9: month ="октября"
        break;
        case 10: month ="ноября"
        break;
        case 11: month ="декабря"
        break;
        default: d2.getMonth(item.dt_txt)
          break;
      }
      return (
        <DayliForecastComponent 
          key={item.dt}
          data={d2.getDate(item.dt_txt) + ' ' + month}
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
          {
            renderDayliForecastComponent()
          }
        </div>
    )
}


export default DayliForecastContainer