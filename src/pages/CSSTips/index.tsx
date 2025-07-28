import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Paper,
  Tabs,
  Tab,
  Alert,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  ExpandMore,
  Code,
  Palette,
  Brush,
  AutoAwesome,
  TrendingUp,
  CheckCircle,
  Info,
  Warning,
  Lightbulb,
} from '@mui/icons-material';
import CodeBlock from '../../components/CodeBlock';

// CSS-in-JS examples for demonstrations
const cssExamples = {
  flexboxCenter: `
    .flexbox-center {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 200px;
    }
  `,

  gridLayout: `
    .grid-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
  `,

  customScrollbar: `
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `,

  textGradient: `
    .text-gradient {
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: bold;
    }
  `,

  hoverEffects: `
    .hover-card {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .hover-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
  `,

  responsiveImages: `
    .responsive-image {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    /* Aspect ratio container */
    .aspect-ratio {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 ratio */
    }
    
    .aspect-ratio img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  darkMode: `
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :root {
        --bg-color: #1a1a1a;
        --text-color: #ffffff;
        --card-bg: #2d2d2d;
      }
    }
    
    /* Light mode */
    :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --card-bg: #f5f5f5;
    }
    
    body {
      background-color: var(--bg-color);
      color: var(--text-color);
    }
  `,

  animations: `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fade-in {
      animation: fadeIn 0.6s ease-out;
    }
    
    .stagger-children > * {
      animation: fadeIn 0.6s ease-out;
    }
    
    .stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
    .stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
    .stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
  `,

  accessibility: `
    /* Focus styles for accessibility */
    .accessible-button:focus {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }
    
    /* Skip link for screen readers */
    .skip-link {
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: white;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
    }
    
    .skip-link:focus {
      top: 6px;
    }
    
    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .button {
        border: 2px solid currentColor;
      }
    }
  `,

  performance: `
    /* Use transform instead of top/left for animations */
    .optimized-animation {
      transform: translateX(0);
      transition: transform 0.3s ease;
    }
    
    .optimized-animation:hover {
      transform: translateX(10px);
    }
    
    /* Use will-change sparingly */
    .will-change {
      will-change: transform;
    }
    
    /* Optimize paint operations */
    .paint-optimized {
      transform: translateZ(0); /* Force hardware acceleration */
    }
  `,

  modernCSS: `
    /* CSS Grid with auto-fit */
    .auto-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }
    
    /* Container queries (modern browsers) */
    @container (min-width: 400px) {
      .container-responsive {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
    
    /* Logical properties */
    .logical-props {
      margin-block: 1rem;
      padding-inline: 1rem;
      border-block-end: 1px solid #ccc;
    }
    
    /* CSS custom properties with fallbacks */
    .custom-props {
      color: #333; /* Fallback */
      color: var(--text-color, #333);
    }
  `,
};

export const CSSTips: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tips = [
    {
      title: 'Use Flexbox for Centering',
      description: 'The easiest way to center content both horizontally and vertically',
      code: cssExamples.flexboxCenter,
      category: 'Layout',
    },
    {
      title: 'CSS Grid for Responsive Layouts',
      description: 'Create flexible, responsive layouts with minimal code',
      code: cssExamples.gridLayout,
      category: 'Layout',
    },
    {
      title: 'Custom Scrollbars',
      description: 'Style scrollbars for better user experience',
      code: cssExamples.customScrollbar,
      category: 'Styling',
    },
    {
      title: 'Gradient Text',
      description: 'Apply gradients to text for modern design effects',
      code: cssExamples.textGradient,
      category: 'Styling',
    },
    {
      title: 'Smooth Hover Effects',
      description: 'Add smooth transitions for interactive elements',
      code: cssExamples.hoverEffects,
      category: 'Interactions',
    },
    {
      title: 'Responsive Images',
      description: 'Ensure images scale properly across all devices',
      code: cssExamples.responsiveImages,
      category: 'Responsive',
    },
    {
      title: 'Dark Mode Support',
      description: 'Implement automatic dark mode detection',
      code: cssExamples.darkMode,
      category: 'Accessibility',
    },
    {
      title: 'CSS Animations',
      description: 'Create smooth animations with staggered children',
      code: cssExamples.animations,
      category: 'Animations',
    },
    {
      title: 'Accessibility Best Practices',
      description: 'Ensure your CSS supports screen readers and keyboard navigation',
      code: cssExamples.accessibility,
      category: 'Accessibility',
    },
    {
      title: 'Performance Optimizations',
      description: 'Optimize CSS for better performance',
      code: cssExamples.performance,
      category: 'Performance',
    },
    {
      title: 'Modern CSS Features',
      description: 'Leverage the latest CSS features for better code',
      code: cssExamples.modernCSS,
      category: 'Modern',
    },
  ];

  const categories = [
    { name: 'All Tips', icon: <Code /> },
    { name: 'Layout', icon: <Brush /> },
    { name: 'Styling', icon: <Palette /> },
    { name: 'Interactions', icon: <AutoAwesome /> },
    { name: 'Responsive', icon: <TrendingUp /> },
    { name: 'Accessibility', icon: <CheckCircle /> },
    { name: 'Performance', icon: <Lightbulb /> },
    { name: 'Modern', icon: <Info /> },
  ];

  const filteredTips = activeTab === 0 ? tips : tips.filter(tip => tip.category === categories[activeTab].name);

  return (
    <Box>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
      >
        CSS Tips & Tricks
      </Typography>

      <Typography
        variant='h6'
        color='text.secondary'
        paragraph
      >
        Essential CSS techniques and best practices for modern web development
      </Typography>

      <Alert
        severity='info'
        sx={{ mb: 4 }}
      >
        <Typography variant='body2'>
          These CSS tips cover everything from basic layout techniques to advanced performance optimizations. Each tip
          includes practical code examples you can use in your projects.
        </Typography>
      </Alert>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant='scrollable'
        scrollButtons='auto'
        sx={{ mb: 4 }}
      >
        {categories.map(category => (
          <Tab
            key={category.name}
            label={category.name}
            icon={category.icon}
            iconPosition='start'
          />
        ))}
      </Tabs>

      <Stack spacing={3}>
        {filteredTips.map((tip, index) => (
          <Card
            key={index}
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Chip
                  label={tip.category}
                  size='small'
                  color='primary'
                  sx={{ mr: 2 }}
                />
                <Typography
                  variant='h6'
                  component='h3'
                >
                  {tip.title}
                </Typography>
              </Box>

              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                {tip.description}
              </Typography>

              <CodeBlock
                title='CSS Code'
                language='css'
                code={tip.code}
                showLineNumbers={false}
              />
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Paper sx={{ p: 4, mt: 6 }}>
        <Typography
          variant='h5'
          component='h2'
          gutterBottom
        >
          CSS Best Practices
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='h6'>Organization & Structure</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Use CSS custom properties for consistent theming'
                  secondary='Define colors, spacing, and other values as CSS variables for easy maintenance'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Follow a consistent naming convention'
                  secondary='Use BEM, CSS Modules, or another methodology consistently'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color='success' />
                </ListItemIcon>
                <ListItemText
                  primary='Group related styles together'
                  secondary='Organize CSS by component or feature, not by property type'
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='h6'>Performance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <Warning color='warning' />
                </ListItemIcon>
                <ListItemText
                  primary='Avoid expensive properties in animations'
                  secondary='Use transform and opacity instead of changing layout properties'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Warning color='warning' />
                </ListItemIcon>
                <ListItemText
                  primary='Minimize CSS specificity conflicts'
                  secondary='Use classes instead of IDs and avoid deep nesting'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Warning color='warning' />
                </ListItemIcon>
                <ListItemText
                  primary='Optimize critical rendering path'
                  secondary='Inline critical CSS and defer non-critical styles'
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='h6'>Accessibility</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <Info color='info' />
                </ListItemIcon>
                <ListItemText
                  primary='Ensure sufficient color contrast'
                  secondary='Use tools to verify text meets WCAG contrast requirements'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Info color='info' />
                </ListItemIcon>
                <ListItemText
                  primary="Don't rely solely on color to convey information"
                  secondary='Use icons, text, or patterns in addition to color'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Info color='info' />
                </ListItemIcon>
                <ListItemText
                  primary='Provide focus indicators'
                  secondary='Ensure keyboard navigation is visible and clear'
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='h6'>Responsive Design</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <TrendingUp color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Use relative units'
                  secondary='Prefer rem, em, %, and viewport units over fixed pixels'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUp color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Design mobile-first'
                  secondary='Start with mobile styles and enhance for larger screens'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUp color='primary' />
                </ListItemIcon>
                <ListItemText
                  primary='Test across different devices'
                  secondary="Don't rely solely on browser dev tools for responsive testing"
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Paper>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography
          variant='h5'
          component='h2'
          gutterBottom
        >
          Useful CSS Tools & Resources
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                CSS Validators
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='W3C CSS Validator'
                    secondary='Official CSS validation service'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='CSS Lint'
                    secondary='Code quality tool for CSS'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Stylelint'
                    secondary='Modern CSS linter'
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                CSS Generators
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='CSS Grid Generator'
                    secondary='Visual grid layout tool'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Flexbox Froggy'
                    secondary='Learn flexbox interactively'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='CSS Gradient Generator'
                    secondary='Create beautiful gradients'
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Browser Support
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='Can I Use'
                    secondary='Browser compatibility tables'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='MDN Web Docs'
                    secondary='Comprehensive CSS documentation'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='CSS-Tricks'
                    secondary='CSS tutorials and examples'
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
              >
                Performance Tools
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='Chrome DevTools'
                    secondary='CSS performance profiling'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Lighthouse'
                    secondary='Performance auditing'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='WebPageTest'
                    secondary='Detailed performance analysis'
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </Box>
  );
};
