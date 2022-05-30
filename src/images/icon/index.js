import d01 from './01d.png'
import n01 from './01n.png'
import d02 from './02d.png'
import n02 from './02n.png'
import d03 from './03d.png'
import d04 from './04d.png'
import d09 from './09d.png'
import d10 from './10d.png'
import n10 from './10n.png'
import d11 from './11d.png'
import n11 from './11n.png'
import d13 from './13d.png'
import d50 from './50d.png'



const weatherIcons = {
	'01d' : d01,
	'01n' : n01,
    '02d' : d02,
    '02n' : n02,
    '03d' : d03,
    '04d' : d04,
    '09d' : d09,
    '10d' : d10,
    '10n' : n10,
    '11d' : d11,
    '11n' : n11,
    '13d' : d13,
    '50d' : d50
}

export function getWeatherIcon(iconName) {
	return weatherIcons[iconName]
} 