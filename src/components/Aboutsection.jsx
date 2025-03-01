import { 
  Palette, 
  Terminal, 
  VideoIcon, 
  PenTool, 
  Monitor,
  Layers
} from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { 
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      items: ["UI/UX Design", "Brand Identity", "Typography", "Motion Graphics", "3D Design", "Print Design"] 
    },
    { 
      category: "Adobe Creative Suite",
      icon: <PenTool className="w-6 h-6" />,
      items: ["Photoshop", "Illustrator", "InDesign", "XD", "Lightroom", "Dimension"]
    },
    { 
      category: "Motion & 3D",
      icon: <VideoIcon className="w-6 h-6" />,
      items: ["After Effects", "Premiere Pro", "Blender", "Cinema 4D", "DaVinci Resolve", "Character Animator"]
    },
    { 
      category: "Design Tools",
      icon: <Layers className="w-6 h-6" />,
      items: ["Figma", "Sketch", "Framer", "Principle", "ProtoPie", "Webflow"] 
    },
    { 
      category: "Development",
      icon: <Terminal className="w-6 h-6" />,
      items: ["HTML/CSS", "JavaScript", "React", "WordPress", "Tailwind", "GSAP"] 
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-50 via-purple-300 to-blue-900 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-300 to-blue-300 mt-2" />
            </div>

            <div className="space-y-6 text-gray-100">
              <p className="text-lg leading-relaxed">
                Hello! I&apos;m BlvkArtist, a passionate creative designer with over 5 years of experience
                in crafting meaningful visual experiences. Based in web3, I combine artistic vision
                with strategic thinking to deliver impactful design solutions.
              </p>
              <p className="text-lg leading-relaxed">
                My approach to design is rooted in understanding the unique needs of each project
                and creating solutions that not only look beautiful but also serve a purpose.
                Whether it&apos;s brand identity, user interface design, or motion graphics, I bring
                creativity and attention to detail to every project.
              </p>
              <p className="text-lg leading-relaxed">
                When I&apos;m not designing, you can find me exploring new design trends, mentoring
                upcoming designers, or collaborating with other creatives on exciting projects.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-gray-100 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                <Monitor className="w-6 h-6 text-gray-100" />
                Skills & Expertise
              </h3>
              
              <div className="space-y-8">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-purple-200">
                        {skillGroup.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-100">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gray-600 text-gray-50 rounded-full text-sm font-medium hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-100 rounded-full opacity-50 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl" />
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;