import { Button } from "@/components/ui/button";
import LOGOIN from "/public/LOGOV.mp4";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[94vh] flex items-center overflow-hidden pt-32">
      {/* Video Background - You can replace this with your video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Replace with your video path */}
          <source src={LOGOIN} type="video/mp4" />
        </video>
        {/* Dark gradient overlay - matches the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1d29]/15 via-[#252836]/15 to-[#252836]/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          {/* #1 Badge */}
          <div className="mb-6">
            <h2 className="text-[120px] md:text-[160px] lg:text-[180px] font-black text-accent leading-none tracking-tight">
              #1
            </h2>
          </div>

          {/* Main Heading - Exactly as shown in image */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-10 leading-[1.15] tracking-tight">
           Your trusted partner<br />for global growth
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
           <Button 
            size="lg" 
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
            className="bg-[#e66232] hover:bg-[#e66232]/90 text-white rounded-full px-9 py-7 text-[16px] font-medium shadow-xl shadow-[#e66232]/30 transition-all hover:shadow-2xl hover:shadow-[#e66232]/40"
          >
            Explore now
          </Button>

            <a href="tel:+917995766950">
              <Button 
                size="lg" 
                className="bg-white hover:bg-white/95 text-[#252836] border-0 rounded-full px-9 py-7 text-[16px] font-medium shadow-xl hover:shadow-2xl transition-all"
              >
                Contact now
              </Button>
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Indicator - Optional */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-11 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
