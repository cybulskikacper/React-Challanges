import React from 'react'
import Header from './components/Header'
import File from './components/File'
import Footer from './components/Footer'
import generateMessage from './utilities/generateMessage'
import { nanoid } from 'nanoid'
import { detect } from 'detect-browser'

console.log(detect)

async function fetchUsersLocation() {
	const response = await fetch('https://ipapi.co/json/')
	if (!response.ok) {
		throw new Error('Failed to fetch user location')
	}
	return await response.json()
}

export default function App() {
	const [userData, setUserData] = React.useState({
		userId: nanoid(),
		downloadRequested: false,
		downloadTimeStamp: undefined,
		requestedFileId: undefined,
		browser: undefined,
		location: { ip: undefined, city: undefined, country: undefined },
	})

	const [buttonDisabled, setButtonDisabled] = React.useState(false)

	if (userData.downloadRequested) {
		generateMessage(userData)
	}

	React.useEffect(() => {
		if (userData.downloadRequested) {
			throw Error('The userID changed :-(')
		}
	}, [userData.userId])

	/* Challenge
      	1. When the user clicks the "Download" button on line 82 below, the button should become 
		   disabled, and the userData state should be updated as follows: 
		   
           	        Property		 	  Value(s)					  
			     ╷---------------------╷-----------------------------------------------------------╷
			     |  userId             |  preserve the userId value of the previous userData state |
			     |---------------------|-----------------------------------------------------------|
		  	     |  downloadRequested  |  true                               					   |
			     |---------------------|-----------------------------------------------------------|
			     |  downloadTimeStamp  |  a new Date object, converted to localeString             |
			     |---------------------|-----------------------------------------------------------|
			 	 |  requestedFileId    |  the file ID stored as data in the download button        |
                 |---------------------|-----------------------------------------------------------|
			     |  browser            |  the return value of the detect function (already 		   |
				 |					   |  imported into this file)								   |
                 |---------------------|-----------------------------------------------------------|
			     |  location  		   |  an object with the following properties:			       |
			     |					   |     - ip: the user's IP address					       |
				 |					   |	 - city: the user's city name						   |
				 |					   |	 - country: the name of the user's country			   |
                 |                     |       													   |
			     ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	
	 	2. Aside from the above, nothing needs to be changed or added anywhere else in the code. If 
		   you complete these tasks successfully, you should see a correctly rendered message in the console, and the button should become faded and unclickable after you click it. 
*/

	async function handleClick() {
		setButtonDisabled(true)
		try {
			const location = await fetchUsersLocation()
			setUserData(prevData => ({
				...prevData,
				downloadRequested: true,
				downloadTimeStamp: new Date().toLocaleString(),
				requestedFileId: document.querySelector('.download-button').getAttribute('data-file-id'),
				browser: detect(),
				location: {
					ip: location.ip,
					city: location.city,
					country: location.country_name,
				},
			}))
		} catch (error) {
			console.error('Failed to fetch user location', error)
			setButtonDisabled(false)
		}
	}

	return (
		<div>
			<Header />
			<main>
				<File />
				<div>
					<button className="download-button" data-file-id={nanoid()} disabled={buttonDisabled} onClick={handleClick}>
						Download
					</button>
				</div>
			</main>
			<Footer />
		</div>
	)
}
