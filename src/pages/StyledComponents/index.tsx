import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  Tabs,
  Tab,
  Alert,
  Stack,
  Avatar,
  Badge,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { styled, keyframes, css, ThemeProvider, createTheme } from '@mui/material/styles';
import { Favorite, Star, TrendingUp, Code, Brush, AutoAwesome } from '@mui/icons-material';
import CodeBlock from '../../components/CodeBlock';

// Animated keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Basic styled components
const StyledButton = styled(Button)(() => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: `${fadeIn} 0.6s ease-out`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const GradientText = styled(Typography)(() => ({
  background: 'linear-gradient(45deg, #FE6B8B, #FF8E53, #FE6B8B)',
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 3s ease infinite`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 'bold',
}));

const PulseButton = styled(Button)(() => ({
  animation: `${pulse} 2s infinite`,
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
  '&:hover': {
    animation: 'none',
    transform: 'scale(1.1)',
  },
}));

// Conditional styling
const DynamicCard = styled(Card)<{ $isActive?: boolean }>(({ theme, $isActive }) => ({
  transition: 'all 0.3s ease',
  border: $isActive ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
  backgroundColor: $isActive ? theme.palette.primary.light + '20' : theme.palette.background.paper,
  transform: $isActive ? 'scale(1.02)' : 'scale(1)',
}));

// Responsive styled component
const ResponsiveBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

// Glass morphism effect
const GlassCard = styled(Card)(() => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: 16,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
}));

// Custom theme
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B',
    },
    secondary: {
      main: '#4ECDC4',
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
  },
});

// CSS-in-JS example
const cssExample = css`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
      >
        <GradientText variant='h3'>Styled Components Showcase</GradientText>
      </Typography>

      <Typography
        variant='h6'
        color='text.secondary'
        paragraph
      >
        Explore various styling techniques and patterns using Material-UI's styled API
      </Typography>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ mb: 4 }}
      >
        <Tab
          label='Basic Examples'
          icon={<Brush />}
        />
        <Tab
          label='Advanced Patterns'
          icon={<AutoAwesome />}
        />
        <Tab
          label='Animations'
          icon={<TrendingUp />}
        />
        <Tab
          label='Code Examples'
          icon={<Code />}
        />
      </Tabs>

      {activeTab === 0 && (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <AnimatedCard>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Basic Styled Button
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                A button with gradient background and hover effects
              </Typography>
              <StyledButton>Gradient Button</StyledButton>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Pulse Animation Button
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                Button with continuous pulse animation
              </Typography>
              <PulseButton>Pulse Button</PulseButton>
            </CardContent>
          </AnimatedCard>

          <DynamicCard $isActive={isActive}>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Dynamic Styling
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                Card with conditional styling based on state
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive}
                    onChange={e => setIsActive(e.target.checked)}
                  />
                }
                label='Toggle Active State'
              />
            </CardContent>
          </DynamicCard>

          <GlassCard>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Glass Morphism Effect
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                Modern glass-like appearance with backdrop blur
              </Typography>
              <Chip
                label='Glass Effect'
                color='primary'
              />
            </CardContent>
          </GlassCard>
        </Box>
      )}

      {activeTab === 1 && (
        <Stack spacing={4}>
          <Paper sx={{ p: 3 }}>
            <Typography
              variant='h5'
              gutterBottom
            >
              Responsive Design
            </Typography>
            <ResponsiveBox sx={{ bgcolor: 'grey.100', borderRadius: 2 }}>
              <Typography>This box adapts its padding based on screen size using theme breakpoints</Typography>
            </ResponsiveBox>
          </Paper>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <ThemeProvider theme={customTheme}>
              <Card>
                <CardContent>
                  <Typography
                    variant='h6'
                    gutterBottom
                  >
                    Custom Theme
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    paragraph
                  >
                    Component using a custom theme with different colors
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                  >
                    Custom Theme Button
                  </Button>
                </CardContent>
              </Card>
            </ThemeProvider>

            <Card>
              <CardContent>
                <Typography
                  variant='h6'
                  gutterBottom
                >
                  CSS-in-JS Example
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  paragraph
                >
                  Using the css helper for complex styles
                </Typography>
                <Box sx={cssExample}>
                  <Typography variant='body1'>This box uses the css helper for styling</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      )}

      {activeTab === 2 && (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          <AnimatedCard>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Fade In Animation
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                Cards animate in with a fade effect
              </Typography>
              <Badge
                badgeContent={4}
                color='primary'
              >
                <Avatar>
                  <Favorite />
                </Avatar>
              </Badge>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Hover Effects
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                Cards lift up on hover with enhanced shadows
              </Typography>
              <Stack
                direction='row'
                spacing={1}
              >
                <Chip
                  icon={<Star />}
                  label='Hover Me'
                />
                <Chip
                  icon={<TrendingUp />}
                  label='Lift Effect'
                />
              </Stack>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Gradient Animation
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                Text with animated gradient background
              </Typography>
              <GradientText variant='h6'>Animated Text</GradientText>
            </CardContent>
          </AnimatedCard>
        </Box>
      )}

      {activeTab === 3 && (
        <Stack spacing={4}>
          <Alert severity='info'>
            <Typography variant='body2'>
              These code examples demonstrate how to implement the styled components shown above.
            </Typography>
          </Alert>

          <CodeBlock
            title='Basic Styled Component'
            description='Creating a styled button with gradient background and hover effects'
            language='typescript'
            code={`const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
}))`}
          />

          <CodeBlock
            title='Animated Keyframes'
            description='Defining custom animations using keyframes'
            language='typescript'
            code={`const fadeIn = keyframes\`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
\`

const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: \`\${fadeIn} 0.6s ease-out\`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}))`}
          />

          <CodeBlock
            title='Conditional Styling'
            description='Applying styles based on props or state'
            language='typescript'
            code={`const DynamicCard = styled(Card)<{ $isActive?: boolean }>(
  ({ theme, $isActive }) => ({
    transition: 'all 0.3s ease',
    border: $isActive 
      ? \`2px solid \${theme.palette.primary.main}\` 
      : '2px solid transparent',
    backgroundColor: $isActive 
      ? theme.palette.primary.light + '20' 
      : theme.palette.background.paper,
    transform: $isActive ? 'scale(1.02)' : 'scale(1)',
  })
)`}
          />

          <CodeBlock
            title='Responsive Design'
            description='Using theme breakpoints for responsive styling'
            language='typescript'
            code={`const ResponsiveBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}))`}
          />

          <CodeBlock
            title='Glass Morphism Effect'
            description='Creating modern glass-like appearance'
            language='typescript'
            code={`const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: 16,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
}))`}
          />

          <CodeBlock
            title='CSS-in-JS with css helper'
            description='Using the css helper for complex styles'
            language='typescript'
            code={`import { css } from '@mui/material/styles'

const cssExample = css\`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
\`

// Usage in component
<Box sx={cssExample}>
  Content here
</Box>`}
          />

          <CodeBlock
            title='Custom Theme'
            description='Creating and using custom themes'
            language='typescript'
            code={`import { createTheme, ThemeProvider } from '@mui/material/styles'

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B',
    },
    secondary: {
      main: '#4ECDC4',
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
  },
})

// Usage
<ThemeProvider theme={customTheme}>
  <Button variant="contained" color="primary">
    Custom Theme Button
  </Button>
</ThemeProvider>`}
          />
        </Stack>
      )}
    </Box>
  );
};
