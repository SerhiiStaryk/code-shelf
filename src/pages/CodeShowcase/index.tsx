import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { codeExamples } from '../../data/codeShowcase';
import { CodeCard } from '../../components/CodeCard';

export const CodeShowcase: React.FC = () => {
  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        Code Showcase
      </Typography>
      <Typography
        variant='h6'
        color='text.secondary'
        sx={{ mb: 4 }}
      >
        Explore and copy beautiful code examples in various programming languages
      </Typography>

      <Grid
        container
        spacing={4}
      >
        {codeExamples.map((example, index) => (
          <CodeCard
            key={index}
            example={example}
          />
        ))}
      </Grid>
    </Box>
  );
};
