import { createBrowserRouter } from 'react-router-dom';
import { CodeShowcase, Tips, DesignSystem, Examples, Home, UsefulLinks } from '../pages';
import { PATH_TIPS, PATH_DESIGN_SYSTEM, PATH_EXAMPLES, PATH_ROOT, PATH_SHOWCASE, PATH_USEFUL_LINKS } from './path';
import { Layout } from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/code-shelf/',
    element: <Layout />,
    children: [
      { path: PATH_ROOT, element: <Home /> },
      { path: PATH_SHOWCASE, element: <CodeShowcase /> },
      { path: PATH_EXAMPLES, element: <Examples /> },
      { path: PATH_TIPS, element: <Tips /> },
      { path: PATH_USEFUL_LINKS, element: <UsefulLinks /> },
      { path: PATH_DESIGN_SYSTEM, element: <DesignSystem /> },
      { path: PATH_SHOWCASE, element: <CodeShowcase /> },
      { path: PATH_SHOWCASE, element: <CodeShowcase /> },
    ],
  },
]);

export default router;
