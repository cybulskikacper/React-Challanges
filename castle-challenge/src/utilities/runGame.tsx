import { useEffect } from 'react'

export default function runGame(
	gameRunning: unknown,
	setEnemiesData: {
		(
			value: React.SetStateAction<
				{
					id: string
					currentImage: string
					altImage: string
					orientation: string
					position: { top: number; left: number }
				}[]
			>
		): void
		(arg0: (prevPositions: any) => any): void
	}
) {
	useEffect(() => {
		let interval: number | undefined
		if (gameRunning) {
			interval = setInterval(() => {
				setEnemiesData((prevPositions: any[]) => {
					return prevPositions.map(
						(enemy: {
							currentImage: any
							altImage: any
							position: { top: number; left: number }
							orientation: string
						}) => {
							let nextOrientation
							let nextPosition
							let nextCurrentImage = enemy.currentImage
							let nextAltImage = enemy.altImage
							let leftBoundary = enemy.position.top === 165 ? 37 : 112
							let rightBoundary = enemy.position.top === 165 ? 292 : 202

							if (enemy.position.left > leftBoundary && enemy.orientation === 'left') {
								nextOrientation = 'left'
								nextPosition = enemy.position.left - 1
							} else if (enemy.position.left === leftBoundary && enemy.orientation === 'left') {
								nextOrientation = 'right'
								nextPosition = enemy.position.left - 1
							} else if (enemy.position.left < rightBoundary && enemy.orientation === 'right') {
								nextOrientation = 'right'
								nextPosition = enemy.position.left + 1
							} else if (enemy.position.left === rightBoundary && enemy.orientation === 'right') {
								nextOrientation = 'left'
								nextPosition = enemy.position.left - 1
							}

							if (enemy.position.left % 10 === 0) {
								nextCurrentImage = enemy.altImage
								nextAltImage = enemy.currentImage
							}

							return {
								...enemy,
								orientation: nextOrientation,
								currentImage: nextCurrentImage,
								altImage: nextAltImage,
								position: { ...enemy.position, left: nextPosition },
							}
						}
					)
				})
			}, 20)
		}
		return () => clearInterval(interval)
	}, [gameRunning])
}
