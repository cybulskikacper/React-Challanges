import { useState } from 'react'

import Enemy from './components/Enemy'
import Button from './components/Button'
import runGame from './utilities/runGame'
import initialEnemyData from './data/initialEnemyData'
import { nanoid } from 'nanoid'

export default function App() {
	const [gameRunning, setGameRunning] = useState(false)
	const [enemiesData, setEnemiesData] = useState(initialEnemyData)

	runGame(gameRunning, setEnemiesData)

	const enemies = enemiesData.map(enemy => (
		<Enemy
			key={nanoid()}
			orientation={enemy.orientation}
			position={enemy.position}
			currentImage={gameRunning ? enemy.currentImage : enemy.altImage}
		/>
	))

	return (
		<div className="wrapper">
			<div className="meadow-container">
				<div className="castle-container">{enemies}</div>
			</div>

			<Button stateProps={{ gameRunning, setGameRunning }} />
		</div>
	)
}
