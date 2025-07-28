import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardActions, Button, Paper } from '@mui/material';
import {
  Code,
  Lightbulb,
  Share,
  Speed,
  Palette,
  Style,
  IntegrationInstructions,
  AutoAwesome,
} from '@mui/icons-material';

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
  path: string;
}

export const Home: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Code sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Code Showcase',
      description: 'Share and display your code snippets with beautiful syntax highlighting and copy functionality.',
      path: '/showcase',
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Live Examples',
      description: 'See your code in action with interactive examples and live previews.',
      path: '/examples',
    },
    {
      icon: <Palette sx={{ fontSize: 40, color: 'success.main' }} />,
      title: 'Styled Components',
      description: "Explore advanced styling techniques and patterns using Material-UI's styled API.",
      path: '/styled-components',
    },
    {
      icon: <Style sx={{ fontSize: 40, color: 'warning.main' }} />,
      title: 'CSS Tips',
      description: 'Learn essential CSS techniques and best practices for modern web development.',
      path: '/css-tips',
    },
    {
      icon: <IntegrationInstructions sx={{ fontSize: 40, color: 'info.main' }} />,
      title: 'TypeScript Tips',
      description: 'Master TypeScript with advanced patterns, type safety, and best practices.',
      path: '/ts-tips',
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 40, color: 'error.main' }} />,
      title: 'Design System',
      description: 'Comprehensive component library and design patterns for consistent UI development.',
      path: '/design-system',
    },
    {
      icon: <Share sx={{ fontSize: 40, color: 'success.dark' }} />,
      title: 'Easy Sharing',
      description: 'Copy code with one click and share your examples with others.',
      path: '/showcase',
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'warning.dark' }} />,
      title: 'Fast & Modern',
      description: 'Built with React and Material-UI for a smooth, modern experience.',
      path: '/showcase',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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

      {/* Features Grid */}
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

      {/* Quick Start Section */}
      <Paper sx={{ p: 4, mt: 6, borderRadius: 3 }}>
        <Typography
          variant='h5'
          component='h3'
          sx={{ mb: 3, fontWeight: 600 }}
        >
          Quick Start
        </Typography>
        <Typography
          variant='body1'
          sx={{ mb: 3 }}
        >
          Ready to showcase your code? Head over to the Code Showcase page to see examples of how to display your code
          snippets with beautiful syntax highlighting and copy functionality.
        </Typography>
        <Button
          component={RouterLink}
          to='/showcase'
          variant='contained'
          size='large'
          startIcon={<Code />}
        >
          Get Started
        </Button>
      </Paper>
    </Box>
  );
};
