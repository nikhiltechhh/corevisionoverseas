import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
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

  const badges = [
    { number: '3 Lakh+', label: 'Students sent abroad', color: 'orange' },
    { number: '2500+', label: 'Recruitment partners', color: 'blue' },
    { number: '950+', label: 'University tie-ups', color: 'green' },
    { number: '14 Years', label: 'Excellence', color: 'purple' },
    { number: '10 Countries', label: 'Presence', color: 'indigo' },
    { number: 'Most Trusted', label: 'Consultancy', color: 'rose' }
  ];

  const features = [
    { icon: '✓', text: 'Trusted Consultant' },
    { icon: '✓', text: '100% Approval' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
      blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      green: 'bg-green-100 text-green-700 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
      indigo: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
      rose: 'bg-rose-100 text-rose-700 hover:bg-rose-200'
    };
    return colors[color] || colors.orange;
  };

  return (
    <section id="about" ref={sectionRef} className="bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Tag */}
        <div className={`text-center mb-8 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="text-l md:text-base font-bold text-gray-600 uppercase tracking-widest">
            ABOUT THE COMPANY
          </span>
        </div>

        {/* Hero Image with Plane and Landmarks */}
        <div className={`mb-8 lg:mb-12 transition-all duration-1000 ${
  isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
}`} style={{ transitionDelay: '100ms' }}>
  <div className="relative mx-auto w-[70%] lg:w-[50%]">
    <img
      src="https://i.ibb.co/8g34DpMk/plane-on-Countries.png"
      alt="Study Abroad Destinations"
      className="w-full h-auto object-contain drop-shadow-2xl"
    />
  </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-xl md:text-5xl lg:text-2xl font-bold text-center mb-4 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          <span className="text-orange-500">Student-favor platform dedicated to transparency, genuine guidance, and shaping your future abroad—without any hidden interests.</span>
        </h1>

        {/* Description */}
        <div className={`text-center max-w-4xl mx-auto mb-10 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '300ms' }}>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-2">
            End-to-end support in helping students study in an international institute.
          </p>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
            Access to 950+ universities across the USA, UK, Australia, Canada, Europe, NZ and more.
          </p>
        </div>

        {/* Content Grid - Founder and Stats */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side - Founder */}
          <div className={`flex flex-col items-center lg:items-start transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                <img
                  src="https://i.ibb.co/bg61GysF/Whats-App-Image-2025-11-14-at-1-52-42-PM.jpg"
                  alt="CEO"
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white "
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                  Poorna Chandra Reddy Vedicherla
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-medium">CEO & CO Founder</p>
              </div>
            </div>
          </div>

          {/* Right Side - Badges and Features */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            
            {/* Stats Badges */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                    getColorClasses(badge.color)
                  } ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <span className="font-bold text-base">{badge.number}</span>
                  <span className="text-xs">{badge.label}</span>
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1200 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-gray-900">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}