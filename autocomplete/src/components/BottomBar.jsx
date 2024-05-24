import React from 'react'

export default function BottomBar() {
	return (
		<footer className="bottom-bar-container">
			<img className="icon" src="./src/assets/reminder.svg" />
			<img className="icon" src="./src/assets/add-collaborator.svg" />
			<img className="icon" src="./src/assets/palette.svg" />
			<img className="icon" src="./src/assets/add-image.svg" />
			<img className="icon" src="./src/assets/more.svg" />
			<div>
				<img className="icon" src="./src/assets/undo.svg" />
				<img className="icon" src="./src/assets/redo.svg" />
			</div>
		</footer>
	)
}
