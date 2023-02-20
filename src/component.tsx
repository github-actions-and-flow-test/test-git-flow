import { useState } from 'react';

export const App = () => {

	const [theme, setTheme] = useState<'black' | 'white'>('black')

	const colorHandler = () => {
		setTheme((prevState) => prevState === 'white' ? 'black' : 'white')
	}

	return (
		<div style={{ background: theme, width: '100%', fontSize: 25, color: 'red', height: '100vh' }}>
			{ theme === 'black' && 'black' }
			<button
				data-test-id='button'
				onClick={colorHandler}
			>
				change theme lol gay arthur dfg
				Почему, блять? !!! TEST!
			</button>
		</div>
	)
}