import React from 'react'
import TopText from './components/TopText'

export default function App() {
	const [filesToUpload, setFilesToUpload] = React.useState([])

	function handleSubmit(e) {
		e.preventDefault()
		filesToUpload.forEach(file => console.log(file))
	}

	function handleFileChange(e) {
		const selectedFiles = Array.from(e.target.files)
		const filesInfo = selectedFiles.map(file => ({
			fileName: file.name,
			fileType: file.type,
			FileSize: file.size,
		}))

		setFilesToUpload(filesInfo)
	}

	return (
		<form onSubmit={handleSubmit}>
			<TopText />

			<input type="file" required multiple accept=".pdf, .jpg, .jpeg, .png" onChange={handleFileChange} />

			<button>Upload </button>
		</form>
	)
}
