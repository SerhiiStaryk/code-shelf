import { Box, Container } from '@mui/material';
import Header from './components/Header';

import { AppRoutes } from './router';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      <Container
        maxWidth='lg'
        sx={{ py: 4 }}
      >
        <AppRoutes />
      </Container>
    </Box>
  );
}

export default App;
