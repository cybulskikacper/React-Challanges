import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import './index.css'

function App() {
	function handleChange(event) {
		const { name, type, value, checked } = event.target

		function hijackResults() {
			let string = ''

			if (name === 'firstName') {
				string = 'Stinky'
			} else if (name === 'lastName') {
				string = 'McStinkerson'
			} else {
				string = 'StinkyMcStinkerson@gmail.com'
			}

			return string.slice(0, value.length)
		}

		function switcharoo(event) {
			if (value === 'no' && formData.privacyResponse === 'yes') {
				return 'absolutely'
			} else if (value === 'no' && formData.privacyResponse === 'absolutely') {
				return 'yes'
			} else {
				return value
			}
		}

		let dataToRecord

		if (name === 'firstName' || name === 'lastName' || name === 'email') {
			dataToRecord = hijackResults()
		} else if (type == 'radio') {
			dataToRecord = switcharoo(event)
		} else {
			dataToRecord = type === 'checkbox' ? checked : value
		}

		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: dataToRecord,
			}
		})
	}

	function fakeSubmit(e) {
		e.preventDefault()
		setFormData(prev => ({ ...formData, wantsToSubmit: !prev.wantsToSubmit }))
	}

	useEffect(() => {
		if (formData.rating !== '10') {
			setTimeout(() => {
				setFormData({ ...formData, rating: '10' })
			}, 2000)
		}

		if (!formData.marketingResponse) {
			setTimeout(() => {
				setFormData({ ...formData, rating: '10', marketingResponse: true })
			}, 2000)
		}
	})

	/* Challenge

	This form isn't annoying enough. Your task is to make it more annoying by doing the following:
	
		1. Every element of the form should be a controlled element. Each one should be controlled 
		   by its corresponding property in the formData state object on line 123 below. The elements and their corresponding properties are the following: 
	
				+------+----------------+--------------+-------------------+-------------------+
				| Line | Element Type   | Value        | Name              | formData Property |
				+------+----------------+--------------+-------------------+-------------------+
				+------+----------------+--------------+-------------------+-------------------+
				+------+----------------+--------------+-------------------+-------------------+

				+------+----------------+--------------+-------------------+-------------------+
				| 226  | checkbox input | "n/a"        | marketingResponse | marketingResponse |
				+------+----------------+--------------+-------------------+-------------------+
				
		2. Test your code by trying to input your real information and answering the questions the 
		   way people normally would. If you completed the previous task correctly, all of your responses should be thwarted in humorous ways, thanks to the code above line 76. 
	
	Tip: console.log(formData) while interacting with the form if you want to understand what *should* be happening with it (and would be happening if the form were controlled)! 
*/

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		privacyResponse: 'yes',
		rating: '10',
		marketingResponse: true,
		wantsToSubmit: false,
	})

	return (
		<form onSubmit={fakeSubmit}>
			<h1>The World's Most Annoying Form</h1>

			<input type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />

			<input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName} />

			<input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email} />

			<fieldset>
				<legend>Would you like to sign away all of the rights to your privacy?</legend>
				<div className="privacy-container">
					<label>
						<input
							type="radio"
							id="yes"
							name="privacyResponse"
							value="yes"
							onChange={handleChange}
							checked={formData.privacyResponse}
						/>
						Yes!
					</label>

					<label>
						<input
							type="radio"
							id="no"
							name="privacyResponse"
							value="no"
							onChange={handleChange}
							checked={formData.privacyResponse}
						/>
						No.
					</label>

					<label>
						<input
							type="radio"
							id="absolutely"
							name="privacyResponse"
							value="absolutely"
							onChange={handleChange}
							checked={formData.privacyResponse}
						/>
						Absolutely!
					</label>
				</div>
			</fieldset>

			<fieldset className="rating-container">
				<legend>On a scale of 1-10, with 1 being the worst and 10 being the best, how would you rate this form?</legend>

				<select onChange={handleChange} name="rating" value={formData.rating}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			</fieldset>

			<label className="marketing-label">
				<input type="checkbox" name="marketingResponse" onChange={handleChange} checked={formData.marketingResponse} />

				<div className="checkmark"></div>
				<span>I would like to receive 20 marketing emails per day. </span>
			</label>

			<button className={formData.wantsToSubmit ? 'move' : ''} onFocus={fakeSubmit} onMouseEnter={fakeSubmit}>
				Submit
			</button>
		</form>
	)
}

export default App
