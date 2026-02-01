import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load all pages for better performance
const HomePage = lazy(() => import("./Pages/HomePage"));
const About = lazy(() => import("./About/About"));
const EventPage = lazy(() => import("./Events/EventPage"));
const WorkShop = lazy(() => import("./WorkShop/WorkShop"));
const TeamPage = lazy(() => import("./Team/TeamPage"));
const Gallery = lazy(() => import("./Gallery/Gallery"));
const Sponsors = lazy(() => import("./Sponsors/Sponsors"));
const Contact = lazy(() => import("./Contact/Contact"));
const SchedulePage = lazy(() => import("./Schedule/Schedule"));
const Tournament = lazy(() => import("./Tournament/Tournament"));
const NotFound = lazy(() => import("./Pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div className="text-white text-xl animate-pulse">Loading...</div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if video has already been shown in this session
    const hasShownVideo = sessionStorage.getItem("videoShown");

    if (!hasShownVideo) {
      setLoading(true);
      // Mark video as shown for this session
      sessionStorage.setItem("videoShown", "true");
    }

    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Reduced timeout for better UX (3 seconds instead of 5)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleVideoCanPlay = () => {
    // Skip the first second and play optimally
    const video = document.getElementById("loaderVideo");
    if (video && !videoStarted) {
      video.currentTime = 1;
      video.playbackRate = 1.2; // Slightly faster playback
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
            preload="auto"
            onCanPlay={handleVideoCanPlay}
            onEnded={() => setLoading(false)}
            onError={() => setLoading(false)}
            className={`w-full h-full ${
              isMobile ? "object-contain" : "object-cover"
            }`}
          >
            <source src="/pragyaa2.mp4" type="video/mp4" />
            <source src="/pragyaa2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <Router>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
