import Hero from "@/components/Hero";
import HowItWorksChat from "@/components/HowItWorksChat";
import Features from "@/components/Features";
import ValueProposition from "@/components/ValueProposition";
import EarlyAccess from "@/components/EarlyAccess";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorksChat />
      <Features />
      <ValueProposition />
      <EarlyAccess />
      <FinalCTA />
    </main>
  );
};

export default Index;
