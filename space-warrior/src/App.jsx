import React from 'react'
import useSound from 'use-sound'
import PlayArea from './components/PlayArea'
import ScoreBoard from './components/ScoreBoard'

export default function App() {
	const STARTING_TIME = 60
	const STARTING_SCORE = 0
	const [timerRunning, setTimerRunning] = React.useState(false)
	const [timeLeft, setTimeLeft] = React.useState(STARTING_TIME)
	const [buttonClass, setButtonClass] = React.useState('play-button fade-in')
	const [buttonDisabled, setButtonDisabled] = React.useState(false)
	const [score, setScore] = React.useState(STARTING_SCORE)

	const [playSong] = useSound('../audio/song.mp3')
	const [playClick] = useSound('../audio/click.mp3', { volume: 0.45 })

	React.useEffect(() => {
		let timer

		if (timerRunning && timeLeft > 0) {
			timer = setInterval(() => {
				setTimeLeft(prevTime => prevTime - 1)
			}, 1000)
		} else if (timeLeft === 0) {
			setTimerRunning(false)
			setButtonClass('play-button fade-in')
			setButtonDisabled(false)
		}

		return () => clearInterval(timer)
	}, [timerRunning, timeLeft])

	function handleClick() {
		setTimeLeft(STARTING_TIME)
		setScore(STARTING_SCORE)

		setTimerRunning(true)
		setButtonClass('play-button fade-out')
		setButtonDisabled(true)
		playSong()
		playClick()
	}

	return (
		<div>
			<ScoreBoard data={{ score, timeLeft }} />
			<PlayArea playProps={{ timeLeft, timerRunning, setScore }} />
			<button onClick={handleClick} disabled={buttonDisabled} className={buttonClass}>
				Play
			</button>
		</div>
	)
}
