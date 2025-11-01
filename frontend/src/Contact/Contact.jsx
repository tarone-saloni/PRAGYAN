import React, { useState } from 'react'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, User, MessageSquare, CheckCircle, Star, Heart, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Contact() {
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      id: 1,
      title: "Email Address",
      value: "contact@pragyaa.com",
      description: "Send us an email anytime",
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      link: "mailto:contact@pragyaa.com",
      color: "cyan"
    },
    {
      id: 2,
      title: "Phone Number",
      value: "+1 (555) 123-4567",
      description: "Call us during business hours",
      icon: <Phone className="w-8 h-8 text-purple-400" />,
      link: "tel:+15551234567",
      color: "purple"
    },
    {
      id: 3,
      title: "Office Address",
      value: "123 Event Street, City, State 12345",
      description: "Visit our office location",
      icon: <MapPin className="w-8 h-8 text-pink-400" />,
      link: "https://maps.google.com",
      color: "pink"
    },
    {
      id: 4,
      title: "Business Hours",
      value: "Mon - Fri: 9AM - 6PM",
      description: "We're here to help during these hours",
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      link: null,
      color: "yellow"
    }
  ]

  const contactReasons = [
    { id: 1, text: "Get personalized event planning assistance", icon: "🎯" },
    { id: 2, text: "Request custom event solutions", icon: "⚡" },
    { id: 3, text: "Explore partnership opportunities", icon: "🤝" },
    { id: 4, text: "Get technical support and guidance", icon: "🛠️" },
    { id: 5, text: "Media and press inquiries", icon: "📰" },
    { id: 6, text: "Sponsorship opportunities", icon: "💼" }
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
    
    console.log('Form submitted:', formData)
    
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
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={handleBack}
            className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs tracking-[4px] text-cyan-400 mb-6 uppercase">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="animate-pulse">Get in Touch</span>
              <Heart className="w-4 h-4 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6 animate-gradient">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We'd love to hear from you. Get in touch with us for any inquiries, support, or collaboration opportunities.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={info.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl p-6 transition-all duration-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105">
                    
                    {/* Card Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`bg-gradient-to-r ${getColorClasses(info.color)} text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
                        <Star className="w-3 h-3" />
                        #{info.id}
                      </span>
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        {info.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {info.title}
                    </h3>

                    {/* Value */}
                    <p className="text-lg font-semibold text-gray-300 mb-2">
                      {info.value}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {info.description}
                    </p>

                    {/* Animated background particles */}
                    {hoveredIndex === index && [...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `particleFloat ${2 + Math.random() * 3}s infinite ease-in-out`,
                          animationDelay: `${Math.random() * 2}s`,
                          opacity: 0.9
                        }}
                      />
                    ))}

                    {/* Action Button */}
                    {info.link && (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${getColorClasses(info.color)} rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50`}
                      >
                        {info.title === 'Email Address' && 'Send Email'}
                        {info.title === 'Phone Number' && 'Call Now'}
                        {info.title === 'Office Address' && 'View Map'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form & Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-700 hover:border-cyan-500/60">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <MessageSquare size={24} />
                      Send us a Message
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2 text-cyan-400" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2 text-cyan-400" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        <Sparkles className="w-4 h-4 inline mr-2 text-cyan-400" />
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="Enter message subject"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2 text-cyan-400" />
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 resize-none text-white placeholder-gray-400"
                        placeholder="Enter your message here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Side Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-700 hover:border-cyan-500/60">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <MapPin size={20} />
                        Our Location
                      </h3>
                    </div>
                    <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-2 animate-bounce" />
                        <p className="text-gray-300 font-medium">Interactive Map</p>
                        <p className="text-sm text-gray-400">Map integration coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-700 hover:border-cyan-500/60">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <CheckCircle size={20} />
                        Why Contact Us?
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {contactReasons.map((reason) => (
                          <div
                            key={reason.id}
                            className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 border-l-4 border-cyan-500"
                          >
                            <span className="text-2xl flex-shrink-0">{reason.icon}</span>
                            <div>
                              <span className="text-gray-300 font-medium text-sm leading-relaxed">
                                {reason.text}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { value: "24/7", label: "Support Available", color: "cyan" },
                { value: "<2h", label: "Average Response Time", color: "purple" },
                { value: "1000+", label: "Happy Customers", color: "pink" }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl p-6 text-center transition-all duration-700 hover:border-cyan-500/60 hover:scale-105">
                    <h3 className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</h3>
                    <p className="text-gray-300 font-medium">{stat.label}</p>
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.9; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.6; }
        }
        
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