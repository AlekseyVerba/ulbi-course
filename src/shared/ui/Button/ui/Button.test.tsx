import { render, screen } from '@testing-library/react'
import { Button, ButtonThemeEnum } from 'shared/ui/Button'

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Button with class', () => {
        render(<Button theme={ButtonThemeEnum.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
