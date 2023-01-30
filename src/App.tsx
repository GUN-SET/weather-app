import { useRef } from 'react'

import styles from './App.module.scss'

function App() {
	const inputRef = useRef<HTMLInputElement>(null)
	const API_URL = ''

	const fetchWeather = async () => {
		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current?.value}&units=metric&appid=${API_URL}`

		fetch(URL)
			.then(res => res.json())
			.then(data => {
				console.log(data, '--data')
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<div className={styles.background}>
			<div className={styles.search}>
				<div className={styles.searchContainer}>
					<input type='text' placeholder='Enter Your Location' ref={inputRef} />
					<button onClick={inputRef ? fetchWeather : undefined}>
						<img
							src='https://cdn-icons-png.flaticon.com/512/758/758651.png'
							alt=''
							className='w-8'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default App