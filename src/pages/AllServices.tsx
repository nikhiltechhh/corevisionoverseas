import React, { useEffect, useState } from 'react';
import { 
  GraduationCap, Building2, HandCoins, FileCheck, 
  TrendingUp, BookOpen, ClipboardList, Award, 
  DollarSign, MessageSquare, Plane, Shield, 
  Home, Globe, Users, Phone, Heart, 
  FileText, Languages, Briefcase, UserCheck
} from 'lucide-react';

const AllServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allServices = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Personalized Guidance",
      description: "One-on-one counselling tailored to your unique academic and career goals."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Counseling",
      description: "Expert guidance to help you choose the right career path aligned with your interests."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Country/Course Selection",
      description: "Strategic assistance in selecting the best country and course for your future."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "University Shortlisting",
      description: "Comprehensive shortlisting of universities matching your profile and preferences."
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Application Assistance",
      description: "End-to-end support throughout the university application process."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "100% Guarantee in Top Universities",
      description: "Assured admission assistance to prestigious universities worldwide."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Scholarship Assistance",
      description: "Help identifying and applying for scholarships to fund your education."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "GRE, TOEFL, IELTS Assistance",
      description: "Comprehensive support and preparation guidance for standardized tests."
    },
    {
      icon: <HandCoins className="w-6 h-6" />,
      title: "Financial Advice",
      description: "Expert consultation on education loans and financial planning."
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Transportation Support Post Landing",
      description: "Assistance with travel arrangements after you arrive at your destination."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Visa Application Assistance",
      description: "Complete support with visa documentation and application procedures."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Visa Counseling & Mock Interviews",
      description: "Preparation and practice sessions for visa interviews to boost confidence."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Immigration Counseling for USA",
      description: "Specialized guidance for US immigration processes and requirements."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Health Insurance Guidance",
      description: "Support in selecting and obtaining the right health insurance coverage."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pre & Post-Landing Support",
      description: "Continuous assistance before and after you reach your destination country."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Visa Slot Booking",
      description: "Help with scheduling visa appointment slots at the earliest availability."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Accommodation Support",
      description: "Assistance in finding suitable housing options near your university."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cultural Orientation",
      description: "Preparation for adapting to new cultural environments and social norms."
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Language Support",
      description: "Resources and guidance for improving language proficiency."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Networking Opportunities",
      description: "Connect with alumni and peers to build your professional network."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Parent Counseling",
      description: "Dedicated sessions to address parental concerns and questions."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Regular Updates",
      description: "Consistent communication keeping you informed throughout the process."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Emergency Support",
      description: "24/7 assistance for urgent matters and emergency situations."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "SOP & LOR Preparation",
      description: "Professional assistance in crafting compelling statements of purpose and letters of recommendation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-700 hover:scale-110"
          style={{
            backgroundImage: "url('https://blog.e2language.com/wp-content/uploads/2018/04/Australian-English-vs.-American-English-vs.-British-English.png')"
          }}
        >
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-slate-900/90 animate-pulse-slow"></div>
          
          {/* Decorative Dots Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4 pb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-orange-500"></div>
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Complete Solutions</span>
              <div className="w-12 h-0.5 bg-orange-500"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Our Complete
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Service Range
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support for your overseas education journey
            </p>
            
            {/* Stats Row */}
            <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">24+</div>
                <div className="text-sm text-gray-300 mt-1">Services</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">970+</div>
                <div className="text-sm text-gray-300 mt-1">Happy Students</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-300 mt-1">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Curved Bottom Edge - Multiple Wave Styles */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          {/* Wave 1 - Primary */}
          <svg 
            className="relative block w-full h-24 md:h-32" 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,64 C240,20 480,20 720,64 C960,108 1200,108 1440,64 L1440,120 L0,120 Z" 
              className="fill-gray-50"
            ></path>
          </svg>
          
          {/* Wave 2 - Overlay for depth */}
          <svg 
            className="absolute bottom-0 left-0 w-full h-20 md:h-28 opacity-50" 
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,80 1440,50 L1440,100 L0,100 Z" 
              className="fill-gray-50"
            ></path>
          </svg>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.9; }
        }
      `}</style>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-gray-100 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md group-hover:shadow-lg">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-orange-600">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-10 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Let us guide you through every step of your overseas education process
            </p>
           <a
                href="tel:+917995766950"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                >
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </a>

          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default AllServices;