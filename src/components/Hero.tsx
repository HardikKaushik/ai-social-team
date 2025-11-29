import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20 animate-gradient" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent animate-gradient bg-300%">
          Launch Your AI Social Media Team
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed">
          Automated posts, designs, and DM replies — everything handled for you.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Sign up now and get <span className="text-primary font-bold">2 months free</span>. Regular price ₹999/month.
        </p>
        
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent-foreground hover:opacity-90 transition-all hover:scale-105 shadow-xl group"
          asChild
        >
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
            Get 2 Months Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
