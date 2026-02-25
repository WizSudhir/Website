import React from \"react\";
import \"@/App.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import Navbar from \"./components/Navbar\";
import HeroSection from \"./components/HeroSection\";
import SoftwarePartners from \"./components/SoftwarePartners\";
import AboutSection from \"./components/AboutSection\";
import ServicesSection from \"./components/ServicesSection\";
import FeaturesSection from \"./components/FeaturesSection\";
import TestimonialsSection from \"./components/TestimonialsSection\";
import Footer from \"./components/Footer\";
import { Toaster } from \"./components/ui/toaster\";

const Home = () => {
  return (
    <div className=\"min-h-screen bg-white\">
      <Navbar />
      <HeroSection />
      <SoftwarePartners />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className=\"App\">
      <BrowserRouter>
        <Routes>
          <Route path=\"/\" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
