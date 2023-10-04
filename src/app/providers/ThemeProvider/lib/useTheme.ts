import { useContext } from 'react'
import { ThemeEnum, ThemeContext, THEME_KEY_OF_LOCAL_STORAGE } from './themeContext'

export interface UseThemeResult {
    theme: ThemeEnum,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK

        setTheme(newTheme)
        localStorage.setItem(THEME_KEY_OF_LOCAL_STORAGE, newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}
