import { Code, Css, Javascript, Html } from '@mui/icons-material';
import { Typography } from '@mui/material';

export const categories = [
  { name: 'All Tips', icon: <Code /> },
  { name: 'HTML', icon: <Html /> },
  { name: 'Css', icon: <Css /> },
  { name: 'Java Script', icon: <Javascript /> },
  {
    name: 'Type Script',
    icon: (
      <Typography
        component='span'
        sx={{ fontWeight: 900, fontSize: '0.5rem', fontFamily: 'Arial', opacity: 0.8 }}
      >
        Ts
      </Typography>
    ),
  },
];
