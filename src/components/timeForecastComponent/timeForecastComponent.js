import React from "react";
import '../../pages/weather/styless.css'
import {getWeatherIcon} from "../../images/icon";

export function TimeForecastComponent(props) {

	const { time, icon, temperature } = props;

	return (
		<div className="next_time">
			<div className="time">
				<p>{time.slice(10)}</p>
			</div>
			<div className="icon">
				<img src={getWeatherIcon('01d')}/>
			</div>
			<div className="temperature">
				<p>{temperature} ˚C</p>
			</div>
		</div>
	)
}