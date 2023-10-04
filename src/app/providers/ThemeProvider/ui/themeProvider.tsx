import { FC, useMemo, useState } from 'react';
import {
    ThemeContext, THEME_KEY_OF_LOCAL_STORAGE, ThemeEnum, ThemeContextProps,
} from '../lib/themeContext'

const themeValue: ThemeEnum = localStorage.getItem(THEME_KEY_OF_LOCAL_STORAGE) as ThemeEnum
    || ThemeEnum.LIGHT

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeEnum>(themeValue)

    const providerValue = useMemo<ThemeContextProps>(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}
