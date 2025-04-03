
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import Testimonials from '@/components/home/Testimonials';
import ClientLogos from '@/components/home/ClientLogos';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesOverview />
      <ClientLogos />
      <Testimonials />
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
