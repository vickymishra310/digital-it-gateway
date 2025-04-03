
import MainLayout from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/ui/section-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      bio: "15+ years of experience in IT consulting and software development.",
      avatar: "JS"
    },
    {
      name: "Emily Chen",
      position: "CTO",
      bio: "Expert in cloud architecture and cybersecurity solutions.",
      avatar: "EC"
    },
    {
      name: "Michael Johnson",
      position: "Development Lead",
      bio: "Full-stack developer specializing in modern web technologies.",
      avatar: "MJ"
    },
    {
      name: "Sarah Williams",
      position: "UX/UI Designer",
      bio: "Creates intuitive user experiences with a focus on accessibility.",
      avatar: "SW"
    }
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to solving complex problems.",
      icon: TrendingUp
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality solutions that exceed expectations.",
      icon: Award
    },
    {
      title: "Client-Centered",
      description: "We put our clients' needs first, ensuring their success is our top priority.",
      icon: Target
    },
    {
      title: "Collaboration",
      description: "We believe in working together as a team and with our clients to achieve the best results.",
      icon: Users
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="pt-24 bg-gradient-to-br from-techblue-700 to-tealtone-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DigitalEdge</h1>
            <p className="text-xl text-white/90">
              A team of passionate IT professionals dedicated to delivering innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Our Story"
                subtitle="How DigitalEdge became a leading IT solutions provider"
              />
              <div className="space-y-4">
                <p>
                  Founded in 2010, DigitalEdge began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small consulting firm has grown into a comprehensive IT solutions provider serving clients across industries.
                </p>
                <p>
                  Our journey has been defined by a commitment to innovation, quality, and client satisfaction. As technology has evolved, so have we, continuously expanding our expertise to meet the changing needs of our clients.
                </p>
                <p>
                  Today, DigitalEdge is proud to be a trusted technology partner for businesses ranging from startups to enterprise organizations. Our team of experts brings together diverse skills and perspectives to deliver solutions that drive real business value.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* This would be an image in a real implementation */}
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500">Company Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="Mission & Vision"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-techblue-700">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    To empower businesses through innovative technology solutions that drive growth, 
                    improve efficiency, and create competitive advantage.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-tealtone-500">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    To be the most trusted technology partner for businesses, 
                    known for our expertise, innovation, and commitment to client success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {coreValues.map((value, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-full bg-techblue-50 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-techblue-700" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Leadership Team"
            subtitle="Meet the experts behind DigitalEdge"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="bg-techblue-100 text-techblue-700 text-2xl">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-tealtone-600">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
