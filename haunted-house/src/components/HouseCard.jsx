import React from 'react'
import housesForSale from '../data/housesForSale'

export default function HouseCard({ houseData, index, array, houseGeneral, houseRooms, houseAdditional }) {
	const { price, location, squareFeet, acres, yearBuilt } = houseGeneral
	const { bedrooms, bathrooms, otherRooms, garage } = houseRooms
	const { airConditioning, heating, haunted } = houseAdditional

	return (
		<div className="house-card" key={houseData.id}>
			<p>
				Listing {index + 1} of {array.length}
			</p>
			<img src={houseData.image} />
			<div>
				<ul>
					<li>
						<span>Price:</span>
						{price}
					</li>
					<li>
						<span>Location:</span>
						{location}
					</li>
					<li>
						<span>Square Feet:</span>
						{squareFeet}
					</li>
					<li>
						<span>Acres:</span>
						{acres}
					</li>
					<li>
						<span>Year Built:</span>
						{yearBuilt}
					</li>
					<li>
						<span>Bedrooms:</span>
						{bedrooms}
					</li>
					<li>
						<span>Bathrooms:</span>
						{bathrooms}
					</li>
					<li>
						<span>Other Rooms:</span>
						{otherRooms}
					</li>
					<li>
						<span>Garage:</span>
						{garage ? 'Yes' : 'No'}
					</li>
					<li>
						<span>Air Conditioning:</span>
						{airConditioning ? 'Yes' : 'No'}
					</li>
					<li>
						<span>Heating:</span>
						{heating ? 'Yes' : 'No'}
					</li>
					<li>
						<span>Haunted:</span>
						{haunted ? 'Yes' : 'No'}
					</li>
				</ul>
			</div>
		</div>
	)
}
