
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would be a real API call in a production environment
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="pt-24 bg-gradient-to-br from-techblue-700 to-tealtone-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Have questions or ready to start a project? Get in touch with our team.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Get In Touch"
                subtitle="Fill out the form and we'll get back to you as soon as possible."
              />
              
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="p-6">
                    <SectionHeader
                      title="Contact Information"
                      subtitle="Here are the different ways you can reach us"
                      className="mb-8"
                    />
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-techblue-50 flex items-center justify-center mr-4">
                          <Mail className="h-5 w-5 text-techblue-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Email Us</h4>
                          <p className="text-gray-600 mt-1">
                            <a href="mailto:info@digitaledge.com" className="hover:text-techblue-700">
                              info@digitaledge.com
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-techblue-50 flex items-center justify-center mr-4">
                          <Phone className="h-5 w-5 text-techblue-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Call Us</h4>
                          <p className="text-gray-600 mt-1">
                            <a href="tel:+14151234567" className="hover:text-techblue-700">
                              (415) 123-4567
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-techblue-50 flex items-center justify-center mr-4">
                          <MapPin className="h-5 w-5 text-techblue-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Visit Us</h4>
                          <p className="text-gray-600 mt-1">
                            123 Tech Street<br />
                            Silicon Valley, CA 94043
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-techblue-50 flex items-center justify-center mr-4">
                          <Clock className="h-5 w-5 text-techblue-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Business Hours</h4>
                          <p className="text-gray-600 mt-1">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday & Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Maps would go here in a real implementation */}
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Google Maps Integration</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">What industries do you serve?</h3>
                <p className="text-gray-600">
                  We work with businesses across various industries including healthcare, finance, retail, 
                  manufacturing, education, and more. Our solutions are tailored to meet the specific needs 
                  of each industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">How much does a typical project cost?</h3>
                <p className="text-gray-600">
                  Project costs vary based on scope, complexity, and specific requirements. We provide 
                  detailed quotes after an initial consultation to understand your needs. We offer solutions 
                  for various budget ranges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">What is your typical project timeline?</h3>
                <p className="text-gray-600">
                  Project timelines depend on the scope and complexity. A basic website might take 2-4 weeks, 
                  while more complex applications can take several months. We'll provide a detailed timeline 
                  during the planning phase.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, we offer various support and maintenance packages to ensure your systems continue to 
                  run smoothly. Our team is available for troubleshooting, updates, and enhancements as needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
