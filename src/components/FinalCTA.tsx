import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-border overflow-hidden group hover:border-primary/50 transition-all duration-500">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 mb-8">
                <Sparkles className="w-12 h-12 text-primary animate-pulse" />
                <h2 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-300%">
                    Get Your 2 Months
                  </span>
                  <br />
                  <span className="text-foreground">Free Access</span>
                </h2>
                <Zap className="w-12 h-12 text-secondary animate-pulse" 
                     style={{ animationDelay: '0.5s' }} />
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Join the first wave of businesses automating their social media presence
              </p>
              
              {/* CTA Button */}
              <div className="mb-10">
                <Button 
                  size="lg" 
                  className="text-xl md:text-2xl px-12 py-8 md:px-16 md:py-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-[0_0_60px_rgba(168,85,247,0.5)] hover:shadow-[0_0_80px_rgba(168,85,247,0.7)] group/button relative overflow-hidden"
                  asChild
                >
                  <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center font-bold">
                      Activate My Free Access
                      <ArrowRight className="ml-3 group-hover/button:translate-x-2 transition-transform" />
                    </span>
                  </a>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Only ₹999/month after trial</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional trust section */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Limited spots available for early access members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
