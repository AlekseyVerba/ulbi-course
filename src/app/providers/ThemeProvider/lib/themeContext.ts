import { createContext, useContext } from 'react';

export enum ThemeEnum {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: ThemeEnum,
    setTheme?: (theme: ThemeEnum) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const THEME_KEY_OF_LOCAL_STORAGE = 'theme'
