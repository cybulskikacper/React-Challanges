import React from 'react'

export default function SoundButtons({ clickHandlers }) {
	return (
		<div className="start-and-select-buttons-container">
			<div className="select-button">
				<button onClick={clickHandlers.turnOffSound}></button>
				<span>Select</span>
				<img src="./src/assets/images/icons/sound-off.svg" />
			</div>

			<div className="start-button">
				<button onClick={clickHandlers.turnOnSound}></button>
				<span>Start</span>
				<img src="./src/assets/images/icons/sound-on.svg" />
			</div>
		</div>
	)
}
