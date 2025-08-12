import { Code, Link, Lightbulb, AutoAwesome, TipsAndUpdates } from '@mui/icons-material';
import type { Feature } from '../types/data';
import { PATH_USEFUL_LINKS, PATH_TIPS, PATH_EXAMPLES, PATH_SHOWCASE, PATH_DESIGN_SYSTEM } from '../router/path';

const defaultIconStyle = { fontSize: 40 };

export const features: Feature[] = [
  {
    icon: <Code sx={{ ...defaultIconStyle, color: 'primary.main' }} />,
    title: 'Code Showcase',
    description: 'Share and display your code snippets with beautiful syntax highlighting and copy functionality.',
    path: PATH_SHOWCASE,
  },
  {
    icon: <Lightbulb sx={{ ...defaultIconStyle, color: 'secondary.main' }} />,
    title: 'Live Examples',
    description: 'See your code in action with interactive examples and live previews.',
    path: PATH_EXAMPLES,
  },
  {
    icon: <TipsAndUpdates sx={{ ...defaultIconStyle, color: 'warning.main' }} />,
    title: 'Tips',
    description: 'Learn useful tips and best practice.',
    path: PATH_TIPS,
  },
  {
    icon: <Link sx={{ ...defaultIconStyle, color: 'info.main' }} />,
    title: 'Useful Links',
    description: 'Collection of useful links for work in web development.',
    path: PATH_USEFUL_LINKS,
  },
  {
    icon: <AutoAwesome sx={{ ...defaultIconStyle, color: 'error.main' }} />,
    title: 'Design System',
    description: 'Comprehensive component library and design patterns for consistent UI development.',
    path: PATH_DESIGN_SYSTEM,
  },
];
