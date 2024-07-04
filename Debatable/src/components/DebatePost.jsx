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
