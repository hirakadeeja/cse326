import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeBook from './pages/RecipeBook';
import PhotoGallery from './pages/PhotoGallery';
import CulturalProfile from './pages/CulturalProfile';
import Forum from './pages/Forum';
import Events from './pages/Events';
import Traditions from './pages/Traditions';
import VerifyNewsletter from './pages/VerifyNewsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeBook />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/profile" element={<CulturalProfile />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/events" element={<Events />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/verify-newsletter" element={<VerifyNewsletter />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}