import { Route, Routes } from 'react-router-dom';
import { Home, CodeShowcase, Examples, CSSTips, TSTips, DesignSystem } from '../pages';
import { PATH_TS_TIPS, PATH_CSS_TIPS, PATH_EXAMPLES, PATH_SHOWCASE, PATH_DESIGN_SYSTEM } from './path';

export const AppRoutes = () => (
  <Routes>
    <Route
      path='/'
      element={<Home />}
    />
    <Route
      path={PATH_SHOWCASE}
      element={<CodeShowcase />}
    />
    <Route
      path={PATH_EXAMPLES}
      element={<Examples />}
    />

    <Route
      path={PATH_CSS_TIPS}
      element={<CSSTips />}
    />
    <Route
      path={PATH_TS_TIPS}
      element={<TSTips />}
    />
    <Route
      path={PATH_DESIGN_SYSTEM}
      element={<DesignSystem />}
    />
  </Routes>
);
