import React from "react";
import { DayliForecastComponent } from "../DayliForecastComponent/DayliForecastComponent";
import '../../../pages/weather/styless.css'



function DayliForecastContainer (props) {


const {day} = props;
console.log(day)


const renderDayliForecastComponent = () => {
    return day.map((item) => {

      return (

        <DayliForecastComponent data={item.dt_txt}/>
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