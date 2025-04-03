
import MainLayout from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      client: "Fashion Retailer",
      description: "Completely redesigned the online shopping experience, resulting in a 40% increase in conversions and a 25% reduction in cart abandonment.",
      services: ["Web Development", "UI/UX Design"],
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Inventory Management System",
      client: "Manufacturing Company",
      description: "Developed a custom inventory management system that automated tracking and reduced errors by 60%.",
      services: ["Web Application", "Cloud Solutions"],
      category: "application",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Secure Banking Application",
      client: "Regional Bank",
      description: "Built a secure mobile banking application with advanced authentication features and real-time transaction monitoring.",
      services: ["App Development", "Cybersecurity"],
      category: "application",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cloud Migration Strategy",
      client: "Insurance Provider",
      description: "Developed and implemented a comprehensive cloud migration strategy, reducing IT costs by 30% and improving system reliability.",
      services: ["Cloud Solutions", "IT Consulting"],
      category: "cloud",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Corporate Website Overhaul",
      client: "Legal Firm",
      description: "Redesigned the corporate website with a focus on user experience and lead generation, resulting in a 45% increase in contact form submissions.",
      services: ["Web Development", "UI/UX Design"],
      category: "web",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cybersecurity Assessment",
      client: "Healthcare Provider",
      description: "Conducted a comprehensive cybersecurity assessment, identifying and addressing critical vulnerabilities to protect sensitive patient data.",
      services: ["Cybersecurity", "IT Consulting"],
      category: "security",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="pt-24 bg-gradient-to-br from-techblue-700 to-tealtone-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-white/90">
              Explore our successful projects and see how we've helped businesses achieve their goals
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Projects"
            subtitle="Browse through our collection of successful projects across various industries"
            center
          />
          
          <Tabs defaultValue="all" className="mt-12">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="application">Applications</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'web').map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="application" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'application').map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cloud" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'cloud').map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'security').map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Let's Work Together"
            subtitle="Have a project in mind? Contact us to discuss how we can help you achieve your goals."
            center
          />
          <Button 
            size="lg" 
            className="mt-6"
            asChild
          >
            <Link to="/contact">
              Start a Project
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    client: string;
    description: string;
    services: string[];
    category: string;
    image: string;
  }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="card-hover overflow-hidden flex flex-col h-full">
      <div className="overflow-hidden h-48">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="space-y-1">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>Client: {project.client}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.services.map((service, index) => (
            <Badge key={index} variant="secondary">{service}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          View Case Study
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Portfolio;
