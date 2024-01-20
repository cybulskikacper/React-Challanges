import React from 'react'
import noCharacter from './utilities/noCharacter'
import Character from './components/Character'
import StatusBars from './components/StatusBars'
import Options from './components/Options'
import Button from './components/Button'
import attackOptionsList from '../data/attackOptionsList'
import nameList from '../data/namesList'

import { useState } from 'react'

function App() {
	const [characterData, setCharacterData] = useState({
		hat: true,
		shield: true,
		weapon: 'sword',
		name: 'Kylie',
		attackOptions: ['Fireball', 'Thunder Strike', 'Ice Shard', 'Earthquake', 'Wind Slash', 'Lightning Bolt'],
		stats: {
			hp: 100,
			mp: 50,
			strength: 50,
		},
	})

	/* Your task: 

           You should see your character with the property values you specified appear on the 
           screen when you run your code. You should test your code by manually changing some of the characterData property values and seeing if you get the correct results. You should also click the "Toggle" button, which will randomly change the values by using the state setting function!  
    */

	let dataToUse, functionToUse

	try {
		if (characterData) {
			dataToUse = characterData
		}
	} catch {
		dataToUse = noCharacter.noData
	}

	try {
		if (setCharacterData) {
			functionToUse = setCharacterData
		}
	} catch {
		functionToUse = noCharacter.noFunction
	}

	return (
		<div className="wrapper">
			<StatusBars characterData={dataToUse} />

			<Character characterData={dataToUse} />

			<Options characterData={dataToUse} />

			<Button setCharacterData={functionToUse} />
		</div>
	)
}

export default App
