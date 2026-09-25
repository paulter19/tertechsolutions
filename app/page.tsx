import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyTerTech from "@/components/WhyTerTech";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="bg-[#070B14] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      {/* <Pricing /> */}
      <WhyTerTech />
      <Projects />
     {/*  <Process /> */}
      <CTA />
      <Footer />
    </main>
  );
}