import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Coaches from "@/components/Coaches";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <Facilities />
      <Coaches />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
