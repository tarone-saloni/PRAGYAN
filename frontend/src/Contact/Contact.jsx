import React from 'react'
import { ArrowLeft, Mail, Phone, Clock, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import BackgroundLayer from '../components/BackgroundLayer'

function Contact() {
  const navigate = useNavigate()

  const contactInfo = [
    {
      id: 1,
      title: "Email Address",
      value: "technicalsecretary@sggs.ac.in",
      icon: <Mail className="w-8 h-8 text-red-400" />,
      link: "mailto:technicalsecretary@sggs.ac.in"
    },
    {
      id: 2,
      title: "Phone Number",
      value: "+91 2462 228342",
      icon: <Phone className="w-8 h-8 text-red-500" />,
      link: "tel:+912462228342"
    },
    {
      id: 3,
      title: "Business Hours",
      value: "Mon - Fri: 9AM - 6PM",
      icon: <Clock className="w-8 h-8 text-red-600" />,
      link: null
    }
  ]

  const handleBack = () => {
    navigate(-1)
  }

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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get in touch with us for any inquiries about PRAGYAA 2026
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="bg-gray-900/95 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105"
                >
                  <div className="mb-4">
                    {info.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {info.title}
                  </h3>

                  <p className="text-lg font-semibold text-gray-300 mb-4">
                    {info.value}
                  </p>

                  {info.link && (
                    <a
                      href={info.link}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                    >
                      {info.title === 'Email Address' ? 'Send Email' : 'Call Now'}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="bg-gray-900/95 backdrop-blur-xl border border-red-500/20 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <MapPin size={20} />
                  Our Location
                </h3>
              </div>
              <div className="h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9097757547947!2d77.29045427586921!3d19.111613650852224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29b9903d053d%3A0x2c5238a90ab55c03!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1766939429340!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SGGSIET Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default Contact