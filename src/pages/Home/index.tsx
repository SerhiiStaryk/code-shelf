import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardActions, Button, Paper, useTheme } from '@mui/material';
import { features } from '../../data/features';

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          p: 6,
          mb: 4,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <Typography
          variant='h3'
          component='h1'
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          Code Showcase App
        </Typography>
        <Typography
          variant='h6'
          sx={{ mb: 4, opacity: 0.9 }}
        >
          Share, explore, and learn from beautiful code examples
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={RouterLink}
            to='/showcase'
            variant='contained'
            size='large'
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Explore Code
          </Button>
          <Button
            component={RouterLink}
            to='/examples'
            variant='outlined'
            size='large'
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            View Examples
          </Button>
        </Box>
      </Paper>

      <Typography
        variant='h4'
        component='h2'
        sx={{ mb: 4, textAlign: 'center' }}
      >
        Features
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography
                variant='h6'
                component='h3'
                sx={{ mb: 1, fontWeight: 600 }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                {feature.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
              <Button
                component={RouterLink}
                to={feature.path}
                size='small'
                color='primary'
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
