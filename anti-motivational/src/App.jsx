import React from 'react'
import showState from './utilities/showState'
import NextQuoteButton from './components/NextQuoteButton'
import imageData from './data/imageData'
import quoteData from './data/quoteData'

export default function App() {
	const [currentData, setCurrentData] = React.useState(getNextData)

	showState(currentData)

	/*
    
   currentData = {
 ‎
 ‎ ‎‎ image: {
 ‎ ‎ ‎ ‎ ‎ ‎ wrapperStyles: {
 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ backgroundImage: "url(./images/xan-griffin-eA2t5EvcxU4-unsplash.jpg)",
 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ backgroundPositionX: undefined
 ‎ ‎ ‎‎ ‎ ‎ },
 ‎ ‎ ‎ ‎‎ ‎ containerStyles: {
 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ color: "#f8f8ff",
 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ width: undefined,
 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ padding: "300px 50px 0 50px",
 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ textShadow: undefined
 ‎ ‎ ‎ ‎‎ ‎ },
 ‎ ‎ ‎ ‎ ‎ quoteFontSize: {
 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ fontSize: "20px"
 ‎ ‎ ‎ ‎ ‎ }
 ‎ ‎‎ },
 ‎
 ‎ ‎ text: {
 ‎ ‎ ‎ ‎ ‎ fakeQuote: "The less you do, the less it can be undone.",
 ‎ ‎ ‎ ‎ ‎‎ fakeSource: "Virginia Woolf",
 ‎ ‎‎ ‎ ‎ ‎ ‎quoteFontSize: {
 ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎fontSize: undefined
 ‎ ‎ ‎ ‎ ‎ }
 ‎ ‎‎ }
}


    
    
    */

	function getNextData() {
		return {
			text: getRandomItem(quoteData),
			image: getRandomItem(imageData),
		}
	}

	function getRandomItem(targetObject) {
		checkArray(targetObject)
		const targetArray = targetObject.availableItems
		const length = targetArray.length
		const randomIndex = Math.floor(Math.random() * length)
		const targetItem = targetArray[randomIndex]
		targetArray.splice(randomIndex, 1)
		targetObject.usedItems.push(targetItem)
		return targetItem
	}

	function getNextQuote() {
		setCurrentData(getNextData)
	}

	function checkArray(targetObject) {
		if (targetObject.availableItems.length === 0) {
			targetObject.availableItems = [...targetObject.usedItems]
			targetObject.usedItems = []
		}
	}

	/* How to use the getSmallestFontSize function:
    
        The data about font sizes are stored as strings: e.g., "30px" and "20px". If you feed two objects with such data into this function as arguments, it will return the object with the smallest font. The function doesn't care if either or both values are undefined. It can handle any of these situations! For example:
        
            const fontSizeOne = {fontSize: "30px"}
            const fontSizeTwo = {fontSize: "20px"}
            getSmallestFontSize(fontSizeOne, fontSizeTwo) //returns {fontSize: "20px"}. 
        
            ------
      
            const fontSizeThree = {fontSize: "25px"}
            const fontSizeFour = undefined 
            getSmallestFontSize(fontSizeThree, fontSizeFour) //returns {fontSize: "25px"}. 
            
            ------

            const fontSizeFive = undefined
            const fontSizeSix = undefined 
            getSmallestFontSize(fontSizeThree, fontSizeFour)  //returns undefined  
*/

	function getSmallestFontSize(fontObjectOne, fontObjectTwo) {
		const fontSizeOneString = fontObjectOne && fontObjectOne.fontSize
		const fontSizeTwoString = fontObjectTwo && fontObjectTwo.fontSize

		if (!fontSizeOneString && !fontSizeTwoString) {
			return undefined
		} else if (fontSizeOneString && !fontSizeTwoString) {
			return fontObjectOne
		} else if (!fontSizeOneString && fontSizeTwoString) {
			return fontObjectTwo
		}

		const fontSizeOneNum = getNumber(fontSizeOneString)
		const fontSizeTwoNum = getNumber(fontSizeTwoString)

		function getNumber(fontSizeString) {
			return +fontSizeString.slice(0, -2)
		}

		return fontSizeOneNum < fontSizeTwoNum ? fontObjectOne : fontObjectTwo
	}

	const wrapperStyles = currentData.image.wrapperStyles
	const containerStyles = currentData.image.containerStyles
	const quoteFontSize = getSmallestFontSize(currentData.image.quoteFontSize, currentData.text.quoteFontSize)

	return (
		<div className="wrapper" style={wrapperStyles}>
			<div className="quote-container" style={containerStyles}>
				<p className="quote" style={quoteFontSize}>
					{currentData.text.fakeQuote}
					<span className="source">-{currentData.text.fakeSource}</span>
				</p>
			</div>
			<NextQuoteButton clickHandler={getNextQuote} />
		</div>
	)
}
