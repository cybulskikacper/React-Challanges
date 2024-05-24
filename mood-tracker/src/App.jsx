import diaryData from '../diaryData'
import DiaryCard from './components/DiaryCard'
import Menu from './components/Menu'

export default function App() {
	/* Challenge 

Two DiaryCard components are currently hardcoded with data below. Your task is to dynamically create DiaryCard components for all 14 days of data in diaryData.js. 

    1. Both of the hardcoded DiaryCard components should be deleted and replaced with a total of 14 
       dynmically-created components — one for each entry in diaryData.js. 
    
    2. The first two cards should look identical to the original hardcoded cards, and the rest of 
       the cards should look similar. 
        
    3. Make the code concise. 
*/

	return (
		<div>
			<Menu skip={false} />
			<main className="main-container">
				<div className="sub-header">
					<h3>April Reports</h3>
				</div>

				{diaryData.map(entry => {
					return <DiaryCard key={entry.id} {...entry} />
				})}
			</main>
		</div>
	)
}
