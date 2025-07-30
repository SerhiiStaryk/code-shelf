import { type FC, type ReactElement } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Code, Home, Lightbulb, Palette, Style, IntegrationInstructions, AutoAwesome } from '@mui/icons-material';

interface NavItem {
  path: string;
  label: string;
  icon: ReactElement;
  description?: string;
}

const Footer: FC = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      path: '/',
      label: 'Home',
      icon: <Home />,
      description: 'Welcome to Code Showcase',
    },
    {
      path: '/showcase',
      label: 'Code Showcase',
      icon: <Code />,
      description: 'Share and display code snippets',
    },
    {
      path: '/examples',
      label: 'Examples',
      icon: <Lightbulb />,
      description: 'Interactive code examples',
    },
    {
      path: '/styled-components',
      label: 'Styled Components',
      icon: <Palette />,
      description: 'Material-UI styling patterns',
    },
    {
      path: '/css-tips',
      label: 'CSS Tips',
      icon: <Style />,
      description: 'CSS techniques and best practices',
    },
    {
      path: '/ts-tips',
      label: 'TypeScript Tips',
      icon: <IntegrationInstructions />,
      description: 'TypeScript patterns and tips',
    },
    {
      path: '/design-system',
      label: 'Design System',
      icon: <AutoAwesome />,
      description: 'Component library and design patterns',
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const renderDesktopMenu = () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(auto-fit, minmax(150px, 1fr))', md: 'repeat(auto-fit, minmax(200px, 1fr))' },
        gap: 2,
        width: '100%',
        maxWidth: 800,
      }}
    >
      {navItems.map(item => (
        <Button
          key={item.path}
          component={RouterLink}
          to={item.path}
          color='inherit'
          startIcon={<Box sx={{ display: { xs: 'none', md: 'block' } }}>{item.icon}</Box>}
          fullWidth
          sx={{
            position: 'relative',
            justifyContent: 'flex-start',
            px: 2,
            py: 1.5,
            borderRadius: 2,
            transition: 'all 0.3s ease',
            textAlign: 'left',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transform: 'translateY(-1px)',
            },
            '&::after': isActive(item.path)
              ? {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%',
                  height: 2,
                  backgroundColor: 'white',
                  borderRadius: 1,
                }
              : {},
            backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.5 }}>
            <Typography
              variant='body2'
              sx={{ fontWeight: 500 }}
            >
              {item.label}
            </Typography>
            {item.description && (
              <Typography
                variant='caption'
                sx={{ opacity: 0.8, lineHeight: 1.2, display: { xs: 'none', md: 'block' } }}
              >
                {item.description}
              </Typography>
            )}
          </Box>
        </Button>
      ))}
    </Box>
  );

  return (
    <AppBar
      position='static'
      elevation={2}
      sx={{
        mt: 'auto',
        backgroundColor: 'primary.main',
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          gap: 3,
          py: 3,
        }}
      >
        <Typography
          variant='h6'
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            alignSelf: { xs: 'center', md: 'flex-start' },
          }}
          component={RouterLink}
          to='/'
        >
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <img
              src='/main_logo_white.svg'
              alt='logo'
              style={{ height: 60, verticalAlign: 'middle' }}
            />
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <img
              src='/logo_white.svg'
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
          {renderDesktopMenu()}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
