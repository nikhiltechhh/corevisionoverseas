import React, { useState } from 'react';
import { ArrowRight, Globe, GraduationCap, X, CheckCircle, Building2, FileText, ArrowLeft } from 'lucide-react';

const CountryDetails = ({ country, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Image with Curve */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-60`}></div>
            
            {/* Curved Bottom */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 120" className="w-full h-16 sm:h-20 md:h-24">
                <path
                  fill="white"
                  d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                ></path>
              </svg>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 shadow-lg group"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Back Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 bg-white/90 hover:bg-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-semibold text-gray-800 hidden sm:inline">Back</span>
            </button>

            {/* Country Name */}
            <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-0 right-0 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl">
                Study in {country.name}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Key Highlights */}
            <div className="mb-10 sm:mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${country.color} flex items-center justify-center`}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Key Highlights</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {country.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${country.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Universities */}
            <div className="mb-10 sm:mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${country.color} flex items-center justify-center`}>
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Top Universities</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {country.universities.map((uni, index) => (
                  <div
                    key={index}
                    className="relative p-5 sm:p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-transparent hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${country.color} flex items-center justify-center text-white font-bold text-lg`}>
                          {index + 1}
                        </div>
                        <span className={`px-3 py-1 bg-gradient-to-r ${country.color} text-white text-xs font-semibold rounded-full`}>
                          {uni.rank}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                        {uni.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${country.color} flex items-center justify-center`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Requirements</h2>
              </div>
              
              <div className="space-y-3">
                {country.requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${country.color} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed flex-1">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {/* <div className="text-center pt-6 border-t border-gray-200">
              <button className={`inline-flex items-center gap-3 bg-gradient-to-r ${country.color} text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}>
                <span className="text-base sm:text-lg">Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Country = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    {
      id: 1,
      name: "Australia",
      image: "https://i.ibb.co/xtc7VmDW/australia.jpg",
      description: "Experience world-class education in vibrant cities with stunning beaches and unique wildlife.",
      color: "from-amber-500 to-orange-600",
      highlights: [
        "Post-study work visa up to 4 years",
        "World-class universities ranked globally",
        "Multicultural and safe environment",
        "Part-time work rights during studies (20 hrs/week)",
        "Beautiful climate and outdoor lifestyle"
      ],
      universities: [
        { name: "University of Melbourne", rank: "#14 Global" },
        { name: "Australian National University", rank: "#34 Global" },
        { name: "University of Sydney", rank: "#41 Global" },
        { name: "University of Queensland", rank: "#47 Global" }
      ],
      requirements: [
        "Valid passport and student visa (subclass 500)",
        "Confirmation of Enrolment (CoE) from university",
        "English proficiency: IELTS 6.5+ or TOEFL 79+",
        "Overseas Student Health Cover (OSHC)",
        "Proof of financial capacity (approx. AUD 24,505/year)",
        "Academic transcripts and certificates"
      ]
    },
    {
      id: 2,
      name: "UK",
      image: "https://i.ibb.co/KtfCtQ1/UK.jpg",
      description: "Study at prestigious universities with rich history and cultural heritage in iconic British cities.",
      color: "from-blue-500 to-indigo-600",
      highlights: [
        "Graduate route visa for 2-3 years post-study",
        "Home to world's top universities like Oxford & Cambridge",
        "One-year master's programs available",
        "Rich cultural heritage and history",
        "Gateway to European travel"
      ],
      universities: [
        { name: "University of Oxford", rank: "#2 Global" },
        { name: "University of Cambridge", rank: "#3 Global" },
        { name: "Imperial College London", rank: "#6 Global" },
        { name: "University College London", rank: "#9 Global" }
      ],
      requirements: [
        "Valid passport and Student visa (Tier 4)",
        "Confirmation of Acceptance for Studies (CAS)",
        "English proficiency: IELTS 6.0-7.0 or equivalent",
        "Proof of financial capacity (£1,334/month in London)",
        "TB test certificate (for certain countries)",
        "Academic qualifications and references"
      ]
    },
    {
      id: 3,
      name: "Ireland",
      image: "https://i.ibb.co/FkNncy2Q/irland.jpg",
      description: "Discover friendly communities, beautiful landscapes, and innovative tech hubs in the Emerald Isle.",
      color: "from-emerald-500 to-green-600",
      highlights: [
        "Stay Back Option of 2 years after graduation",
        "Home to major tech companies (Google, Facebook, Apple)",
        "English-speaking EU country",
        "Friendly and welcoming culture",
        "Lower tuition fees compared to UK"
      ],
      universities: [
        { name: "Trinity College Dublin", rank: "#98 Global" },
        { name: "University College Dublin", rank: "#171 Global" },
        { name: "National University of Ireland, Galway", rank: "#270 Global" },
        { name: "University College Cork", rank: "#298 Global" }
      ],
      requirements: [
        "Valid passport and Student visa (Stamp 2)",
        "Letter of acceptance from Irish institution",
        "English proficiency: IELTS 6.0-6.5 or equivalent",
        "Proof of €10,000 for living expenses",
        "Evidence of tuition fee payment",
        "Medical insurance coverage"
      ]
    },
    {
      id: 4,
      name: "New Zealand",
      image: "https://i.ibb.co/73rFQRK/new-zealand.jpg",
      description: "Enjoy world-renowned education amidst breathtaking natural scenery and adventure opportunities.",
      color: "from-teal-500 to-cyan-600",
      highlights: [
        "Post-study work visa up to 3 years",
        "World-class education system",
        "Safe and peaceful environment",
        "Work rights of 20 hours per week during studies",
        "Stunning natural landscapes and outdoor activities"
      ],
      universities: [
        { name: "University of Auckland", rank: "#68 Global" },
        { name: "University of Otago", rank: "#217 Global" },
        { name: "Victoria University of Wellington", rank: "#236 Global" },
        { name: "University of Canterbury", rank: "#284 Global" }
      ],
      requirements: [
        "Valid passport and Student visa",
        "Offer of place from New Zealand institution",
        "English proficiency: IELTS 6.0+ or equivalent",
        "Proof of NZD 20,000 per year for living costs",
        "Evidence of tuition fee payment or scholarship",
        "Medical and travel insurance"
      ]
    },
    {
      id: 5,
      name: "USA",
      image: "https://i.ibb.co/NdCtsCp4/america.jpg",
      description: "Access cutting-edge research and diverse programs at top-ranked universities across America.",
      color: "from-red-500 to-rose-600",
      highlights: [
        "Optional Practical Training (OPT) up to 3 years",
        "Home to most top-ranked universities globally",
        "Diverse range of programs and specializations",
        "Research and innovation opportunities",
        "Vibrant campus life and cultural diversity"
      ],
      universities: [
        { name: "Massachusetts Institute of Technology", rank: "#1 Global" },
        { name: "Stanford University", rank: "#5 Global" },
        { name: "Harvard University", rank: "#4 Global" },
        { name: "California Institute of Technology", rank: "#7 Global" }
      ],
      requirements: [
        "Valid passport and F-1 Student visa",
        "Form I-20 from SEVP-certified school",
        "English proficiency: TOEFL 80+ or IELTS 6.5+",
        "Standardized tests: SAT/ACT (UG) or GRE/GMAT (PG)",
        "Proof of financial support (varies by institution)",
        "Academic transcripts and recommendation letters"
      ]
    },
    {
      id: 6,
      name: "Canada",
      image: "https://i.ibb.co/B2rS6LYD/canada.jpg",
      description: "Experience high-quality education in welcoming, multicultural cities with excellent career prospects.",
      color: "from-red-600 to-red-700",
      highlights: [
        "Post-Graduation Work Permit up to 3 years",
        "Affordable tuition compared to US and UK",
        "Pathway to permanent residency",
        "Multicultural and inclusive society",
        "High quality of life and safety"
      ],
      universities: [
        { name: "University of Toronto", rank: "#21 Global" },
        { name: "McGill University", rank: "#31 Global" },
        { name: "University of British Columbia", rank: "#38 Global" },
        { name: "University of Alberta", rank: "#111 Global" }
      ],
      requirements: [
        "Valid passport and Study Permit",
        "Letter of acceptance from DLI institution",
        "English/French proficiency: IELTS 6.0+ or equivalent",
        "Proof of CAD 10,000+ for living expenses",
        "Statement of Purpose (SOP)",
        "Medical examination (if required)"
      ]
    },
    {
      id: 7,
      name: "Germany",
      image: "https://i.ibb.co/53nvN6h/germany.jpg",
      description: "Study tuition-free at renowned universities while exploring Europe's cultural and economic powerhouse.",
      color: "from-slate-600 to-gray-800",
      highlights: [
        "Tuition-free education at public universities",
        "18-month post-study work visa",
        "Strong economy with job opportunities",
        "Central location for European travel",
        "High-quality engineering and technical programs"
      ],
      universities: [
        { name: "Technical University of Munich", rank: "#49 Global" },
        { name: "Ludwig Maximilian University", rank: "#59 Global" },
        { name: "Heidelberg University", rank: "#65 Global" },
        { name: "Humboldt University of Berlin", rank: "#117 Global" }
      ],
      requirements: [
        "Valid passport and Student visa (National Visa)",
        "University admission letter (Zulassungsbescheid)",
        "German/English proficiency: TestDaF/DSH or IELTS 6.0+",
        "Blocked account with €11,208 for living expenses",
        "Health insurance coverage",
        "Academic certificates with recognition (if required)"
      ]
    }
  ];

  if (selectedCountry) {
    return <CountryDetails country={selectedCountry} onClose={() => setSelectedCountry(null)} />;
  }

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Globe className="w-4 h-4" />
            <span>Global Education</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Explore Study Abroad Programs
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light">The Future Starts Here</p>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
  {countries.map((country) => (
    <div
      key={country.id}
      className="
        relative group cursor-pointer aspect-square 
        w-[calc(50%-0.75rem)]        /* 2 per row on small screens */
        lg:w-[calc(33.333%-1.25rem)] /* 3 per row on large screens */
        xl:w-[calc(25%-1.25rem)]     /* 4 per row on XL screens */
      "
              onMouseEnter={() => setHoveredCard(country.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCountry(country)}
            >
              {/* Card Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={country.image}
                    alt={`Study Abroad in ${country.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Default State - Country Name */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${hoveredCard === country.id ? 'opacity-0' : 'opacity-100'}`}>
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white mb-2 sm:mb-3 drop-shadow-lg" />
                  <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center px-3 sm:px-4 drop-shadow-lg leading-tight">
                    Study Abroad in
                  </h3>
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center px-3 sm:px-4 mt-1 sm:mt-2 drop-shadow-lg">
                    {country.name}
                  </h2>
                </div>

                {/* Hover State - Description & Button */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-5 lg:p-6 transition-all duration-500 ${
                    hoveredCard === country.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${country.color} flex items-center justify-center mx-auto shadow-lg`}>
                      <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                      {country.name}
                    </h3>
                    
                    <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
                      {country.description}
                    </p>
                    
                    <button className={`group/btn inline-flex items-center gap-2 bg-white text-gray-900 font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-full transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl text-xs sm:text-sm mt-2`}>
                      <span>Discover More</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}></div>
              </div>

              {/* Border Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Ready to start your journey?
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base">
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Country;