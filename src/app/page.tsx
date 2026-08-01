import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import SymptomSelector from "@/components/SymptomSelector";
import AboutPreview from "@/components/AboutPreview";
import ElitePatients from "@/components/ElitePatients";
import WorkGallery from "@/components/WorkGallery";
import WhyUs from "@/components/WhyUs";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import InstitutoCTA from "@/components/InstitutoCTA";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <SymptomSelector />
        <AboutPreview />
        <ElitePatients />
        <WorkGallery />
        <WhyUs />
        <Locations />
        <Testimonials />
        <FAQ />
        <InstitutoCTA />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
