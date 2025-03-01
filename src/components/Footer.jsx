import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";
import { SiGmail, SiWeb3Dotjs } from "react-icons/si";


const Footer = () => {
  const socialLinks = [
    {
      icon: <FaDiscord size={24} />,
      label: "Discord",
      href: "https://discordapp.com/users/blvkartist4777",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaTwitter size={24} />,
      label: "Twitter",
      href: "https://x.com/blvkartist",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaTelegram size={24} />,
      label: "Telegram",
      href: "https://t.me/blvkartist",
      color: "hover:text-blue-500",
    },
    {
      icon: <SiGmail size={24} />,
      label: "Gmail",
      href: "mailto:hello@blvkartist@gmail.com",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="group">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent inline-block">
              BlvkArtist
            </h3>
            <div className="h-0.5 w-0 group-hover:w-20 bg-gradient-to-r from-purple-400 to-white transition-all duration-300" />
            <p className="text-gray-400 leading-relaxed mt-4 transform hover:translate-x-2 transition-transform duration-300">
              Creating meaningful designs that leave lasting impressions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="https://t.me/blvkartist"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 group"
              >
                <FaTelegram
                  size={18}
                  className="transform group-hover:-rotate-360 transition-transform duration-300"
                />
                <span>t.me/blvkartist</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 group">
                <SiWeb3Dotjs
                  size={18}
                  className="transform group-hover:-rotate-360 transition-transform duration-300"
                />
                <span>web3</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-400 ${social.color} 
                    hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20
                    group relative`}
                  aria-label={social.label}
                >
                  <div className="transform group-hover:scale-110 group-hover:-rotate-360 transition-transform duration-200 ease-in-out">
                    {social.icon}
                  </div>
                  <span
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  >
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            &copy; {new Date().getFullYear()} Black Ayo. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
