import React from "react";
import { ArrowLeft, Mail, Phone, Clock, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function Guest() {
  const navigate = useNavigate();

  const currentGuest = {
    name: "Dr. APJ Abdul Kalam",
    title: "Chief Guest 2026",
    designation: "Former President of India & Missile Man",
    image: "/tikale.webp", // Replace with actual guest image
    description: "A visionary scientist and leader who inspired millions with his dedication to science and education.",
  };

  const previousGuests = [
    {
      id: 1,
      name: "Dr. Vijay Bhatkar",
      year: "2025",
      designation: "Father of Indian Supercomputing",
      image: "/unnamed.jpg",
    },
    {
      id: 2,
      name: "Dr. Raghunath Mashelkar",
      year: "2024",
      designation: "Former Director General of CSIR",
      image: "/unnamed-4.jpg",
    },
    {
      id: 3,
      name: "Prof. Ashok Jhunjhunwala",
      year: "2023",
      designation: "IIT Madras Professor & Innovator",
      image: "/unnamed-5.jpg",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      title: "Email Address",
      value: "technicalsecretary@sggs.ac.in",
      icon: <Mail className="w-8 h-8 text-red-400" />,
      link: "mailto:technicalsecretary@sggs.ac.in",
    },
    {
      id: 2,
      title: "Phone Number",
      value: "+91 2462 228342",
      icon: <Phone className="w-8 h-8 text-red-500" />,
      link: "tel:+912462228342",
    },
    {
      id: 3,
      title: "Business Hours",
      value: "Mon - Fri: 9AM - 6PM",
      icon: <Clock className="w-8 h-8 text-red-600" />,
      link: null,
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const getColorClasses = (color) => {
    const colors = {
      cyan: "from-cyan-500 to-cyan-600",
      purple: "from-purple-500 to-purple-600",
      pink: "from-pink-500 to-pink-600",
      yellow: "from-yellow-500 to-yellow-600",
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={handleBack}
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-xl border-2 border-red-500/40 rounded-2xl hover:border-red-500/80 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <ArrowLeft className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-red-500 group-hover:text-red-400 font-semibold text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>

        <section className="pt-10 pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[8px] xs:tracking-[10px] sm:tracking-[12px] md:tracking-[15px] my-3 sm:my-4 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase">
              PRAGYAA
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-6 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-6 animate-gradient">
              Our Distinguished Guests
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Meet our esteemed guests who have graced PRAGYAA over the years
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Current Special Guest Section */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black tracking-wider text-white uppercase mb-4 flex items-center justify-center gap-3">
                <Star className="w-10 h-10 text-yellow-400 animate-pulse" />
                Special Guest 2026
                <Star className="w-10 h-10 text-yellow-400 animate-pulse" />
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-500/40 rounded-3xl overflow-hidden hover:border-red-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/30 hover:scale-[1.02]">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Guest Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative overflow-hidden rounded-2xl border-4 border-red-500/50 group-hover:border-red-500 transition-all duration-300">
                    <img
                      src={currentGuest.image}
                      alt={currentGuest.name}
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Guest Info */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-lg">
                      {currentGuest.title}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    {currentGuest.name}
                  </h3>

                  <p className="text-xl md:text-2xl font-semibold text-red-400">
                    {currentGuest.designation}
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {currentGuest.description}
                  </p>

                  <div className="flex gap-4 pt-4">
                    <div className="flex-1 bg-gray-800/50 rounded-xl p-4 border border-red-500/20 hover:border-red-500/40 transition-all">
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                        Year
                      </p>
                      <p className="text-2xl font-bold text-white">2026</p>
                    </div>
                    <div className="flex-1 bg-gray-800/50 rounded-xl p-4 border border-red-500/20 hover:border-red-500/40 transition-all">
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                        Event
                      </p>
                      <p className="text-2xl font-bold text-white">PRAGYAA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Guests Section */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black tracking-wider text-white uppercase mb-4">
                Previous Distinguished Guests
              </h2>
              <p className="text-lg text-gray-400">
                Honoring those who have inspired us in the past
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {previousGuests.map((guest) => (
                <div
                  key={guest.id}
                  className="group bg-gray-900/95 backdrop-blur-xl border border-red-500/20 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105"
                >
                  {/* Guest Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white font-bold rounded-full text-xs">
                        {guest.year}
                      </span>
                    </div>
                  </div>

                  {/* Guest Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {guest.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {guest.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Guest;
