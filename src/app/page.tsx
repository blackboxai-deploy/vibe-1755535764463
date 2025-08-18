import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import Cities from "@/components/landing/Cities";
import Safety from "@/components/landing/Safety";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <Cities />
      <Safety />
      <Footer />
    </main>
  );
}