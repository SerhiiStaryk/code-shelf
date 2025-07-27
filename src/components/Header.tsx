import React, { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
  Chip,
} from '@mui/material'
import {
  Code,
  Home,
  Lightbulb,
  Palette,
  Style,
  IntegrationInstructions,
  Menu,
  Close,
  AutoAwesome,
} from '@mui/icons-material'

interface NavItem {
  path: string
  label: string
  icon: React.ReactElement
  description?: string
}

const Header: React.FC = () => {
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems: NavItem[] = [
    { 
      path: '/', 
      label: 'Home', 
      icon: <Home />,
      description: 'Welcome to Code Showcase'
    },
    { 
      path: '/showcase', 
      label: 'Code Showcase', 
      icon: <Code />,
      description: 'Share and display code snippets'
    },
    { 
      path: '/examples', 
      label: 'Examples', 
      icon: <Lightbulb />,
      description: 'Interactive code examples'
    },
    { 
      path: '/styled-components', 
      label: 'Styled Components', 
      icon: <Palette />,
      description: 'Material-UI styling patterns'
    },
    { 
      path: '/css-tips', 
      label: 'CSS Tips', 
      icon: <Style />,
      description: 'CSS techniques and best practices'
    },
    { 
      path: '/ts-tips', 
      label: 'TypeScript Tips', 
      icon: <IntegrationInstructions />,
      description: 'TypeScript patterns and tips'
    },
    { 
      path: '/design-system', 
      label: 'Design System', 
      icon: <AutoAwesome />,
      description: 'Component library and design patterns'
    },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavClick = () => {
    if (isMobile) {
      setMobileOpen(false)
    }
  }

  const isActive = (path: string) => location.pathname === path

  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {navItems.map((item) => (
        <Button
          key={item.path}
          component={RouterLink}
          to={item.path}
          color="inherit"
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
            '&::after': isActive(item.path) ? {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: 2,
              backgroundColor: 'white',
              borderRadius: 1,
            } : {},
            backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  )

  const renderMobileMenu = () => (
    <Drawer
      variant="temporary"
      anchor="right"
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
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          <Code sx={{ mr: 1, verticalAlign: 'middle' }} />
          Menu
        </Typography>
        <IconButton
          color="inherit"
          aria-label="close menu"
          onClick={handleDrawerToggle}
          edge="end"
        >
          <Close />
        </IconButton>
      </Box>
      
      <Divider />
      
      <List sx={{ pt: 1 }}>
        {navItems.map((item) => (
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
            <ListItemIcon sx={{ 
              color: isActive(item.path) ? 'primary.main' : 'inherit',
              minWidth: 40 
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: isActive(item.path) ? 600 : 400 }}>
                    {item.label}
                  </Typography>
                  {isActive(item.path) && (
                    <Chip 
                      label="Active" 
                      size="small" 
                      color="primary" 
                      variant="outlined"
                      sx={{ height: 20, fontSize: '0.7rem' }}
                    />
                  )}
                </Box>
              }
              secondary={
                <Typography variant="caption" color="text.secondary">
                  {item.description}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ p: 3, mt: 'auto' }}>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          Code Showcase App
        </Typography>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          Built with React & Material-UI
        </Typography>
      </Box>
    </Drawer>
  )

  return (
    <AppBar position="static" elevation={2}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{ 
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          component={RouterLink}
          to="/"
        >
          <Code sx={{ mr: 1, verticalAlign: 'middle' }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            Code Showcase
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            CS
          </Box>
        </Typography>
        
        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {renderDesktopMenu()}
        </Box>
        
        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="end"
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
      
      {/* Mobile Menu Drawer */}
      {renderMobileMenu()}
    </AppBar>
  )
}

export default Header 