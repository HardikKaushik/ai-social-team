import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProposition from "@/components/ValueProposition";
import EarlyAccess from "@/components/EarlyAccess";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ValueProposition />
      <EarlyAccess />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
};

export default Index;
