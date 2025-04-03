
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "DigitalEdge transformed our online presence with a modern website that perfectly represents our brand. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "SJ"
  },
  {
    quote: "The cybersecurity solutions implemented by DigitalEdge have given us peace of mind. They identified vulnerabilities we weren't aware of and provided effective solutions.",
    author: "Michael Chen",
    position: "CTO, SecureData Systems",
    avatar: "MC"
  },
  {
    quote: "Working with DigitalEdge on our cloud migration was seamless. Their expertise saved us time and money while significantly improving our system performance.",
    author: "Emma Rodriguez",
    position: "Operations Director, CloudFirst",
    avatar: "ER"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Client Testimonials"
          subtitle="Don't just take our word for it. Here's what our clients have to say about our services."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-tealtone-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" fill="none" viewBox="0 0 45 36">
                    <path fill="currentColor" d="M13.303 0C6.272 0 0.553 5.719 0.553 12.75C0.553 19.781 6.272 25.5 13.303 25.5C10.093 25.5 7.490 28.102 7.490 31.312C7.490 34.523 10.093 35.625 13.303 35.625C16.990 35.625 21.740 33.023 21.740 24.586C21.740 10.625 15.428 0 13.303 0ZM36.428 0C29.397 0 23.678 5.719 23.678 12.75C23.678 19.781 29.397 25.5 36.428 25.5C33.217 25.5 30.615 28.102 30.615 31.312C30.615 34.523 33.217 35.625 36.428 35.625C40.115 35.625 44.865 33.023 44.865 24.586C44.865 10.625 38.553 0 36.428 0Z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback className="bg-techblue-100 text-techblue-700">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <CardDescription>{testimonial.position}</CardDescription>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
