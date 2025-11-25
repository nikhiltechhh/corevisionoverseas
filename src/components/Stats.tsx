import React from 'react';

const Stats = () => {
  const stats = [
    { number: 870, label: 'Visa Process', icon: '+' },
    { number: 480, label: 'Success Stories', icon: '+' },
    { number: 620, label: 'Team Members', icon: '+' },
    { number: 970, label: 'Happy Clients', icon: '+' }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-900/90 to-blue-900/85">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
            opacity: 0.4
          }}
        ></div>
        {/* Decorative fan element top-left */}
        <div className="absolute top-8 left-8 w-32 h-32 opacity-30">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100,100 L100,20 A80,80 0 0,1 170,70 Z" fill="white" opacity="0.3"/>
            <path d="M100,100 L170,70 A80,80 0 0,1 170,130 Z" fill="white" opacity="0.25"/>
            <path d="M100,100 L170,130 A80,80 0 0,1 100,180 Z" fill="white" opacity="0.2"/>
            <path d="M100,100 L100,180 A80,80 0 0,1 30,130 Z" fill="white" opacity="0.15"/>
            <path d="M100,100 L30,130 A80,80 0 0,1 30,70 Z" fill="white" opacity="0.1"/>
            <path d="M100,100 L30,70 A80,80 0 0,1 100,20 Z" fill="white" opacity="0.05"/>
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Stats Section - Top */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-white/98 to-gray-50/98 backdrop-blur-md rounded-full shadow-2xl px-6 sm:px-10 lg:px-16 py-8 lg:py-10 transform transition-all duration-500 hover:shadow-3xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center text-center group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative mb-2 lg:mb-3">
                      <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600">
                        {stat.number}
                      </h3>
                      <span className="absolute -top-1 -right-4 sm:-right-6 lg:-right-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold shadow-lg transition-all duration-300 group-hover:rotate-180 group-hover:scale-110">
                        {stat.icon}
                      </span>
                    </div>
                   <p className="text-white font-medium text-xs sm:text-sm lg:text-base xl:text-lg tracking-wide transition-colors duration-300 group-hover:text-slate-200">
                    {stat.label}
                    </p>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Center/Bottom */}
        <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 lg:mb-8 leading-tight drop-shadow-lg">
                  Illuminating your path
                  <br />
                  <span className="text-white"> to global success </span>
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start mt-8">
                  <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 lg:px-10 py-4 lg:py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-base lg:text-lg">
                    <span className="flex items-center justify-center gap-2">
                      Explore More
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-slate-900 font-bold px-8 lg:px-10 py-4 lg:py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-base lg:text-lg">
                    Contact Now
                  </button>
                </div>
              </div>

            
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Stats;