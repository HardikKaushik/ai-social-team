import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-accent/10 to-background" />
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-10 h-10 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Get Your 2 Months Free Access
            </h2>
            <Sparkles className="w-10 h-10 text-primary animate-pulse" />
          </div>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join the first wave of businesses automating their social media presence
          </p>
          
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-accent-foreground hover:opacity-90 transition-all hover:scale-105 shadow-2xl group"
            asChild
          >
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
              Activate My Free Access
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Cancel anytime • Only ₹999/month after trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
