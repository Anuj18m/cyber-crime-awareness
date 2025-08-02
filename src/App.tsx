import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ReportPage from './pages/ReportPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import TeamPage from './pages/TeamPage';
import PageTransition from './components/PageTransition';

function App() {
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-x-hidden">
      <Navbar />
      <PageTransition transitioning={transitioning}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </PageTransition>
    </div>
  );
}

export default App;