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
const Guest = lazy(() => import("./Guest/Guest"));
const SchedulePage = lazy(() => import("./Schedule/Schedule"));
const SpecialEvent = lazy(() => import("./SpecialEvent/SpecialEvent"));
const NotFound = lazy(() => import("./Pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        {/* Spinning circle */}
        <div className="w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin"></div>
        {/* Inner pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-red-500/20 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-2">
          PRAGYAA 2026
        </h2>
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
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

    // Reduced timeout for better UX (2.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

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
              <Route path="/events/:category" element={<EventPage />} />
              <Route path="/events/:category/:department" element={<EventPage />} />
              <Route path="/workshops" element={<WorkShop />} />
              <Route path="/junior-scientists" element={<SpecialEvent />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/guest" element={<Guest />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
