import React from "react";
import '../../pages/weather/styless.css'
import {getWeatherIcon} from "../../images/icon";

export function TimeForecastComponent(props) {

	const { time, icon, temperature, description } = props;
	
	return (
		<div className="next_time">
			<div className="time">
				<p>{time.slice(11,16)}</p>
			</div>
			<div className="icon">
				<img src={getWeatherIcon(icon)}/>
			</div>
			<div className="temperature">
				<p>{temperature} ˚C</p>
			</div>
			<div>
                <p className="description">{description}</p>
            </div>
		</div>
	)
} 