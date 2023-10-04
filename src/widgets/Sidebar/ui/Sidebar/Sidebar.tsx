import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonThemeEnum, ButtonSize } from 'shared/ui/Button'
import './Sidebar.scss'
import { ThemeToggle } from 'shared/ui/ThemeToggle'
import { LanguageToggle } from 'shared/ui/LanguageToggle'
import { ButtonBug } from 'app/providers/ErrorBoundary'
import { t } from 'i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeSVG from 'shared/assets/svg/home.svg'
import AboutUs from 'shared/assets/svg/about_us.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const toggleSidebar = () => {
        setToggle((prev) => !prev)
    }

    return (
        <div
            className={classNames(
                'Sidebar',
                [className],
                { 'Sidebar--collapsed': toggle },
            )}
            data-testid="Sidebar"
        >
            <Button
                className="Sidebar__button"
                data-testid="Sidebar__button"
                theme={ButtonThemeEnum.INVERTED_BACKGROUND}
                square
                size={ButtonSize.XL}
                onClick={toggleSidebar}
            >
                {toggle ? '>' : '<'}
            </Button>
            <div className="Sidebar__routes">
                <AppLink className="Sidebar__link" to={RoutePath.main} theme={AppLinkTheme.SECOND}>
                    <div className="Sidebar__icon">
                        <HomeSVG />
                    </div>
                    <span className="Sidebar__link-text">
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink className="Sidebar__link" to={RoutePath.about} theme={AppLinkTheme.SECOND}>
                    <div className="Sidebar__icon">
                        <AboutUs />
                    </div>
                    <span className="Sidebar__link-text">
                        {t('О нас')}
                    </span>
                </AppLink>
            </div>
            <div className={classNames('Sidebar__bottom')}>
                <ThemeToggle />
                <LanguageToggle className="Sidebar__bottom-language" />
            </div>
            <ButtonBug />
        </div>
    )
}
