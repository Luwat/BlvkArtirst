import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleScroll = () => {
      setScrollY(scrollY);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, scrollY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 bg-opacity-30"></div>
      </div>
      <div
        id="hero-content"
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
        style={
          !isMobile
            ? {
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 0.01
                }deg) rotateY(${mousePosition.x * 0.01}deg)`,
                transition: "transform 0.3s ease-out",
              }
            : {}
        }
      >
        <div className="mb-6 md:mb-8 animate-fade-in">
          <div className="relative inline-block">
            <Sparkles className="text-purple-500" size={isMobile ? 32 : 40} />
            <div className="absolute inset-0 animate-pulse-slow">
              <Sparkles className="text-purple-300" size={isMobile ? 32 : 40} />
            </div>
          </div>
        </div>

        <div className="relative mb-6 md:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-700 via-purple-600 to-blue-500 bg-clip-text text-transparent animate-fade-in tracking-tight">
            BlvkArtist
          </h1>
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-lg -z-10" /> */}
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 md:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed animate-fade-in backdrop-blur-sm px-4">
          Creative Designer & Visual Artist crafting digital experiences for
          2025
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in px-4">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-700 to-purple-600 text-white font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>

          <a
            href="https://t.me/blvkartist"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-100 text-gray-100 font-medium text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-gray-800 hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>

        <div className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="relative">
            <ArrowDown className="text-gray-400" size={32} />
            <div className="absolute inset-0 animate-pulse">
              <ArrowDown className="text-purple-300" size={32} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.1) rotate(5deg); opacity: 0.6; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) scale(1.2) rotate(-5deg); opacity: 0.2; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-20px) translateX(-50%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.1); }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 10s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
