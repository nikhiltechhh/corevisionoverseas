import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden -mt-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://img.freepik.com/premium-photo/colorful-illustration-famous-landmarks-from-around-world-reflected-body-water_14117-748671.jpg?semt=ais_hybrid&w=740&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

    <div className="relative z-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      
      {/* Logo + Image Under Logo */}
      <div className="space-y-4">
        <img 
          src="https://i.ibb.co/5X3v7jFh/LOGOC.png" 
          alt="Core Vision Overseas Logo" 
          className="h-12 w-auto"
        />

        {/* Image Under Logo */}
        <img
          src="https://i.ibb.co/4ZJMdPS7/gold-line.png"  // <-- replace with your image link
          alt="Footer Banner"
          className="w-40 h-auto rounded-md object-cover"
        />

        <div className="flex space-x-4 pt-2">
          <a href="#" className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={20} />
          </a> 
          <a
            href="https://www.instagram.com/edu.corevisionoverseas?igsh=enc5dDlzcndsdHBl"
            className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>


            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Home
                  </a>
                  </li>
                  <li>
                  <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Services
                  </a>
                </li>
                <li>
                  {/* <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Portfolio
                  </a> */}
                </li>
                <li>
                  {/* <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Careers
                  </a> */}
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-300 text-sm">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#e66232]" />
                  <span>Nellore, AndhraPradesh</span>
                  <span>Chennai, Tamilnadu</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300 text-sm">
                  <Phone size={18} className="flex-shrink-0 text-[#e66232]" />
                  <span>+91 7995766950</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300 text-sm">
                  <Phone size={18} className="flex-shrink-0 text-[#e66232]" />
                  <span>+1 9194340052</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300 text-sm">
                  <Mail size={18} className="flex-shrink-0 text-[#e66232]" />
                  <span>consult@corevisionoverseas.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Core Vision Overseas. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Legal
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Cookies
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
