import { nanoid } from 'nanoid'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

export default function Word(props: {
	word: any
	pronunciation: any
	definition: any
	icon: any
	category: any
	note: any
	partOfSpeech: any
	example: any
	synonyms: any
	antonyms: any
	etymology: any
	array: any
}) {
	const {
		word,
		pronunciation,
		definition,
		icon,
		category,
		note,
		partOfSpeech,
		example,
		synonyms,
		antonyms,
		etymology,
		array,
	} = props

	const definitionElement = definition.map(
		(
			sense:
				| string
				| number
				| boolean
				| ReactElement<any, string | JSXElementConstructor<any>>
				| Iterable<ReactNode>
				| ReactPortal
				| null
				| undefined,
			index: number,
			array: string | any[]
		) => {
			const senseNum = array.length > 1 ? `${index + 1}. ` : ''
			const className = array.length <= 2 && index === 0 ? 'add-top-margin' : ''

			return (
				<p className={className} key={nanoid()}>
					{senseNum}
					{sense}
				</p>
			)
		}
	)

	const number = array.indexOf(array.find((el: { word: any }) => el.word === word)) + 1

	return (
		<div className="word-container">
			<div className="number el-container">
				<span>
					{' '}
					word {number} of {array.length}{' '}
				</span>
			</div>
			<div className="word el-container">{word}</div>
			<div className="pronounciation el-container">
				<img src="./src/assets/speech.svg" />
				{pronunciation}
			</div>
			<div className="definition el-container">
				<span>Definition</span>
				{definitionElement}
			</div>
			<div className="example el-container">
				<span>Example</span>
				{example}
			</div>
			<div className="icon el-container">{icon}</div>
			<div className="category el-container">
				<span>Category</span>
				<p>{category}</p>
			</div>
			<div className="note el-container">
				<span>Note</span>
				{note}
			</div>
			<div className="part-of-speech el-container">{partOfSpeech}</div>
			<div className="synonyms el-container">
				<span>Synonyms</span>
				<p>{synonyms.join(', ')}</p>
			</div>
			<div className="antonyms el-container">
				<span>Antonyms</span>
				<p>{antonyms.join(', ')}</p>
			</div>
			<div className="etymology el-container">
				<span>Etymology</span>
				{etymology}
			</div>
		</div>
	)
}
