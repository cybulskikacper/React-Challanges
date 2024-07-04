import React, { useState } from 'react'
import PostComments from './PostComments'
import PostContent from './PostContent'
import postData from '../postData'

export default function DebatePost() {
	const [comments, setComments] = useState(postData.comments)
	const [username, setUsername] = useState('')
	const [text, setText] = useState('')
	const [anonymous, setAnonymous] = useState(false)

	function handleUserName(e) {
		setUsername(e.target.value)
	}

	function handleText(e) {
		setText(e.target.value)
	}
	function handleAnonymous(e) {
		setAnonymous(e.target.checked)
	}

	function handleComment() {
		const newComment = {
			id: comments.length + 1,
			userName: anonymous ? 'Anonymous' : username,
			commentText: text,
		}
		setComments([...comments, newComment])

		// Clear the form inputs
		setUsername('')
		setText('')
		setAnonymous(false)
	}
	// Form submission handler
	function handleSubmit(e) {
		e.preventDefault() // Prevent the default form submission behavior
		handleComment() // Add the new comment
	}

	return (
		<div className="post-container">
			<PostContent data={{ ...postData }} />
			<PostComments data={comments} />
			<form onSubmit={handleSubmit}>
				<input
					className="text-input"
					type="text"
					placeholder="Enter username."
					value={username}
					onChange={handleUserName}
					required
				/>
				<textarea placeholder="What do you think?" value={text} onChange={handleText} required />
				<label>
					<input className="checkbox" type="checkbox" checked={anonymous} onChange={handleAnonymous} />
					Post anonymously?
				</label>
				<button type="submit">Send</button>
			</form>
		</div>
	)
}

/* Challenge 

The form doesn't work. Your task is to make it a controlled form that adds a comment to the post when the user clicks "Send."

    1. The comment should appear on the bottom of the comment thread, with the inputted 
       username and comment text displayed just like the previous comments. 
       
    2. The comment should be added to the array that contains the data for the previous 
       comments. 
    
    3. The inputted username should be recorded, but it should show up as "AnonymousUser" if 
       the user checks the checkbox.
    
    4. The user should have to input text into the text input element and comment box element to 
       submit the form, and the elements and the checkbox should clear out after the user submits a comment. They should be empty on page load as well.   
        
    5. Your code can live entirely inside this file, although you are welcome to move things around 
       if you'd like. 
*/
