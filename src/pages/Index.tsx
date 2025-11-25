import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Focus from "@/components/Focus";
import About from "@/components/About";
import Country from "@/components/Country";
// import Stats from "@/components/Stats";
import Choose from "@/components/Choose";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Focus />
      <About />
      <Country />
      {/* <Stats /> */}
      <Choose />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
