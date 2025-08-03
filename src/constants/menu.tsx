import { AutoAwesome, Code, Home, IntegrationInstructions, Lightbulb, Style } from '@mui/icons-material';
import type { NavItem } from '../types/menu';
import {
  PATH_CSS_TIPS,
  PATH_DESIGN_SYSTEM,
  PATH_EXAMPLES,
  PATH_ROOT,
  PATH_SHOWCASE,
  PATH_TS_TIPS,
} from '../router/path';

export const navItems: NavItem[] = [
  {
    path: PATH_ROOT,
    label: 'Home',
    icon: <Home />,
    description: 'Welcome to Code Shelf',
  },
  {
    path: PATH_SHOWCASE,
    label: 'Code Showcase',
    icon: <Code />,
    description: 'Share and display code snippets',
  },
  {
    path: PATH_EXAMPLES,
    label: 'Examples',
    icon: <Lightbulb />,
    description: 'Interactive code examples',
  },
  {
    path: PATH_CSS_TIPS,
    label: 'CSS Tips',
    icon: <Style />,
    description: 'CSS techniques and best practices',
  },
  {
    path: PATH_TS_TIPS,
    label: 'TypeScript Tips',
    icon: <IntegrationInstructions />,
    description: 'TypeScript patterns and tips',
  },
  {
    path: PATH_DESIGN_SYSTEM,
    label: 'Design System',
    icon: <AutoAwesome />,
    description: 'Design patterns',
  },
];
