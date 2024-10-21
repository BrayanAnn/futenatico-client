import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme, DarkTheme } from "../themes";
import { ThemeProvider } from '@emotion/react';
import { Box } from "@mui/material";

interface IThemeContextData{
    themeName: 'light' | 'dark';
    toogleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);


interface IAppThemeProviderProps{
    children: React.ReactNode;
}

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({children}) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
    
    const toogleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
       if(themeName === 'light') return LightTheme;

       return DarkTheme

    }, [themeName])
    
    return(
        <ThemeContext.Provider value={{ themeName, toogleTheme }}>
            <ThemeProvider theme={ theme }>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children} 
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}