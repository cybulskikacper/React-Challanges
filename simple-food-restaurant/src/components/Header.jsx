import React from 'react'

function Header() {
	return (
		<header>
			<div className="button-container">
				<button className="menu btn">Our Menu</button>
				<button className='about btn'>About</button>
				<button className='hours btn'>Hours & Location</button>
			</div>
		</header>
	)
}

export default Header
