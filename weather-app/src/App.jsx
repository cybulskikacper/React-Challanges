import { useState, useEffect } from 'react'

export default function App() {
	const weatherData = [
		{
			id: 0,
			day: 'Monday',
			condition: 'Sunny',
			lowTemp: 20,
			highTemp: 38,
			icon: '☀️',
			backgroundClass: 'sunny-background',
		},
		{
			id: 1,
			day: 'Tuesday',
			condition: 'Rainy',
			lowTemp: 8,
			highTemp: 15,
			icon: '🌧️',
			backgroundClass: 'rainy-background',
		},
		{
			id: 2,
			day: 'Wednesday',
			condition: 'Snowy',
			lowTemp: -5,
			highTemp: 3,
			icon: '❄️',
			backgroundClass: 'snowy-background',
		},
	]

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

	const [currentWeather, setCurrentWeather] = useState(weatherData[0])

	function cycleWeatherData() {
		setCurrentWeather(prevWeather => {
			const currentIndex = weatherData.findIndex(weather => weather.id === prevWeather.id)
			const nextIndex = (currentIndex + 1) % weatherData.length
			return weatherData[nextIndex]
		})
	}

	useEffect(() => {
		const today = new Date().getDay()
		setCurrentWeather(getWeahterDataForDay(today))
	}, [])

	return (
		<div className={` app-container ${currentWeather.backgroundClass}`}>
			<div className="weather-container">
				<div className="icon">{currentWeather.icon}</div>
				<div className="condition-text">{currentWeather.condition}</div>
				<div className="temp-range-container">
					<div className="low-temp-container">
						<p className="low-temp-data">{currentWeather.lowTemp}</p>
						<p>Low</p>
					</div>
					<div className="high-temp-container">
						<p className="high-temp-data">{currentWeather.highTemp}</p>
						<p>High</p>
					</div>
				</div>
				<div className="day">{currentWeather.day}</div>
			</div>
			<button onClick={cycleWeatherData}>Test</button>
		</div>
	)
}

/* Challenge


    
    2. When you click on the test button, the app should show all of the correct items listed above 
       for the next day in the weatherData array, cycling through the pattern: Monday -> Tuesday -> Wednesday -> Monday, etc. 
    
    3. The weatherData array can be moved, but it should not be otherwise modified. 
       
    4. The code should be modular and well-organized. 
*/
