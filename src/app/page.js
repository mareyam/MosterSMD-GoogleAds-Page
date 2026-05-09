import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuoteForm />
        <Services />
        <WhyUs />
        <Gallery />
        <Industries />
        <HowItWorks />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
