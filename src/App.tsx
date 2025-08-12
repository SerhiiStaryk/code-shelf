import { CssBaseline, ThemeProvider } from '@mui/material';

import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
