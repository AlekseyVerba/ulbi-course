import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent'

describe('Sidebar', () => {
    test('Check render', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    })

    test('Check collapsed', () => {
        renderComponent(<Sidebar />);
        const button = screen.getByTestId('Sidebar__button')
        expect(button).toBeInTheDocument()
        fireEvent.click(button)

        expect(screen.getByTestId('Sidebar')).toHaveClass('Sidebar--collapsed')
    })
})
