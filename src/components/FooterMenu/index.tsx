import { Box, Button, Grid, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { navItems } from '../../constants/menu';

export const FooterMenu = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Grid
      container
      spacing={2}
    >
      {navItems.map(item => (
        <Grid
          size={{ xs: 12, sm: 4 }}
          key={item.path}
        >
          <Button
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
              '@media (max-width:1200px)': {
                fontSize: '0.5rem',
                padding: 1,
              },
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
        </Grid>
      ))}
    </Grid>
  );
};
