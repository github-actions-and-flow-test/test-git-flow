import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './component';


describe('app', () => {
	it('should change theme', async () => {
		render(<App />)

		expect(await screen.findByText('black')).toBeInTheDocument()

		await userEvent.click(await screen.findByTestId('button'))

		expect(await screen.queryByText('black')).not.toBeInTheDocument()

		expect(true).toBeTruthy()
		expect(true).toBeTruthy()
	})
});