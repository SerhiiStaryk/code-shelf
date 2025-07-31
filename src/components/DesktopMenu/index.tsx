import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { navItems } from '../../constants/menu';

export type DesktopMenuProps = {
  isActive: (path: string) => boolean;
};

export const DesktopMenu = ({ isActive }: DesktopMenuProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {navItems.map(item => (
        <Button
          key={item.path}
          component={RouterLink}
          to={item.path}
          color='inherit'
          startIcon={item.icon}
          sx={{
            position: 'relative',
            minWidth: 'auto',
            px: 2,
            py: 1,
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transform: 'translateY(-1px)',
            },
            '&::after': isActive(item.path)
              ? {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
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
          {item.label}
        </Button>
      ))}
    </Box>
  );
};
