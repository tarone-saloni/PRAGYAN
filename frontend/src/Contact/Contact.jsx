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
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      link: "mailto:technicalsecretary@sggs.ac.in"
    },
    {
      id: 2,
      title: "Phone Number",
      value: "+91 2462 228342",
      icon: <Phone className="w-8 h-8 text-purple-400" />,
      link: "tel:+912462228342"
    },
    {
      id: 3,
      title: "Business Hours",
      value: "Mon - Fri: 9AM - 6PM",
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      link: null
    }
  ]

  const handleBack = () => {
    navigate(-1)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const getColorClasses = (color) => {
    const colors = {
      cyan: "from-cyan-500 to-cyan-600",
      purple: "from-purple-500 to-purple-600",
      pink: "from-pink-500 to-pink-600",
      yellow: "from-yellow-500 to-yellow-600"
    }
    return colors[color] || colors.cyan
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative">
      {/* Background Layer */}
      <BackgroundLayer />
      
      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={handleBack}
            className="flex items-center gap-3 px-6 py-3 bg-gray-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">
              Back
            </span>
          </button>
        </div>

        <section className="pt-10 pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[8px] xs:tracking-[10px] sm:tracking-[12px] md:tracking-[15px] my-3 sm:my-4 bg-gradient-to-b from-white via-cyan-200 to-gray-600 bg-clip-text text-transparent uppercase">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get in touch with us for any inquiries about PRAGYAA 2026
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6"
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
                      className="inline-block px-4 py-2 bg-cyan-500 rounded-lg font-semibold text-white transition-colors duration-300"
                    >
                      {info.title === 'Email Address' ? 'Send Email' : 'Call Now'}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4">
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
    </div>
  )
}

export default Contact