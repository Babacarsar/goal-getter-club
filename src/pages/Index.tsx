import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediaGallery from "@/components/MediaGallery";
import Partners from "@/components/Partners";
import LatestNews from "@/components/LatestNews";
import SeniorTeam from "@/components/SeniorTeam";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SeniorTeam />
      <MediaGallery />
      <Partners />
      <LatestNews />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Index;
