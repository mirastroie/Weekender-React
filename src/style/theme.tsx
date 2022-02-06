/* eslint-disable no-unused-vars */
import {createTheme} from '@mui/material/styles';
const theme = {
  typography: {
    fontFamily: 'Raleway',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF5B49',
    },
    secondary: {
      main: '#121212',
    },
    background: {
      default: '#131516',
      dark: '#131516',
    },
  },
  sidebarWidth: 240,
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          display: 'block',
        },
      },
    },
  },
} as const;
type CustomTheme = {
    [Key in keyof typeof theme]: typeof theme[Key]
}
declare module '@mui/material/styles/createTheme' {
    interface Theme extends CustomTheme { }
    interface ThemeOptions extends CustomTheme { }
}
export default createTheme(theme);
