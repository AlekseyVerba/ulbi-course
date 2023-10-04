import { ThemeEnum, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/dark.png'
import LightIcon from 'shared/assets/icons/light.png'
import { Button, ButtonThemeEnum } from 'shared/ui/Button'

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme} theme={ButtonThemeEnum.CLEAR}>
            <img alt="theme_icon" src={theme === ThemeEnum.DARK ? DarkIcon : LightIcon} />
        </Button>
    )
}
