import styles from './App.module.scss'

function App() {
	return (
		<div className={styles.background}>
			<div className={styles.search}>
				<input
					type='text'
					placeholder='Enter Your Location'
					className='text-xl'
				/>
			</div>
		</div>
	)
}

export default App