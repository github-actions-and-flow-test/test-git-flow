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
				Почему, блять? !!! TEST! hello!!! BUILD ME AND DEPLOY
			</button>
			<a href='./../'>go up?? IDK HELP ME !!! PLS HALP help me.. help..</a>
			<p>I beg you..</p>
			<p>I beg you.. x2</p>
			<p>I beg you.. x3</p>
			<p>I beg you.. x3</p>
			<p>I hope</p>
			<p>I hope</p>
			<p>I hope</p>
			<p>I hope</p>
			<p>I hope</p>
			<p>I hope</p>
			<p>I hope</p>
			<p>I hope</p>
			<p>I hope</p>


			<p>peace</p>

		</div>
	)
}