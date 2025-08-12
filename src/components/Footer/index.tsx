import { type FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { FooterMenu } from '../FooterMenu';
import mainLogoWhite from '../../assets/main_logo_white.svg';
import logoWhite from '../../assets/logo_white.svg';

export const Footer: FC = () => (
  <Box
    component='footer'
    sx={{
      mt: 'auto',
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      py: 3,
      boxShadow: 2,
    }}
  >
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'center' },
        gap: 3,
      }}
    >
      <Typography
        variant='h6'
        sx={{
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        component={RouterLink}
        to='/code-shelf/'
      >
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <img
            alt='logo'
            src={mainLogoWhite}
            style={{ height: 60, verticalAlign: 'middle' }}
          />
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <img
            src={logoWhite}
            alt='logo'
            style={{ height: 60, verticalAlign: 'middle' }}
          />
        </Box>
      </Typography>

      {/* Menu */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <FooterMenu />
      </Box>
    </Container>
  </Box>
);
