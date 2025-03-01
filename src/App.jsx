import Navigation from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;
