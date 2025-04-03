
import { SectionHeader } from "@/components/ui/section-header";

const ClientLogos = () => {
  // In a real implementation, these would be actual client logos
  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateSystems", logo: "IS" },
    { name: "FutureWorks", logo: "FW" },
    { name: "GlobalTech", logo: "GT" },
    { name: "DataDrive", logo: "DD" },
    { name: "SmartSolutions", logo: "SS" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Trusted by Industry Leaders"
          center
        />
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="h-16 w-32 flex items-center justify-center bg-white rounded-md shadow-sm border"
            >
              <span className="text-2xl font-bold text-gray-400">{client.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
