import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import './Sidebar.scss'
import { ThemeToggle } from 'shared/ui/ThemeToggle'
import { LanguageToggle } from 'shared/ui/LanguageToggle'
import { ButtonBug } from 'app/providers/ErrorBoundary'

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
                data-testid="Sidebar__button"
                onClick={toggleSidebar}
            >
                Toggle
            </Button>
            <div className={classNames('Sidebar__bottom')}>
                <ThemeToggle />
                <LanguageToggle />
            </div>
            <ButtonBug />
        </div>
    )
}
