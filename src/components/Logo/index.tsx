import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Logo = () => (
  <Typography
    variant='h6'
    sx={{
      display: 'flex',
      cursor: 'pointer',
      fontWeight: 'bold',
      alignItems: 'center',
    }}
    component={RouterLink}
    to='/'
  >
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <img
        alt='logo'
        src='/main_logo_white.svg'
        style={{ height: 60, verticalAlign: 'middle' }}
      />
    </Box>
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      <img
        alt='logo'
        src='/logo_white.svg'
        style={{ height: 60, verticalAlign: 'middle' }}
      />
    </Box>
  </Typography>
);
