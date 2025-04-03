
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-techblue-700 to-tealtone-500 min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-black opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />
      
      <div className="container mx-auto px-4 py-24 z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            IT Solutions That Drive Business Growth
          </h1>
          <p className="text-white/90 text-xl mb-8">
            We deliver cutting-edge technology solutions tailored to your unique business needs.
            From web development to cybersecurity, we're your partner in digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-techblue-700 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
