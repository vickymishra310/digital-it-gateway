
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Shield, Cloud, LightbulbIcon } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    icon: Code,
    link: "/services#web-development"
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    link: "/services#app-development"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from threats.",
    icon: Shield,
    link: "/services#cybersecurity"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for your business.",
    icon: Cloud,
    link: "/services#cloud-solutions"
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to help your business grow and innovate.",
    icon: LightbulbIcon,
    link: "/services#it-consulting"
  }
];

const ServicesOverview = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Services"
          subtitle="We offer a comprehensive range of IT services to help your business succeed in the digital world."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-techblue-500">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-techblue-50 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-techblue-700" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link to={service.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
