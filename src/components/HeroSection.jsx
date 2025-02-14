import React, { useState, useEffect } from 'react';
import { ArrowDown, Star, Sparkles, Circle } from 'lucide-react';

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
      setScrollY(window.scrollY);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const BackgroundElements = () => (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-blue-50 opacity-70" />
      
      {/* Reduced number of elements for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
            }}
          >
            <Circle 
              size={Math.random() * (isMobile ? 50 : 100) + 50} 
              className="text-purple-400" 
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <Star 
              size={Math.random() * (isMobile ? 15 : 20) + 10} 
              className="text-purple-200" 
            />
          </div>
        ))}
      </div>

      {/* Responsive gradient blurs */}
      <div className="absolute top-20 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-40 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
    </>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundElements />
      
      <div
        id="hero-content"
        className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
        style={!isMobile ? {
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
          transition: 'transform 0.3s ease-out',
        } : {}}
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in tracking-tight">
            Black Ayo
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-lg -z-10" />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed animate-fade-in backdrop-blur-sm px-4">
          Creative Designer & Visual Artist crafting digital experiences for 2025
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in px-4">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 text-white font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-800 text-gray-800 font-medium text-base sm:text-lg transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105 active:scale-95 backdrop-blur-sm"
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

      <style jsx>{`
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