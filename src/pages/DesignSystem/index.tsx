import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { CodeCard } from '../../components/CodeCard';
import { designSystem } from '../../data/designSystem';

export const DesignSystem: React.FC = () => {
  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        Design System
      </Typography>
      <Typography
        variant='h6'
        color='text.secondary'
        sx={{ mb: 4 }}
      >
        A design system is a collection of reusable components, styles, and guidelines that help maintain consistency
        across an application or product.
      </Typography>

      <Grid
        container
        spacing={4}
      >
        {designSystem.map((example, index) => (
          <CodeCard
            key={index}
            example={example}
          />
        ))}
      </Grid>
    </Box>
  );
};
