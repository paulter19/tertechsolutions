import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import WhyTerTech from "@/components/WhyTerTech";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#070B14] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <WhyTerTech />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}