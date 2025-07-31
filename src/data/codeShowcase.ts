/* eslint-disable max-len */
import type { CodeExample } from '../types/data';

export const codeExamples: CodeExample[] = [
  {
    title: 'React Layout Component',
    description:
      'This Layout component provides a page structure with a Header at the top, a centered Container for main content, and a Footer at the bottom.',
    language: 'tsx',
    code: `import type { ReactNode } from 'react';
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
);`,
  },
];
