import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Building2, HandCoins, FileCheck, User } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Personalized Counselling",
      description: "Expert overseas education counselling tailored to your academic goals and career aspirations.",
      bgImage: "https://img.freepik.com/free-photo/here-is-your-trip-destination-rear-view-beautiful-couple-looking-map-laptop-travel-agency-choosing-where-go-vacation_662251-2196.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "University Shortlisting",
      description: "Shortlisting of countries, programs, and universities tailored to student preferences and requirements.",
      bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
    },
    {
      icon: <HandCoins className="w-7 h-7" />,
      title: "Application & Admission",
      description: "Assistance with applications and admissions to universities with comprehensive support.",
      bgImage: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop"
    },
    {
      icon: <FileCheck className="w-7 h-7" />,
      title: "Financial & Visa Support",
      description: "Support for education loans, accommodation, GIC, and step-by-step visa assistance and guidance.",
      bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-20 px-4 bg-gray-50 overflow-hidden">
      {/* Top Stats Banner */}
      <div 
        className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 h-16 flex items-center px-8 shadow-lg transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div className="flex items-center">
          <div className="flex -space-x-2 mr-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full ${
                  i === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  i === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  i === 2 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                  'bg-gradient-to-br from-teal-400 to-teal-600'
                } border-2 border-white flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:z-10 shadow-md ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <User className="w-5 h-5 text-white" />
              </div>
            ))}
          </div>
          <div className={`text-white transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <span className="text-2xl font-bold transition-all duration-300 hover:text-3xl">970+ </span>
            <span className="text-sm">satisfied clients with Core Vision Overseas</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className={`text-gray-500 text-xs uppercase tracking-widest mb-4 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            WHAT DO WE OFFER
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '100ms' }}>
            Outstanding overseas education
          </h2>
          <div className={`flex items-center justify-center gap-2 mt-2 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 transition-all duration-300 hover:text-gray-700">
              counselling
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 transition-all duration-300 hover:text-orange-600">
              services.
            </h2>
          </div>
          <div className={`w-20 h-1 bg-blue-500 mx-auto mt-6 transition-all duration-1000 ${
            isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-xl group h-80 cursor-pointer transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${service.bgImage}')`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 via-slate-800/85 to-slate-900/90 group-hover:from-slate-800/95 group-hover:via-slate-800/90 group-hover:to-slate-900/95 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white mb-6 flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-orange-600 shadow-lg group-hover:shadow-orange-500/50">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-orange-400">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                  {service.description}
                </p>

                {/* Bottom accent line that appears on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Corner accent that appears on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/20 to-transparent transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className={`absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
      }`} style={{ transitionDelay: '600ms' }}></div>
      <div className={`absolute bottom-1/4 -right-20 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl transition-all duration-1000 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
      }`} style={{ transitionDelay: '800ms' }}></div>


{/* View All Button */}
<div 
  className={`flex justify-center mt-12 transition-all duration-700 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`} 
  style={{ transitionDelay: '1000ms' }}
>
  <a
    href="/allservices"
    className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transform transition-all duration-300 hover:scale-105 overflow-hidden"
  >
    <span className="relative z-10">View All Services</span>
    <svg 
      className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
  </a>
</div>

    </section>
  );
};

export default Services;