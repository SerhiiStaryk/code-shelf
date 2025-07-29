import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1E2A38',
    },
    secondary: {
      main: '#A4D3F5',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Inter', 'Roboto Mono', 'sans-serif'].join(','),
    h4: {
      fontWeight: 600,
      color: '#1E2A38',
    },
    h5: {
      fontWeight: 500,
      color: '#1E2A38',
    },
    body1: {
      color: '#333333',
    },
  },
  components: {},
});
