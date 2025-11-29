import { Sparkles } from "lucide-react";

const EarlyAccess = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary via-accent-foreground to-primary overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent-foreground/90 to-primary/90" />
          
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse delay-700" />
          
          <div className="relative z-10 text-center text-primary-foreground">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold">Early Access Offer</h2>
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            
            <p className="text-lg md:text-xl mb-6 font-medium">
              Limited Time Only
            </p>
            
            <div className="space-y-3 text-left max-w-2xl mx-auto bg-primary-foreground/10 p-6 rounded-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <p className="text-base md:text-lg">Get <strong>2 months free</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <p className="text-base md:text-lg">No payment today</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <p className="text-base md:text-lg">Cancel anytime — No risk</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                <p className="text-base md:text-lg">Only for the first businesses we contact</p>
              </div>
            </div>
            
            <p className="mt-6 text-sm opacity-90">
              After 2 months: ₹999/month • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
