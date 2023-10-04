import { FC } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import './Navbar.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames('Navbar', [className])}>
            <div className={classNames('Navbar__links')}>
                <AppLink to="/" theme={AppLinkTheme.SECOND}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECOND}>
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    )
}
