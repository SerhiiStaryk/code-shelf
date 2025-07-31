import type { ReactNode } from 'react';
import { Header } from '../Header';
import { Container } from '@mui/material';
import { Footer } from '../Footer';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Container
      maxWidth='lg'
      sx={{ py: 4, flex: 1 }}
    >
      {children}
    </Container>
    <Footer />
  </>
);
