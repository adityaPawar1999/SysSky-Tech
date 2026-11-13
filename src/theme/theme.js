import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: { primary: { main: '#2563EB', dark: '#1D4ED8', contrastText: '#FFFFFF' }, secondary: { main: '#06B6D4' }, text: { primary: '#172033', secondary: '#667085' }, background: { default: '#FFFFFF', paper: '#FFFFFF' } },
  typography: { fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', button: { textTransform: 'none', fontWeight: 600 } },
  shape: { borderRadius: 12 },
})
