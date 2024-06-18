import React from 'react'
import { nanoid } from 'nanoid'

import housesForSale from './data/housesForSale'
import HouseCard from './components/HouseCard'

import './index.css'

export default function App() {
	const houseCards = housesForSale.map((houseData, index, array) => {
		return (
			<HouseCard
				key={houseData.id}
				houseData={houseData}
				index={index}
				array={array}
				//

				houseGeneral={{
					price: houseData.price,
					location: houseData.location,
					squareFeet: houseData.squareFeet,
					acres: houseData.acres,
					yearBuilt: houseData.yearBuilt,
				}}
				houseRooms={{
					bedrooms: houseData.bedrooms,
					bathrooms: houseData.bathrooms,
					otherRooms: houseData.otherRooms,
				}}
				houseAdditional={{
					airConditioning: houseData.airConditioning,
					heating: houseData.heating,
					garage: houseData.garage,
					haunted: houseData.haunted,
				}}
			/>
		)
	})

	return (
		<div className="wrapper">
			<header>
				<img className="logo" src="./src/assets/logo.png" />
			</header>
			<div className="house-cards-container">{houseCards}</div>
		</div>
	)
}
