import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Impact from './pages/Impact';
import Article from './pages/Article';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Navbar onContactClick={openContact} />
          <main>
            <Routes>
              <Route path="/" element={<Home onContactClick={openContact} />} />
              <Route path="/impacto-ambiental" element={<Impact onContactClick={openContact} />} />
              <Route path="/news/cbit-rsb-partnership" element={<Article />} />
            </Routes>
          </main>
          
          <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
