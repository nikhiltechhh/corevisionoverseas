  import { useState } from "react";
  import { Button } from "@/components/ui/button";
  import { Mail, MapPin, Clock, Search, ChevronDown, Linkedin, Facebook, Instagram } from "lucide-react";

  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState("Home");
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);

    const navItems = [
    { 
      name: "Home",
      id: "hero"
    },
    { 
      name: "About",
      id: "about"
    },
    { 
      name: "Services",
      id: "services"
    },
    { 
      name: "Visa",
      hasDropdown: true,
      submenu: ["Study Visa", "Work Visa", "Tourist Visa", "Business Visa"]
    },
    { 
      name: "Global Test Preparations",
      hasDropdown: true,
      submenu: ["IELTS", "PTE", "TOEFL", "GRE", "Duolingo English Test", "GMAT", "SAT", "German Language(A1-B2)", "French Language (DELF A1–B2)", "Japanese language"]
    },
  ];

    return (
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Info Bar - Very Dark */}
        <div className="bg-[#bdb6b5] border-b border-white/30 hidden md:block">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2.5 text-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 lg:gap-8 text-white/90">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-[13px] text-black">consult@corevisionoverseas.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-[13px] text-black">Nellore, Chennai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-[13px] text-black">Mon - Sun: 9AM - 7PM</span>
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-3 md:mt-0">
                <a href="#" className="text-black/70 hover:text-primary transition-colors" aria-label="Linkedin">
                  <Linkedin className="w-[15px] h-[15px]" />
                </a>
                {/* <a href="#" className="text-white/70 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook className="w-[15px] h-[15px]" />
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors" aria-label="Pinterest">
                  <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a> */}
                <a href="https://www.instagram.com/edu.corevisionoverseas?igsh=enc5dDlzcndsdHBl" className="text-white/70 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="w-[15px] h-[15px] text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - Slightly lighter dark */}
        <div className="bg-[#bdb6b5] backdrop-blur-sm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Logo - Responsive Sizing */}
           <div className="w-44 h-12 md:w-56 md:h-14 lg:w-64 lg:h-16 overflow-hidden rounded transition-all duration-300">
  <img
    src="https://i.ibb.co/wh814cWn/cv.png"
    alt="Core Vision Overseas"
    className="w-full h-full object-contain object-center"
  />
</div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
    {navItems.map((item) => (
      <div 
        key={item.name} 
        className="relative"
        onMouseEnter={() => item.hasDropdown && setOpenDesktopDropdown(item.name)}
        onMouseLeave={() => setOpenDesktopDropdown(null)}
      >
        <button 
          onClick={() => {
            setActiveItem(item.name);

            // Smooth scroll only for items with an id
            if (item.id) {
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
          }}
          className={`flex items-center gap-1 px-4 py-6 text-[15px] font-medium transition-colors relative
            ${activeItem === item.name ? 'text-white' : 'text-black/80 hover:text-white'}
          `}
        >
          {item.name}
          {item.hasDropdown && (
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${
                openDesktopDropdown === item.name ? 'rotate-180' : ''
              }`}
            />
          )}
          {activeItem === item.name && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent transition-all duration-300"></span>
          )}
        </button>

        {item.hasDropdown && (
          <div className={`absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-2xl transition-all duration-300 ${
            openDesktopDropdown === item.name 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}>
            <div className="py-2">
              {item.submenu.map((subitem, index) => (
                <a 
                  key={index}
                  href="#"
                  className="block px-5 py-2.5 text-[14px] text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDesktopDropdown(null);
                  }}
                >
                  {subitem}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </nav>


              {/* Right Side Actions */}
              <div className="flex items-center gap-5">
                {/* <button className="text-white/80 hover:text-white transition-colors" aria-label="Search">
                  <Search className="w-5 h-5" />
                </button> */}
                
                <Button
  onClick={() => { window.location.href = "tel:+917995766950"; }}
  className="hidden md:flex bg-[#e66232] hover:bg-[#e66232]/90 text-white rounded-full px-7 py-6 text-[15px] font-medium 
             shadow-none focus:outline-none focus:ring-0 active:ring-0 active:outline-none
             transition-all hover:scale-105"
>
  Book Consultation
</Button>



                {/* Mobile Menu Button - Dynamic Hamburger */}
                <button
                  className="lg:hidden text-white transition-all duration-300 hover:scale-105 p-1"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <div className="relative w-7 h-7 flex flex-col items-center justify-center gap-1.5">
                    <span 
                      className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                        isMenuOpen ? 'w-7 rotate-45 translate-y-2' : 'w-7'
                      }`}
                    />
                    <span 
                      className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                        isMenuOpen ? 'w-0 opacity-0' : 'w-5'
                      }`}
                    />
                    <span 
                      className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                        isMenuOpen ? 'w-7 -rotate-45 -translate-y-2' : 'w-7'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`lg:hidden border-t border-white/10 bg-[##bdb6b5] rounded-b-lg shadow-xl overflow-hidden transition-all duration-300 ${
                isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <nav className="flex flex-col py-2">
    {navItems.map((item, itemIndex) => (
      <div 
        key={item.name} 
        className="border-b border-white/5 last:border-0"
        style={{
          animation: isMenuOpen ? `slideIn 0.3s ease-out ${itemIndex * 0.05}s both` : 'none'
        }}
      >
        {item.hasDropdown ? (
          /* ---------- DROPDOWN ITEM ---------- */
          <div>
            <button
              onClick={() => {
                setOpenMobileDropdown(
                  openMobileDropdown === item.name ? null : item.name
                );
                setActiveItem(item.name);
              }}
              className={`w-full flex items-center justify-between px-4 py-3.5 text-[15px] transition-all ${
                activeItem === item.name
                  ? "text-white font-medium bg-white/5"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              <span>{item.name}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openMobileDropdown === item.name
                    ? "rotate-180 text-accent"
                    : ""
                }`}
              />
            </button>

            {/* Dropdown submenu */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openMobileDropdown === item.name
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-[#bdb6b5] py-1">
                {item.submenu.map((subitem, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-8 py-2.5 text-[14px] text-white/70 hover:text-white hover:bg-white/5 transition-all border-l-2 border-transparent hover:border-accent hover:pl-9"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {subitem}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ---------- NON-DROPDOWN ITEM (SMOOTH SCROLL) ---------- */
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(item.name);

              if (item.id) {
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setIsMenuOpen(false); // auto close menu after click
            }}
            className={`block px-4 py-3.5 text-[15px] transition-all ${
              activeItem === item.name
                ? "text-white font-medium bg-white/5"
                : "text-white/80 hover:bg-white/5"
            }`}
          >
            {item.name}
          </a>
        )}
      </div>
    ))}

    {/* Button */}
    <div className="px-4 py-4">
    <Button
    onClick={() => { window.location.href = "tel:+917995766950"; }}
    className="bg-[#e66232] hover:bg-[#e66232]/90 text-white rounded-full w-full py-6 text-[15px] font-medium shadow-none focus:outline-none focus:ring-0 active:ring-0 active:outline-none transition-all hover:scale-105"
  >
    Book Consultation
  </Button>



    </div>
  </nav>

            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </header>
    );
  };

  export default Header;
