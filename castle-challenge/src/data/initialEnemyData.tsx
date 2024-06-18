import { nanoid } from 'nanoid'

export default [
	{
		id: nanoid(),
		currentImage: './src/assets/enemy1A.png',
		altImage: './src/assets/enemy1B.png',
		orientation: 'left',
		position: {
			top: 210,
			left: 157,
		},
	},
	{
		id: nanoid(),
		currentImage: './src/assets/enemy2A.png',
		altImage: './src/assets/enemy2B.png',
		orientation: 'right',
		position: {
			top: 105,
			left: 187,
		},
	},
	{
		id: nanoid(),
		currentImage: './src/assets/enemy3A.png',
		altImage: './src/assets/enemy3B.png',
		orientation: 'right',
		position: {
			top: 165,
			left: 165,
		},
	},
]
