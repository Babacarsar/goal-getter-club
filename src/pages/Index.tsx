import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SeniorTeam from "@/components/SeniorTeam";
import MediaGallery from "@/components/MediaGallery";
import LatestNews from "@/components/LatestNews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SeniorTeam />
      <MediaGallery />
      <LatestNews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
