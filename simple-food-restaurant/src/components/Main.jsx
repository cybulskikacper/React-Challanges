import React from 'react'

function Main() {
	return (
		<main className="main">
			<h1 className="logo-container">Simple Food Restaurant</h1>
			<p className="info-container">
				We make simple food for simple people. Want a sandwich? You got it. A hot dog? Coming right up. Poached salmon
				eggs with fire-roasted asparagus fritters hand-glazed in locally-sourced artisanal honey? Get out of here. Try
				the Fancy Food Cafe across the street.
			</p>

			<div className="image-container">
				<div className="image-wrapper">
					<img className="hot-dog" src="./src/assets/hotdogs.jpg" alt="Hot dogs and cans of coke at the table" />
				</div>
				<div className="image-wrapper">
					<img className="hot-dog" src="./src/assets/sandwich.jpg" alt="Homemade sandwich" />
				</div>
				<div className="image-wrapper">
					<img className="hot-dog" src="/src/assets/hamburger.jpg" alt="Burger" />
				</div>
			</div>
		</main>
	)
}

export default Main
