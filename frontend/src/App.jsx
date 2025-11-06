import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './About/About';
import EventPage from './Events/EventPage';
import WorkShop from './WorkShop/WorkShop';
import TeamPage from './Team/TeamPage';
import Gallery from './Gallery/Gallery';
import Sponsors from './Sponsors/Sponsors';
import Contact from './Contact/Contact';
import SchedulePage from './Schedule/Schedule';
import Tournament from './Tournament/Tournament';

function App() {
  const [loading, setLoading] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    // Set a timeout to stop loading after 4 seconds (5 seconds - 1 second cut)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoCanPlay = () => {
    // Skip the first second of the video
    const video = document.getElementById('loaderVideo');
    if (video && !videoStarted) {
      video.currentTime = 1;
      setVideoStarted(true);
    }
  };

  return (
    <>
      {/* Video Loader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <video
            id="loaderVideo"
            autoPlay
            muted
            playsInline
            onCanPlay={handleVideoCanPlay}
            onEnded={() => setLoading(false)}
            onError={() => setLoading(false)}
            className="w-full h-full object-cover sm:object-contain md:object-cover"
          >
            <source src="/pragyaa2.mp4" type="video/mp4" />
            <source src="/pragyaa2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/workshops" element={<WorkShop />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;