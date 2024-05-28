import React from 'react'
import Header from './components/Header'
import FrontMessage from './components/FrontMessage'
import InnerMessage from './components/InnerMessage'

export default function App() {
	const [cardData, setCardData] = React.useState({
		cardOpen: false,
		MouseButtonDown: false,
		initialPostion: undefined,
	})

	function handleMouseDown(e) {
		setCardData({
			MouseButtonDown: true,
			cardOpen: false,
			initialPostion: e.clientX,
		})
	}

	function handleMouseUp(e) {
		setCardData(prev => ({
			...prev,
			MouseButtonDown: false,
		}))
	}

	function handleMouseMove(e) {
		if (cardData.MouseButtonDown && !cardData.cardOpen) {
			if (cardData.initialPostion - e.clientX >= 50) {
				setCardData(prev => ({ ...prev, cardOpen: true }))
			}
		}
	}

	console.log(cardData)

	return (
		<div className="wrapper">
			<Header />
			<div className="card">
				<InnerMessage />

				<div
					onMouseUp={handleMouseUp}
					onMouseMove={handleMouseMove}
					onMouseDown={handleMouseDown}
					className={`cover ${cardData.cardOpen && 'open'}`}>
					<FrontMessage />
					<img src="./src/assets/forLoop.png" />
				</div>
			</div>
		</div>
	)
}

/* Challenge

	The card opens and closes when the user clicks on the cover, but the card company wants a more sophisticated way of controlling it — one that simulates a finger swipe with the user's mouse. Your task is to set one up as follows:
		
		1. The "open" class should be applied to the div with the className of "cover" on line 34 
		   if and only if all of the following conditions are met: 
		   	
			   - The user is holding down their mouse button somewhere inside the "cover" div.
			   
    		   - While continuing to hold the mouse button, they move their cursor 50 pixels to the 
			     left of where they started holding it down. 
		
		2. If the user then presses their mouse down on the "cover" div when it is open, the "open" 
		   class should be removed, thus closing the card. 
		   
	Note: You will have to replace or modify the cardOpen state, the onClick event handler on line 35, and the way the "open" class is currently being applied on line 36. 
*/
