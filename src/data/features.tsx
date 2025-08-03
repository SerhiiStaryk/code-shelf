import { Code, Style, Lightbulb, AutoAwesome, IntegrationInstructions } from '@mui/icons-material';
import type { Feature } from '../types/data';
import { PATH_TS_TIPS, PATH_CSS_TIPS, PATH_EXAMPLES, PATH_SHOWCASE, PATH_DESIGN_SYSTEM } from '../router/path';

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
    icon: <Style sx={{ ...defaultIconStyle, color: 'warning.main' }} />,
    title: 'CSS Tips',
    description: 'Learn essential CSS techniques and best practices for modern web development.',
    path: PATH_CSS_TIPS,
  },
  {
    icon: <IntegrationInstructions sx={{ ...defaultIconStyle, color: 'info.main' }} />,
    title: 'TypeScript Tips',
    description: 'Master TypeScript with advanced patterns, type safety, and best practices.',
    path: PATH_TS_TIPS,
  },
  {
    icon: <AutoAwesome sx={{ ...defaultIconStyle, color: 'error.main' }} />,
    title: 'Design System',
    description: 'Comprehensive component library and design patterns for consistent UI development.',
    path: PATH_DESIGN_SYSTEM,
  },
];
