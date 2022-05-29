import d01 from './01d.png'
import n01 from './01n.png'

const weatherIcons = {
	'01d': d01,
	'01n': n01,
}

export function getWeatherIcon(iconName) {
	return weatherIcons[iconName]
}