import React, { useState } from 'react';
import { Target, Globe, Briefcase, GraduationCap, FileCheck, Award, BookOpen, DollarSign, Plane, Tag } from 'lucide-react';

const Focus = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Target,
      title: "Personalized Guidance",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Pre & Post-Landing Support",
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      color: "purple"
    },
    {
      icon: Briefcase,
      title: "Career Counseling",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      color: "orange"
    },
    {
      icon: GraduationCap,
      title: "Country/Course/University Selection",
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      color: "emerald"
    },
    {
      icon: FileCheck,
      title: "Application Assistance",
      gradient: "from-indigo-500 via-purple-600 to-blue-600",
      color: "indigo"
    },
    {
      icon: Award,
      title: "100% Guarantee in Top Universities",
      gradient: "from-amber-500 via-orange-600 to-red-600",
      color: "amber"
    },
    {
      icon: BookOpen,
      title: "GRE, TOEFL, IELTS, Duolingo, PTE Assistance",
      gradient: "from-teal-500 via-emerald-600 to-green-600",
      color: "teal"
    },
    {
      icon: DollarSign,
      title: "Financial Advice",
      gradient: "from-rose-500 via-pink-600 to-fuchsia-600",
      color: "rose"
    },
    {
      icon: Plane,
      title: "Visa Counseling",
      gradient: "from-violet-500 via-purple-600 to-indigo-600",
      color: "violet"
    },
    {
      icon: Tag,
      title: "Discounts & Training for Exams",
      gradient: "from-red-500 via-rose-600 to-pink-600",
      color: "red"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Our <span className="text-transparent bg-clip-text bg-[#e66232]">Expertise</span>
          </h2>
          <p className="text-slate-600 text-sm">It's not Vision, It's Core. We just don't guide we Ingnite them</p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group cursor-pointer"
              >
                {/* Card */}
                <div className={`
                  relative h-full bg-white backdrop-blur-sm rounded-xl p-4 
                  border border-slate-200 overflow-hidden shadow-md
                  transition-all duration-500 ease-out
                  ${hoveredIndex === index ? 'scale-105 shadow-2xl border-transparent' : 'hover:border-slate-300'}
                `}>
                  {/* Gradient Overlay on Hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${service.gradient} 
                    transition-opacity duration-500
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                  `}></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                    {/* Icon */}
                    <div className={`
                      w-12 h-12 md:w-14 md:h-14 rounded-lg mb-3 flex items-center justify-center
                      transition-all duration-500 transform
                      ${hoveredIndex === index 
                        ? 'bg-white/20 backdrop-blur-md scale-110 rotate-6' 
                        : 'bg-slate-100'}
                    `}>
                      <Icon className={`
                        w-6 h-6 md:w-7 md:h-7 transition-colors duration-500
                        ${hoveredIndex === index ? 'text-white' : 'text-slate-700'}
                      `} />
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-xs md:text-sm font-semibold leading-tight transition-colors duration-500
                      ${hoveredIndex === index ? 'text-white' : 'text-slate-700'}
                    `}>
                      {service.title}
                    </h3>

                    {/* Animated Underline */}
                    <div className={`
                      mt-2 h-0.5 bg-white rounded-full transition-all duration-500
                      ${hoveredIndex === index ? 'w-8 opacity-100' : 'w-0 opacity-0'}
                    `}></div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-xl transition-opacity duration-500
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-xl opacity-50`}></div>
                  </div>
                </div>

                {/* Floating Particles Effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-150"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Badge */}
       
      </div>
    </section>
  );
};

export default Focus;