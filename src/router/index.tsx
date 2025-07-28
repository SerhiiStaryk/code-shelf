import { Route, Routes } from 'react-router-dom';
import { Home, CodeShowcase, Examples, StyledComponents, CSSTips, TSTips, DesignSystem } from '../pages';

export const AppRoutes = () => (
  <Routes>
    <Route
      path='/'
      element={<Home />}
    />
    <Route
      path='/showcase'
      element={<CodeShowcase />}
    />
    <Route
      path='/examples'
      element={<Examples />}
    />
    <Route
      path='/styled-components'
      element={<StyledComponents />}
    />
    <Route
      path='/css-tips'
      element={<CSSTips />}
    />
    <Route
      path='/ts-tips'
      element={<TSTips />}
    />
    <Route
      path='/design-system'
      element={<DesignSystem />}
    />
  </Routes>
);
