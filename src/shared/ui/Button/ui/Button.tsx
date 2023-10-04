import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import './Button.scss'

export enum ButtonThemeEnum {
    CLEAR = 'clear',
    FULL = 'full'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonThemeEnum
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme = ButtonThemeEnum.CLEAR, ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames('Button', [className, theme])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
