import { AutoAwesome, Code, Home, IntegrationInstructions, Lightbulb, Palette, Style } from '@mui/icons-material';
import type { NavItem } from '../types/menu';

export const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Home',
    icon: <Home />,
    description: 'Welcome to Code Showcase',
  },
  {
    path: '/showcase',
    label: 'Code Showcase',
    icon: <Code />,
    description: 'Share and display code snippets',
  },
  {
    path: '/examples',
    label: 'Examples',
    icon: <Lightbulb />,
    description: 'Interactive code examples',
  },
  {
    path: '/styled-components',
    label: 'Styled Components',
    icon: <Palette />,
    description: 'Material-UI styling patterns',
  },
  {
    path: '/css-tips',
    label: 'CSS Tips',
    icon: <Style />,
    description: 'CSS techniques and best practices',
  },
  {
    path: '/ts-tips',
    label: 'TypeScript Tips',
    icon: <IntegrationInstructions />,
    description: 'TypeScript patterns and tips',
  },
  {
    path: '/design-system',
    label: 'Design System',
    icon: <AutoAwesome />,
    description: 'Component library and design patterns',
  },
];
