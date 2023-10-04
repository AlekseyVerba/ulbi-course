import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import './AppLink.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECOND = 'second'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        to,
        children,
        ...others
    } = props

    console.log(theme)
    return (
        <Link to={to} className={classNames('AppLink', [theme])} {...others}>
            {children}
        </Link>
    )
}
