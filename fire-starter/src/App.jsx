import React, { useEffect } from 'react'

import Fire from './components/Fire'
import Torch from './components/Torch'

import runBackgroundEffects from '/utilities/runBackgroundEffects'

export default function App() {
	const [torchEquipped, setTorchEquipped] = React.useState()
	const [woodKindling, setWoodKindling] = React.useState(false)
	const [woodOnFire, setWoodOnFire] = React.useState(false)

	/*----- ❌ ⬇️ Code you don't have to worry about! ❌ ⬇️️ ️----------- */
	const [cursorPosition, setCursorPosition] = React.useState({ x: null, y: null })
	const kindleClass = woodKindling && !woodOnFire && 'kindle'

	runBackgroundEffects(torchEquipped, woodOnFire, setWoodKindling, setWoodOnFire, setCursorPosition)

	let torchStyle = {
		position: 'absolute',
		left: cursorPosition.x - 10,
		top: cursorPosition.y - 60,
	}
	/*----------------------------------------------------------------- */

	/* Challenge:

	The user needs to be able to pick up the torch and use it to light the wood on fire! Your task is to allow them to do as follows:  

      2. The torchEquipped state should be set to false whenever the user's mouse button is up and 
         their cursor is anywhere inside the "wrapper" div (line 54).
      
      3. The woodKindling state should be set to true when *all* of the following conditions 
         are met: 
          - torchEquipped is true 
          - the user's cursor has entered the "wood-container" div (line 64)
        
      4. The woodOnFire state should be set to true when *all* of the following conditions are met:
          - torchEquipped is true
          - woodKindling is true
          - the user's cursor has left the "wood-container" div (line 64) 
  */

	return (
		<div onMouseUp={() => setTorchEquipped(false)} className={`wrapper ${torchEquipped && 'relative no-cursor'}`}>
			<div className={`game-area ${!torchEquipped && 'relative'}`}>
				<div
					className={`torch-container ${torchEquipped && 'torch-equipped'}`}
					style={torchEquipped ? torchStyle : null}
					onMouseDown={() => setTorchEquipped(true)}>
					<Torch />
				</div>

				<div className={`wood-container ${kindleClass}`}>
					🪵
					<Fire woodOnFire={woodOnFire} />
				</div>
			</div>
		</div>
	)
}
