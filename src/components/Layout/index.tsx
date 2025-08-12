import { Header } from '../Header';
import { Box, Container } from '@mui/material';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <Header />
    <Container
      maxWidth='lg'
      sx={{ py: 4, flex: 1 }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Outlet />
      </Box>
    </Container>
    <Footer />
  </>
);
