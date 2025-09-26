import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// @ts-ignore
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Dashboards from './pages/Dashboards';
import DashboardDetail from './pages/DashboardDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboards">
            <Route index element={<Dashboards />} />
            <Route path=":id" element={<DashboardDetail />} />
          </Route>
          
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 - Keep this last */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
