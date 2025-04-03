
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-techblue-700 to-tealtone-500 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and discover how our IT solutions can help your business grow.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-techblue-700 hover:bg-gray-100"
          asChild
        >
          <Link to="/contact">
            Get Started Today
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
