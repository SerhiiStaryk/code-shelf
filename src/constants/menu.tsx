import { AutoAwesome, Code, Home, Link, Lightbulb, TipsAndUpdates } from '@mui/icons-material';
import type { NavItem } from '../types/menu';
import {
  PATH_TIPS,
  PATH_DESIGN_SYSTEM,
  PATH_EXAMPLES,
  PATH_ROOT,
  PATH_SHOWCASE,
  PATH_USEFUL_LINKS,
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
    path: PATH_TIPS,
    label: 'Tips',
    icon: <TipsAndUpdates />,
    description: 'Useful tips and tricks',
  },
  {
    path: PATH_USEFUL_LINKS,
    label: 'Useful Links',
    icon: <Link />,
    description: 'Collection of useful links for work in web development',
  },
  {
    path: PATH_DESIGN_SYSTEM,
    label: 'Design System',
    icon: <AutoAwesome />,
    description: 'Design patterns',
  },
];
