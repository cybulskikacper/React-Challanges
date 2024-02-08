import React from 'react'

import TopSection from '../components/TopSection'

import BottomSection from '../components/BottomSection'

export default function App() {
	const [playerName, setPlayerName] = React.useState('')
	const [submitted, setSubmitted] = React.useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setSubmitted(true)
		setPlayerName(prevName => prevName.trim() + ' The Magnificent!')
	}

	function handleInputChange(e) {
		setPlayerName(e.target.value)
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<TopSection submitted={submitted} />

			{/*-----Your input below!----------*/}

			<input
				className="name-input"
				type="text"
				maxLength={16}
				placeholder="Enter Your Character's Name"
				required
				disabled={submitted}
				value={playerName}
				onChange={handleInputChange}
			/>

			{/*-----Your input above!----------*/}

			<BottomSection submitted={submitted} playerName={playerName} />
		</form>
	)
}
