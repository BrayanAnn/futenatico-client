import { createTheme } from "@mui/material";
import { cyan, green } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: green[700],
            dark: green[800],
            light: green[500],
            contrastText: '#ffffff',
        },

        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
        },

        background: {
            default: '#ffffff',
            paper: '#e1e1e1',
        }
    }
});