import React from 'react';
import { Users, DollarSign, Handshake, Headphones } from 'lucide-react';

const Choose = () => {
  const features = [
  {
    icon: Users,
    title: "Direct Interviews",
    description:
      "Connect directly with representatives to understand admissions, courses, and scholarships clearly.",
    color: "text-blue-500"
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description:
      "We provide affordable and transparent consultation plans that ensure maximum value for your study-abroad goals.",
    color: "text-orange-500"
  },
  {
    icon: Handshake,
    title: "Trusted Customers",
    description:
      "Thousands of students trust our guidance and have successfully secured admissions in top global universities.",
    color: "text-blue-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated team is available 24/7 to assist with applications, documentation, and your entire abroad journey.",
    color: "text-blue-500"
  }
];


  return (
    <div className="relative w-full bg-gray-50">
      <div className="flex flex-col lg:flex-row w-full">
       
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[700px]">
        
          <div className="absolute inset-0">
            <img 
              src="https://i.ibb.co/1VtypQX/girl-with-globe.jpg" 
              alt="Professional consultation" 
              className="w-full h-full object-cover"
            />
         
            <div className="absolute inset-0 opacity-30"></div>
          </div>
          
          {/* Orange Box Overlay */}
<div className="absolute top-1/2 left-0 lg:left-12 transform -translate-y-1/2 
                w-[calc(100%-2rem)] lg:w-[500px] mx-4 lg:mx-0 
                -mt-28 lg:-mt-40 z-10">
  <div className="bg-transparent rounded-lg p-10 lg:p-14">
    <h1 className="text-[#e66232] text-4xl lg:text-5xl font-bold leading-tight mb-8">
      Choose only the best quality consultation
    </h1>
  </div>
</div>

        </div>

        {/* Right Side - Feature Cards */}
        <div className="w-full lg:w-1/2 bg-gray-50 py-12 lg:py-20 px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                >
                  {/* Large watermark icon in background */}
                  <div className="absolute -bottom-4 -right-4 opacity-5">
                    <Icon className="w-32 h-32" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`${feature.color} mb-6`}>
                      <Icon className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-gray-900 text-xl font-bold mb-4">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default Choose;