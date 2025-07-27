import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import CodeShowcase from './pages/CodeShowcase'
import Examples from './pages/Examples'
import StyledComponents from './pages/StyledComponents'
import CSSTips from './pages/CSSTips'
import TSTips from './pages/TSTips'
import DesignSystem from './pages/DesignSystem'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<CodeShowcase />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/styled-components" element={<StyledComponents />} />
          <Route path="/css-tips" element={<CSSTips />} />
          <Route path="/ts-tips" element={<TSTips />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
