import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { DesktopMenu } from '../DesktopMenu';
import { MobileMenu } from '../MobileMenu';
import { Logo } from '../Logo';

const BASE_URL = import.meta.env.BASE_URL;

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };

  const isActive = (path: string) => location.pathname === `${BASE_URL}${path}`;

  return (
    <AppBar
      elevation={2}
      position='fixed'
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <DesktopMenu isActive={isActive} />
        </Box>

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            edge='end'
            color='inherit'
            aria-label='open menu'
            onClick={handleDrawerToggle}
            sx={{
              p: 1,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.1)',
              },
            }}
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

      <MobileMenu
        isActive={isActive}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </AppBar>
  );
};
