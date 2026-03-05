import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Sayfalar
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard'; 
import LoginPage from './pages/LoginPage';

// Bileşenler
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Layout: Navbar + Footer
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Eğer login sayfasındaysak Navbar ve Footer yok
  const hideNavFooter = location.pathname === '/login';
  
  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;