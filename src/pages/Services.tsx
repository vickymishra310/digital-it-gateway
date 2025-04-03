
import MainLayout from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Shield, Cloud, LightbulbIcon, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies to help your business stand out online.",
      icon: Code,
      features: [
        "Responsive website design",
        "Custom web application development",
        "E-commerce solutions",
        "Content management systems",
        "Website maintenance and support"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "app-development",
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
      icon: Smartphone,
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design",
        "App testing and quality assurance",
        "App maintenance and updates"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving cyber threats and ensure data protection.",
      icon: Shield,
      features: [
        "Security assessments",
        "Vulnerability testing",
        "Data protection solutions",
        "Security monitoring",
        "Employee security training"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to improve efficiency, reduce costs, and enhance collaboration.",
      icon: Cloud,
      features: [
        "Cloud migration strategy",
        "AWS, Azure, and Google Cloud expertise",
        "Cloud infrastructure management",
        "Cloud optimization",
        "Disaster recovery planning"
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      description: "Strategic technology consulting to help your business leverage IT for growth, innovation, and competitive advantage.",
      icon: LightbulbIcon,
      features: [
        "IT strategy development",
        "Technology roadmapping",
        "Digital transformation",
        "IT infrastructure assessment",
        "Technology vendor selection"
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="pt-24 bg-gradient-to-br from-techblue-700 to-tealtone-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How We Can Help Your Business"
            subtitle="We offer a wide range of IT services to help businesses of all sizes leverage technology for growth and success."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {mainServices.map((service) => (
              <Card key={service.id} className="card-hover border-t-4 border-t-techblue-500 flex flex-col">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-techblue-50 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-techblue-700" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`#${service.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {mainServices.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <SectionHeader
                  title={service.title}
                  subtitle={service.description}
                />
                <ul className="space-y-3 my-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-tealtone-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/contact">
                    Request a Consultation
                  </Link>
                </Button>
              </div>
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-techblue-700 to-tealtone-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our IT services can help your business thrive.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-techblue-700 hover:bg-gray-100"
            asChild
          >
            <Link to="/contact">
              Contact Us Now
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
