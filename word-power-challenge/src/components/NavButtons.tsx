import Button from './Button'

import { ReactNode } from 'react'

export default function NavButtons(props: {
	wordsDataArray: ReactNode
	currentWord: ReactNode
	setCurrentWord: ReactNode
	position: ReactNode
}) {
	const { wordsDataArray, currentWord, setCurrentWord, position } = props.data

	function changeWord(currentIndex: number, direction: string, position: string) {
		let nextIndex

		if (direction === 'forward') {
			nextIndex = currentIndex === wordsDataArray.length - 1 ? 0 : currentIndex + 1
		} else {
			nextIndex = currentIndex === 0 ? wordsDataArray.length - 1 : currentIndex - 1
		}
		setCurrentWord(wordsDataArray[nextIndex])

		position === 'bottom' &&
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
	}

	return (
		<div className="two-buttons-container">
			<Button
				type="backward"
				clickHandler={() => changeWord(wordsDataArray.indexOf(currentWord), 'backward', position)}
			/>

			<Button
				type="forward"
				clickHandler={() => changeWord(wordsDataArray.indexOf(currentWord), 'forward', position)}
			/>
		</div>
	)
}
