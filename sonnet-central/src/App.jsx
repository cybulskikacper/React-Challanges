import React from 'react'
import sonnetsData from './data/sonnetsData'
import Header from './components/Header'
import { nanoid } from 'nanoid'

export default function App() {
	const inputRef = React.useRef()
	const [searchInput, setSearchInput] = React.useState('')

	function handleClick() {
		const input = inputRef.current.value.trim()
		setSearchInput(input)
	}

	const filteredSonnets = searchInput
		? sonnetsData.filter(sonnet => sonnet.lines.some(line => line.toLowerCase().includes(searchInput.toLowerCase())))
		: []

	const highlightSearchTerm = line => {
		if (!searchInput) return line

		const regex = new RegExp(`(${searchInput})`, 'gi')
		return line.split(regex).map((part, index) => (regex.test(part) ? <mark key={index}>{part}</mark> : part))
	}

	return (
		<div className="wrapper">
			<Header searchProps={{ inputRef, handleClick }} />

			<div className="sonnets-container">
				{searchInput === '' ? (
					''
				) : filteredSonnets.length === 0 ? (
					<p>Alas, thy search hath yielded no results</p>
				) : (
					filteredSonnets.map(sonnet => (
						<div key={nanoid()} className="sonnet">
							<h2>{sonnet.title}</h2>
							<h3>{sonnet.number}</h3>
							{sonnet.lines.map((line, index) => (
								<p key={index}>{highlightSearchTerm(line)}</p>
							))}
						</div>
					))
				)}
			</div>
		</div>
	)
}
