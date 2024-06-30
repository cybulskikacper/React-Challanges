import React from 'react'
import { nanoid } from 'nanoid'

export default function PosterSection({ date, festivalData }) {
	const bandsForTheDay = festivalData.filter(band => band.date === date)

	const sortedBandsForTheDay = bandsForTheDay.sort((a, b) => a.importance - b.importance)

	const getClassName = importance => {
		switch (importance) {
			case 1:
				return 'giant'
			case 2:
				return 'big'
			case 3:
				return 'medium'
			case 4:
				return 'small'
			default:
				return ''
		}
	}

	return (
		<div className="lineup-container">
			<div className="day-container">
				<h3>{date}</h3>
			</div>

			{sortedBandsForTheDay.map(band => (
				<p key={nanoid()} className={getClassName(band.importance)}>
					{band.name}
				</p>
			))}
		</div>
	)
}
/*Challenge

		
		4. If you complete these tasks correctly, you should only see bands playing on July 1 in 
		   the July 1 section, with the most important ones in a large font size on the top and the less important ones in smaller font sizes below. The same for July 2 and 3. A footer should also automatically appear at the bottom of the page. 
		
		   
 */
