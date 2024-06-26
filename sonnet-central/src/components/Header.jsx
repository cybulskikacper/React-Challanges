import React from 'react'

export default function Header({ searchProps }) {
	return (
		<header>
			<div className="shakespeare-image-container">
				<img className="shakespeare" src="./src/assets/shakespeare.png" />
				<img className="sunglasses" src="./src/assets/sunglasses.png" />
			</div>
			<h1>Sonnet Central</h1>
			<h2>All of Shakespeare's sonnets in one place.</h2>
			<div className="search-container">
				<div className="input-container">
					<svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
						<g>
							<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
						</g>
					</svg>
					<input type="text" ref={searchProps.inputRef} placeholder="Thou enter thy search term hither." />
				</div>

				<button onClick={searchProps.handleClick}>Search</button>
			</div>
		</header>
	)
}
