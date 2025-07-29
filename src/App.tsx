import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

import { AppRoutes } from './router';

function App() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: 'background.default',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <Container
        maxWidth='lg'
        sx={{ py: 4, flex: 1 }}
      >
        <AppRoutes />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
