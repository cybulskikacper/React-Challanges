export default function Weather({ currentWeather }) {
	const { highTemp, lowTemp, condition, day, icon } = currentWeather

	return (
		<div className="weather-container">
			<div className="icon">{icon}</div>
			<div className="condition-text">{condition}</div>
			<div className="temp-range-container">
				<div className="low-temp-container">
					<p className="low-temp-data">{lowTemp}</p>
					<p>Low</p>
				</div>
				<div className="high-temp-container">
					<p className="high-temp-data">{highTemp}</p>
					<p>High</p>
				</div>
			</div>
			<div className="day">{day}</div>
		</div>
	)
}
