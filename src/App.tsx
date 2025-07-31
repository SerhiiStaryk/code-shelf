import { Box } from '@mui/material';
import { AppRoutes } from './router';
import { Layout } from './components/Layout';

const App = () => (
  <Box
    sx={{
      minHeight: '100vh',
      backgroundColor: 'background.default',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Layout>
      <AppRoutes />
    </Layout>
  </Box>
);

export default App;
