import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import './Button.scss'

export enum ButtonThemeEnum {
    CLEAR = 'clear',
    BACKGROUND = 'background',
    INVERTED_BACKGROUND = 'inverted-background'
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonThemeEnum
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonThemeEnum.CLEAR,
        square,
        size = ButtonSize.L,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        square,
        [size]: !!size,
    }

    return (
        <button
            type="button"
            className={classNames('Button', [className, theme], mods)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
