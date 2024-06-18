import React from 'react'
import Message from './components/Message'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
	const passCode = '1001'

	const [userInput, setUserInput] = React.useState({
		charOne: '',
		charTwo: '',
		charThree: '',
		charFour: '',
	})

	const [verified, setVerified] = React.useState(undefined)

	function handleChange(e) {
		const { name, value } = e.target

		setUserInput(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	function handleSubmit(e) {
		e.preventDefault()

		// 		const combinedInput = Object.values(userInput).join(""), to jest lepsze solution - to zbiera te wszystkie elementy z userinput i zamienia to w array
		const passCheck = userInput.charOne + userInput.charTwo + userInput.charThree + userInput.charFour

		setVerified(() => (passCheck === passCode ? true : false))

		// if (passCheck === passCode) {
		// 	setVerified(true)
		// } else {
		// 	setVerified(false)
		// }
	}

	/* Challenge

	The verification code form doesn't yet check the user's input. Your job is to finish setting it up as follows: 
	


		2. When the user clicks the submit button, a submit handling function should prevent the 
		   page from refreshing and check if the combination of the four characters stored in userInput equals the passCode value (declared on line 7 above).
		   
		3. If they match, the verified state value should be set to true. Otherwise, it should 
		   be set to false. 
		   
		4. Your code should be as DRY as possible!
*/

	return (
		<div className="wrapper">
			<Header />

			<form onSubmit={handleSubmit}>
				<Message status={verified} />

				<div>
					<input
						required
						type="password"
						name="charOne"
						maxLength="1"
						value={userInput.charOne}
						onChange={handleChange}
					/>

					<input
						required
						type="password"
						name="charTwo"
						maxLength="1"
						value={userInput.charTwo}
						onChange={handleChange}
					/>

					<input
						required
						type="password"
						name="charThree"
						maxLength="1"
						value={userInput.charThree}
						onChange={handleChange}
					/>

					<input
						required
						type="password"
						name="charFour"
						maxLength="1"
						value={userInput.charFour}
						onChange={handleChange}
					/>
				</div>

				<button disabled={verified}>Submit</button>
			</form>

			<Footer />
		</div>
	)
}
