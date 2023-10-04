import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithTranslation } from
    'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
    test('Check render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    })

    test('Check collapsed', () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.getByTestId('Sidebar__button')
        expect(button).toBeInTheDocument()
        fireEvent.click(button)

        expect(screen.getByTestId('Sidebar')).toHaveClass('Sidebar--collapsed')
    })
})
