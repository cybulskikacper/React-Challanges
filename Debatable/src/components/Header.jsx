import React from 'react'

export default function Header() {
	return (
		<header>
			<div className="logo-container">
				<img className="logo-image" src="./src/assets/icons/brain.svg" />
				<h1>Debatable</h1>
			</div>
			<div className="header-links-container">
				<a href="#">Log in</a>
				<a href="#">Sign up</a>
			</div>
		</header>
	)
}
