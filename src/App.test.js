import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('App component', () => {
    test('renders data loading message when the button was NOT clicked and is loading data', () => {
        render(<App/>)
        const loadingItemsElement = screen.getByText('Loading data...')
        expect(loadingItemsElement).toBeInTheDocument()
    })

    test('renders All items element when the button was NOT clicked and is NOT loading data', async () => {
        render(<App/>)
        await waitFor(() => {
            const allItemsElement = screen.getByText('All items')
            expect(allItemsElement).toBeInTheDocument()
        })
    })

    test('renders Calculated items after clicking the button', () => {
        render(<App/>)
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        const calculatedItemsElement = screen.getByText('Calculated items:')
        expect(calculatedItemsElement).toBeInTheDocument()

    })
})