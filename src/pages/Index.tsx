import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediaGallery from "@/components/MediaGallery";
import LatestNews from "@/components/LatestNews";
import SeniorTeam from "@/components/SeniorTeam";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SeniorTeam />
      <MediaGallery />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Index;
