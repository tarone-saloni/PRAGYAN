import React, { useState, useEffect } from "react";
import eventData from "./eventData";
import NeonEventCards from "./eventCards";
import BackgroundLayer from "../components/BackgroundLayer";
import Footer from "../Footer/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function EventPage() {
  const navigate = useNavigate();
  const { category, department } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Departmental");
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Handle URL parameters on mount and when they change
  useEffect(() => {
    if (category) {
      // Find the matching category key (case-insensitive)
      const categoryKey = Object.keys(eventData).find(
        key => key.toLowerCase() === category.toLowerCase()
      );
      if (categoryKey) {
        setSelectedCategory(categoryKey);
      }
    } else {
      // Default to Departmental if no category in URL
      setSelectedCategory("Departmental");
    }
    if (department) {
      setSelectedDepartment(decodeURIComponent(department));
    }
  }, [category, department]);

  const currentEvents = eventData[selectedCategory]?.events || [];

  // Get all unique departments from Departmental category
  const getDepartments = () => {
    if (selectedCategory !== "Departmental") return [];
    
    const deptMap = {};
    currentEvents.forEach((event) => {
      const deptName = event.title.split("(")[0].trim();
      
      if (!deptMap[deptName]) {
        deptMap[deptName] = {
          name: deptName,
          events: [],
          totalPrize: 0,
          eventCount: 0,
        };
      }
      
      deptMap[deptName].events.push(event);
      deptMap[deptName].totalPrize += event.prizePool || 0;
      deptMap[deptName].eventCount += 1;
    });

    return Object.values(deptMap);
  };

  // Get all unique creative event types from Creative category
  const getCreativeEvents = () => {
    if (selectedCategory !== "creative") return [];
    
    const creativeMap = {};
    currentEvents.forEach((event) => {
      const eventName = event.title.split("(")[0].trim();
      
      if (!creativeMap[eventName]) {
        creativeMap[eventName] = {
          name: eventName,
          events: [],
          totalPrize: 0,
          eventCount: 0,
        };
      }
      
      creativeMap[eventName].events.push(event);
      creativeMap[eventName].totalPrize += event.prizePool || 0;
      creativeMap[eventName].eventCount += 1;
    });

    return Object.values(creativeMap);
  };

  const departments = getDepartments();
  const creativeEvents = getCreativeEvents();

  // Get events for selected department or creative event
  const getSelectedEvents = () => {
    if (!selectedDepartment) return [];
    return currentEvents.filter((event) => 
      event.title.startsWith(selectedDepartment)
    );
  };

  const selectedEvents = getSelectedEvents();

  // Handle category change with URL update
  const handleCategoryChange = (key) => {
    setSelectedCategory(key);
    setSelectedDepartment(null);
    navigate(`/events/${key.toLowerCase()}`);
  };

  // Handle department selection with URL update
  const handleDepartmentSelect = (deptName) => {
    setSelectedDepartment(deptName);
    navigate(`/events/departmental/${encodeURIComponent(deptName)}`);
  };

  // Handle creative event selection with URL update
  const handleCreativeEventSelect = (eventName) => {
    setSelectedDepartment(eventName);
    navigate(`/events/creative/${encodeURIComponent(eventName)}`);
  };

  // Handle back to departments
  const handleBackToDepartments = () => {
    setSelectedDepartment(null);
    navigate('/events/departmental');
  };

  // Handle back to creative events
  const handleBackToCreativeEvents = () => {
    setSelectedDepartment(null);
    navigate('/events/creative');
  };

  // For non-departmental categories
  const uniqueTitles = Array.from(
    new Set(currentEvents.map((e) => e.title.split("(")[0].trim()))
  );

  return (
    <>
      <BackgroundLayer />

      <div className="relative min-h-screen bg-gray-950 overflow-x-hidden">
        <main className="relative z-20">
          {/* Back Button */}
          <div className="fixed top-4 left-4 z-30">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur border border-red-500/40 rounded-xl hover:border-red-400 transition"
            >
              <ArrowLeft className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-semibold text-sm">Back</span>
            </button>
          </div>

          {/* Title */}
          <section className="pt-20 pb-8 px-4 text-center">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[8px] xs:tracking-[10px] sm:tracking-[12px] md:tracking-[15px] my-3 sm:my-4 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase">
              PRAGYAA
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </section>

          <section className="py-6 px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-6">
              Events & Competitions
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              Explore flagship events, workshops, and competitions.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse mt-6"></div>
          </section>

          {/* Category Filters */}
          <section className="px-4 py-8">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12 max-w-4xl mx-auto">
              {Object.entries(eventData).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 ${
                    selectedCategory === key
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/50 scale-105"
                      : "bg-gray-900/50 text-gray-400 border border-gray-800 hover:text-red-400 hover:border-red-500/50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Departmental Events - Show Departments First */}
            {selectedCategory === "Departmental" && !selectedDepartment && (
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      onClick={() => handleDepartmentSelect(dept.name)}
                      className="group bg-gradient-to-br from-red-900/30 via-gray-900/50 to-red-900/30 border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 hover:shadow-red-500/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-red-500/60"
                    >
                      {/* Department Header */}
                      <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border-b-2 border-red-500/30 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                            {dept.name}
                          </h3>
                          <svg className="w-6 h-6 text-red-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Department Stats */}
                      <div className="p-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Total Events</span>
                            <span className="text-white font-bold text-lg">{dept.eventCount}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Total Prize Pool</span>
                            <span className="text-yellow-400 font-bold text-lg">₹{dept.totalPrize.toLocaleString()}</span>
                          </div>
                        </div>

                        {/* View Events Button */}
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <div className="text-center text-sm text-red-400 group-hover:text-red-300 font-semibold">
                            Click to view events →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Departmental Events - Show Selected Department Events */}
            {selectedCategory === "Departmental" && selectedDepartment && (
              <div className="max-w-6xl mx-auto">
                {/* Back to Departments Button */}
                <div className="mb-6">
                  <button
                    onClick={handleBackToDepartments}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur border border-red-500/40 rounded-xl hover:border-red-400 transition"
                  >
                    <ArrowLeft className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 font-semibold text-sm">Back to Departments</span>
                  </button>
                </div>

                <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8 tracking-wider">
                  {selectedDepartment}
                </h2>
                <NeonEventCards events={selectedEvents} />
              </div>
            )}

            {/* Creative Events - Show Event Types First */}
            {selectedCategory === "creative" && !selectedDepartment && (
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {creativeEvents.map((event, index) => (
                    <div
                      key={index}
                      onClick={() => handleCreativeEventSelect(event.name)}
                      className="group bg-gradient-to-br from-red-900/30 via-gray-900/50 to-red-900/30 border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 hover:shadow-red-500/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-red-500/60"
                    >
                      {/* Event Header */}
                      <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border-b-2 border-red-500/30 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                            {event.name}
                          </h3>
                          <svg className="w-6 h-6 text-red-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Event Stats */}
                      <div className="p-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Total Events</span>
                            <span className="text-white font-bold text-lg">{event.eventCount}</span>
                          </div>
                          {event.totalPrize > 0 && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Total Prize Pool</span>
                              <span className="text-yellow-400 font-bold text-lg">₹{event.totalPrize.toLocaleString()}</span>
                            </div>
                          )}
                        </div>

                        {/* View Events Button */}
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <div className="text-center text-sm text-red-400 group-hover:text-red-300 font-semibold">
                            Click to view details →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Creative Events - Show Selected Event */}
            {selectedCategory === "creative" && selectedDepartment && (
              <div className="max-w-6xl mx-auto">
                {/* Back to Creative Events Button */}
                <div className="mb-6">
                  <button
                    onClick={handleBackToCreativeEvents}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur border border-red-500/40 rounded-xl hover:border-red-400 transition"
                  >
                    <ArrowLeft className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 font-semibold text-sm">Back to Creative Events</span>
                  </button>
                </div>

                <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8 tracking-wider">
                  {selectedDepartment}
                </h2>
                <NeonEventCards events={selectedEvents} />
              </div>
            )}

            {/* Non-Departmental/Creative Events Display */}
            {selectedCategory !== "Departmental" && selectedCategory !== "creative" && (
              <div className="max-w-6xl mx-auto">
                {uniqueTitles.map((title) => {
                  const filtered = currentEvents.filter((e) =>
                    e.title.startsWith(title)
                  );

                  return (
                    <section key={title} className="mb-12">
                      <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-6 tracking-wider">
                        {title}
                      </h2>
                      <NeonEventCards events={filtered} />
                    </section>
                  );
                })}
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
