type childrenProps = {
	stateProps: {
		gameRunning: boolean
		setGameRunning: React.Dispatch<React.SetStateAction<boolean>>
	}
}

export default function Button({ stateProps }: childrenProps) {
	return (
		<div className="button-container">
			<button onClick={() => stateProps.setGameRunning(!stateProps.gameRunning)}>
				{stateProps.gameRunning ? 'Pause' : 'Play'}
			</button>
		</div>
	)
}
