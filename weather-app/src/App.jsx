import { useState, useEffect } from 'react'
import weatherData from './weatherData'
import Weather from './components/Weather'

export default function App() {
	const [currentWeather, setCurrentWeather] = useState(weatherData[0])

	function cycleWeatherData() {
		setCurrentWeather(prevWeather => {
			const currentIndex = weatherData.findIndex(weather => weather.id === prevWeather.id)
			const nextIndex = (currentIndex + 1) % weatherData.length
			return weatherData[nextIndex]
		})
	}

	const getWeahterDataForDay = day => {
		switch (day) {
			case 1:
				return weatherData[0] //monday
			case 2:
				return weatherData[1] // tuesday
			case 3:
				return weatherData[2] // wednesday
			default:
				return weatherData[0] // back to monady
		}
	}

	useEffect(() => {
		const today = new Date().getDay()
		setCurrentWeather(getWeahterDataForDay(today))
	}, [])

	return (
		<div className={` app-container ${currentWeather.backgroundClass}`}>
			<Weather currentWeather={currentWeather} />
			<button onClick={cycleWeatherData}>Test</button>
		</div>
	)
}
