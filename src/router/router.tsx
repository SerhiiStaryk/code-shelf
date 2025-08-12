import { createBrowserRouter } from 'react-router-dom';
import { CodeShowcase, CSSTips, DesignSystem, Examples, Home, TSTips } from '../pages';
import { PATH_CSS_TIPS, PATH_DESIGN_SYSTEM, PATH_EXAMPLES, PATH_ROOT, PATH_SHOWCASE, PATH_TS_TIPS } from './path';
import { Layout } from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/code-shelf/',
    element: <Layout />,
    children: [
      { path: PATH_ROOT, element: <Home /> },
      { path: PATH_SHOWCASE, element: <CodeShowcase /> },
      { path: PATH_EXAMPLES, element: <Examples /> },
      { path: PATH_CSS_TIPS, element: <CSSTips /> },
      { path: PATH_TS_TIPS, element: <TSTips /> },
      { path: PATH_DESIGN_SYSTEM, element: <DesignSystem /> },
      { path: PATH_SHOWCASE, element: <CodeShowcase /> },
      { path: PATH_SHOWCASE, element: <CodeShowcase /> },
    ],
  },
]);

export default router;
