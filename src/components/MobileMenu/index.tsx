import { Close } from '@mui/icons-material';
import {
  Box,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { navItems } from '../../constants/menu';
import { Link as RouterLink } from 'react-router-dom';
import { type Dispatch, type SetStateAction } from 'react';

export type MobileMenuProps = {
  isActive: (path: string) => boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

export const MobileMenu = ({ isActive, setMobileOpen, mobileOpen, handleDrawerToggle }: MobileMenuProps) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleNavClick = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  return (
    <Drawer
      variant='temporary'
      anchor='right'
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 280,
          backgroundColor: 'background.paper',
          color: 'text.primary',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography
          variant='h6'
          sx={{ fontWeight: 'bold' }}
        >
          <img
            src='/logo.svg'
            alt='logo'
            style={{ height: 50, verticalAlign: 'middle', marginRight: 8 }}
          />
          Menu
        </Typography>
        <IconButton
          color='inherit'
          aria-label='close menu'
          onClick={handleDrawerToggle}
          edge='end'
        >
          <Close />
        </IconButton>
      </Box>

      <Divider />

      <List sx={{ pt: 1 }}>
        {navItems.map(item => (
          <ListItem
            key={item.path}
            component={RouterLink}
            to={item.path}
            onClick={handleNavClick}
            sx={{
              py: 2,
              px: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'action.hover',
                transform: 'translateX(4px)',
              },
              backgroundColor: isActive(item.path) ? 'action.selected' : 'transparent',
              borderLeft: isActive(item.path) ? 3 : 0,
              borderColor: 'primary.main',
            }}
          >
            <ListItemIcon
              sx={{
                color: isActive(item.path) ? 'primary.main' : 'inherit',
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant='body1'
                    sx={{ fontWeight: isActive(item.path) ? 600 : 400 }}
                  >
                    {item.label}
                  </Typography>
                  {isActive(item.path) && (
                    <Chip
                      label='Active'
                      size='small'
                      color='primary'
                      variant='outlined'
                      sx={{ height: 20, fontSize: '0.7rem' }}
                    />
                  )}
                </Box>
              }
              secondary={
                <Typography
                  variant='caption'
                  color='text.secondary'
                >
                  {item.description}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 3, mt: 'auto' }}>
        <Typography
          variant='caption'
          color='text.secondary'
          align='center'
          display='block'
        >
          Code Showcase App
        </Typography>
        <Typography
          variant='caption'
          color='text.secondary'
          align='center'
          display='block'
        >
          Built with React & Material-UI
        </Typography>
      </Box>
    </Drawer>
  );
};
