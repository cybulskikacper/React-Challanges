import React from 'react'
import housesForSale from '../data/housesForSale'

export default function HouseCard({ houseData, index, array, houseGeneral, houseRooms, houseAdditional }) {
	const { price, location, squareFeet, acres, yearBuilt } = houseGeneral
	const { bedrooms, bathrooms, otherRooms } = houseRooms
	const { airConditioning, heating, garage, haunted } = houseAdditional

	return (
		<div className="house-card" key={houseData.id}>
			<p>
				Listing {index + 1} of {array.length}
			</p>
			<img src={houseData.image} />
			<div>
				<ul>
					{Object.entries(houseGeneral).map(([key, value]) => (
						<li key={key}>
							<span>{key}:</span> {value}
						</li>
					))}

					{Object.entries(houseRooms).map(([key, value]) => (
						<li key={key}>
							<span>{key}:</span> {value}
						</li>
					))}

					{Object.entries(houseAdditional).map(([key, value]) => (
						<li key={key}>
							<span>{key}:</span> {value ? 'Yes' : 'No'}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
