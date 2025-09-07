import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { usefullLinks } from '../../data/usefullLinks';
import { UsefullLinkCard } from '../../components/UsefullLinkCard';

export const UsefulLinks: React.FC = () => {
  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
      >
        Usefull links
      </Typography>

      <Typography
        variant='h6'
        color='text.secondary'
      >
        Collection of useful links for work in web development
      </Typography>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography
          variant='h5'
          component='h2'
          gutterBottom
        >
          Useful TypeScript Tools & Resources
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {usefullLinks.map(category => (
            <UsefullLinkCard
              title={category.title}
              links={category.links}
              key={category.title}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};
