import React from 'react'
import { Link } from 'react-scroll'

function Header() {
	return (
		<header>
			<div className="button-container">
				<button className="menu btn">
					<Link to="about" spy={true} smooth={true} offset={50} duration={500}>
						About
					</Link>
				</button>
				<button className="about btn">
					<Link to="menu" spy={true} smooth={true} offset={50} duration={500}>
						Menu
					</Link>
				</button>
				<button className="hours btn">
					<Link to="hours" spy={true} smooth={true} offset={50} duration={500}>
						Hours & Location
					</Link>
				</button>
			</div>
		</header>
	)
}

export default Header
